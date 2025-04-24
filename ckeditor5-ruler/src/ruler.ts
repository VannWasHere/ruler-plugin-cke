/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { Rect, ResizeObserver, Plugin, Element, ViewElement, ViewRenderEvent } from 'ckeditor5';
import RulerView from './rulerview';
import type { HeadingOption } from '@ckeditor/ckeditor5-heading';
import type { SliderSide } from './inputrangeview';

const DEFAULT_BLOCK_ELEMENTS = ['paragraph', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6'];

/**
 * The Ruler plugin. It provides a ruler UI component that allows the user to set the left and right margin and the text indent
 * of certain block in the editor content.
 */
export default class Ruler extends Plugin {
	/**
	 * The reference to the ruler view instance. Can be added to the toolbar container or any other place in the UI
	 * as long as it retains 100% width of the editing root in DOM.
	 */
	public rulerView: RulerView;

	/**
	 * Used to observe the ruler view element for resize events and update the ruler.
	 *
	 * @internal
	 */
	private _resizeObserver: ResizeObserver;

	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'Ruler' as const;
	}

	public init(): void {
		this._setupRulerView();
		this._setupRulerUpdates();
		this._setupConversion();
	}

	public destroy(): void {
		super.destroy();

		this.rulerView.destroy();
		this._resizeObserver.destroy();
	}

	/**
	 * Renders the #rulerView and registers it in the editor UI.
	 *
	 * **Note**: It's up to the integrator where the ruler should be placed in the UI when the editor is ready.
	 *
	 * @internal
	 */
	private _setupRulerView(): void {
		this.editor.ui.on('ready', () => {
			this.rulerView = new RulerView(
				this._onRulerMarginChange.bind(this),
				this._onRulerTextIndentChange.bind(this)
			);

			this.rulerView.render();

			// Let the focus tracking system know about the ruler view so that the editor will not blur when the
			// user manipulates the ruler.
			this.editor.ui.focusTracker.add(this.rulerView.element!);
		});
	}

	/**
	 * Attaches listeners to the editor's events to update the ruler view. The rules gets updated whenever the
	 * editor's view is rendered or the editor is resized.
	 *
	 * @internal
	 */
	private _setupRulerUpdates(): void {
		this.editor.on('ready', () => {
			this._updateRuler();

			this.editor.editing.view.on<ViewRenderEvent>('render', () => {
				this._updateRuler();
			});

			// Update the state of the ruler when it got resized in DOM. Failing to do so will result in the ruler
			// staying out of sync with the editor's content.
			this._resizeObserver = new ResizeObserver(this.rulerView.element!, () => {
				this._updateRuler();
			});
		});
	}

	/**
	 * Enables 'marginLeft', 'marginRight', and 'textIndent' model attributes on supported model elements.
	 *
	 * Those attributes are used to store the left and right margin and the text indent of the block elements.
	 *
	 * It also enables upcast and downcast conversion for those attributes for the data to be properly loaded into the editor (upcast)
	 * and then rendered in the view or obtained using `editor.getData()` (downcast).
	 *
	 * @internal
	 */
	private _setupConversion(): void {
		const schema = this.editor.model.schema;
		const conversion = this.editor.conversion;

		// Enable model attributes on all supported block elements.
		this._getAllowedBlockNames().forEach(elementName => {
			if (schema.isRegistered(elementName)) {
				schema.extend(elementName, {
					allowAttributes: ['marginLeft', 'marginRight', 'textIndent']
				});
			}
		});

		setupAttributeConversion('margin-left', 'marginLeft');
		setupAttributeConversion('margin-right', 'marginRight');
		setupAttributeConversion('text-indent', 'textIndent');

		// Enables upcast and downcast conversion for the given model attribute and view style property.
		// For instance the marginLeft model attribute will be converted to the 'margin-left' view style property
		// and vice versa.
		function setupAttributeConversion(marginProperty: string, modelAttribute: string) {
			conversion.for('upcast').attributeToAttribute({
				view: {
					styles: {
						[marginProperty]: /[\s\S]+/
					}
				},
				model: {
					key: modelAttribute,
					value: (viewElement: ViewElement) => {
						return viewElement.getStyle(marginProperty);
					}
				}
			});

			conversion.for('downcast').attributeToAttribute({
				model: modelAttribute,
				view: modelAttributeValue => {
					return {
						key: 'style',
						value: {
							[marginProperty as string]: modelAttributeValue as string
						}
					};
				}
			});
		}
	}

	/**
	 * Updates the state of the ruler (left, right margin and the text indent sliders) view according to the current user selection.
	 * The first selected supported $block element is used as a source of the state.
	 *
	 * @internal
	 */
	private _updateRuler(): void {
		// Don't update the ruler if it's invisible. It requires the element to be visible in DOM for geometry calculations.
		if (!this.rulerView.element || !this.rulerView.element!.offsetParent) {
			return;
		}

		const firstSelectedBlock = this._getSelectedAllowedBlocks()[0];

		if (firstSelectedBlock) {
			const editing = this.editor.editing;
			const editingView = editing.view;
			const viewElement = editing.mapper.toViewElement(firstSelectedBlock)!;
			const domElement = editingView.domConverter.mapViewToDom(viewElement)!;
			const rootOffsets = this._getElementRootOffset(viewElement);

			// Enable the ruler before setting its value(s). It might've been disabled in the past
			this.rulerView.isEnabled = true;

			this.rulerView.setValue({
				marginLeft: rootOffsets.left,
				marginRight: rootOffsets.right,
				textIndent: rootOffsets.left + parseFloat(window.getComputedStyle(domElement).textIndent)
			});
		} else {
			// Disable the ruler when there is nothing to show.
			this.rulerView.isEnabled = false;
		}
	}

	/**
	 * Returns the left and right offset of the view element relative to the bounding rect of the root element.
	 *
	 * @internal
	 */
	private _getElementRootOffset(viewElement: ViewElement): { left: number; right: number } {
		const editing = this.editor.editing;
		const editingView = editing.view;
		const viewRootDomElement = editingView.domConverter.mapViewToDom(viewElement.root) as HTMLElement;
		const elementRect = new Rect(editingView.domConverter.mapViewToDom(viewElement)!);
		const rootRect = new Rect(viewRootDomElement).excludeScrollbarsAndBorders();

		return {
			left: elementRect.left - rootRect.left,
			right: rootRect.right - elementRect.right
		};
	}

	/**
	 * Returns the list of block elements that can be used with the ruler. By default, paragraphs and all heading elements are allowed.
	 *
	 * @internal
	 */
	private _getAllowedBlockNames(): Array<string> {
		const options: Array<HeadingOption> = this.editor.config.get('heading.options')!;
		const configuredElements = options && options.map(option => option.model);

		return configuredElements || DEFAULT_BLOCK_ELEMENTS;
	}

	/**
	 * Returns all currently selected block elements that allow margin and text indent attributes.
	 *
	 * @internal
	 */
	private _getSelectedAllowedBlocks(): Array<Element> {
		const allowedBlockNames = this._getAllowedBlockNames();

		return [...this.editor.model.document.selection.getSelectedBlocks()]
			.filter(block => allowedBlockNames.includes(block.name));
	}

	/**
	 * A callback executed when the user changed the margin in the #rulerView. It updates the margin of the selected block elements
	 * that support it.
	 *
	 * @internal
	 */
	private _onRulerMarginChange(rulerValue: number, side: SliderSide): void {
		const selectedModelBlocks = this._getSelectedAllowedBlocks();

		if (selectedModelBlocks.length) {
			rulerValue = this._normalizeRulerValue(rulerValue, side);

			this.editor.model.change(writer => {
				for (const block of selectedModelBlocks) {
					const rootOffsets = this._getElementRootOffset(this.editor.editing.mapper.toViewElement(block)!);
					const attributeName = side === 'left' ? 'marginLeft' : 'marginRight';
					const currentMargin = parseFloat(block.getAttribute(attributeName) as string) || 0;
					const rulerOffsetDiff = rulerValue - rootOffsets[side];

					writer.setAttribute(attributeName, `${currentMargin + rulerOffsetDiff}px`, block);
				}
			});
		}
	}

	/**
	 * * A callback executed when the user changed the text indent in the #rulerView. It updates the text indent of the
	 * selected block elements that support it.
	 *
	 * @internal
	 */
	private _onRulerTextIndentChange(rulerValue: number) {
		const selectedModelBlocks = this._getSelectedAllowedBlocks();

		if (selectedModelBlocks.length) {
			rulerValue = this._normalizeRulerValue(rulerValue, 'left');

			this.editor.model.change(writer => {
				for (const block of selectedModelBlocks) {
					const rootOffsets = this._getElementRootOffset(this.editor.editing.mapper.toViewElement(block)!);
					const currentTextIndent = parseInt(block.getAttribute('textIndent') as string || '0');
					const rulerOffsetDiff = rulerValue - (rootOffsets.left + currentTextIndent);

					writer.setAttribute('textIndent', `${currentTextIndent + rulerOffsetDiff}px`, block);
				}
			});
		}
	}

	/**
	 * Normalizes the value retrieved from the ruler view when the user moved the slider.
	 *
	 * @internal
	 */
	private _normalizeRulerValue(value: number, side: SliderSide): number {
		// The right ruler (slider) value must be subtracted from the width of the root element to get the correct value.
		if (side === 'right') {
			const editing = this.editor.editing;
			const editingView = editing.view;
			const viewRootDomElement = editingView.domConverter.mapViewToDom(editingView.document.getRoot()!)!;
			const rootRect = new Rect(viewRootDomElement).excludeScrollbarsAndBorders();

			return Math.round(rootRect.width - value);
		} else {
			return Math.round(value);
		}
	}
}

