/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { View, Rect } from 'ckeditor5';

/**
 * A view that represents a single range input element. It is based on a native input element with the `type="range"`.
 */
export default class InputRangeView extends View<HTMLInputElement> {
	/**
	 * The side of the slider (as in margin *left* or *right*) it refers to.
	 */
	public readonly side: SliderSide;

	constructor({
		className,
		side,
		onChange
	}: {
		className: string;
		side: SliderSide;
		onChange: SliderChangeCallback;
	}) {
		super();

		const bind = this.bindTemplate;

		this.side = side;

		this.setTemplate({
			tag: 'input',
			attributes: {
				class: ['ck', 'ck-input-range', className],
				type: 'range',
				min: 0,
				value: 0,
				max: 100,
				step: 'any',
				tabindex: -1
			},
			on: {
				change: bind.to(() => {
					const widthToMaxRatio = (new Rect(this.element!).width - InputRangeView.rulerThumbWidth) / 100;

					onChange(parseFloat(this.element!.value) * widthToMaxRatio, this.side);
				}),
				// This listener helps in the InlineEditor with the glitches when the user first clicks the input and moves the mouse.
				mousedown: bind.to(() => {
					this.element!.focus();
				})
			}
		});
	}

	/**
	 * Sets the value of the range input. The value must be a number between 0 and 100.
	 */
	public setValue(newValue: number): void {
		const elementRect = new Rect(this.element!);
		const elementValue = newValue / (elementRect.width - InputRangeView.rulerThumbWidth) * 100;

		this.element!.value = String(this.side === 'left' ? elementValue : 100 - elementValue);
	}

	/**
	 * A static helper that returns the width of the thumb (handle) of the range input. It cannot be obtained in another way
	 * as it is a private (shadow DOM) part of the native `<input>` component. Used for calculations.
	 */
	public static get rulerThumbWidth(): number {
		return parseInt(window.getComputedStyle(document.body).getPropertyValue('--ck-ruler-thumb-width'));
	}
}

export type SliderSide = 'left' | 'right';

/**
 * A callback called when the user moves the slider. The value is a number between 0 and 100
 * and must be interpolated to the pixel width.
 */
export type SliderChangeCallback = (value: number, side: SliderSide) => void;
