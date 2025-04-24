/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { View } from 'ckeditor5';
import InputRangeView, { type SliderChangeCallback } from './inputrangeview.js';

import '../theme/ruler.css';

/**
 * Represents the ruler UI component with three sliders: left and right margins, and the text indent.
 */
export default class RulerView extends View {
	/**
	 * When `false` the ruler will not display the handles or allow for changing their values.
	 */
	declare public isEnabled: boolean;

	/**
	 * @internal
	 */
	private readonly _marginLeftSlider: InputRangeView;

	/**
	 * @internal
	 */
	private readonly _marginRightSlider: InputRangeView;

	/**
	 * @internal
	 */
	private readonly _textIndentSlider: InputRangeView;

	/**
	 *
	 * @param onMarginChange The callback called when the user moves the margin sliders.
	 * @param onIndentChange The callback called when the user moves the text indent slider.
	 */
	constructor(onMarginChange: SliderChangeCallback, onIndentChange: SliderChangeCallback) {
		super();

		const bind = this.bindTemplate;

		this.set('isEnabled', false);

		this._marginLeftSlider = new InputRangeView({
			className: 'ck-ruler__slider_margin-left',
			side: 'left',
			onChange: onMarginChange
		});

		this._marginRightSlider = new InputRangeView({
			className: 'ck-ruler__slider_margin-right',
			side: 'right',
			onChange: onMarginChange
		});

		this._textIndentSlider = new InputRangeView({
			className: 'ck-ruler__slider_text-indent',
			side: 'left',
			onChange: onIndentChange
		});

		this.setTemplate({
			tag: 'div',
			attributes: {
				class: [
					'ck',
					'ck-ruler',
					bind.if('isEnabled', 'ck-disabled', isEnabled => !isEnabled)
				],
				tabindex: -1
			},
			children: [
				this._marginLeftSlider,
				this._marginRightSlider,
				this._textIndentSlider
			]
		});
	}

	/**
	 * Sets the value of the sliders.
	 *
	 * Each slider value must be in [0,100] range.
	 */
	public setValue({ marginLeft, marginRight, textIndent }: {
		marginLeft: number;
		marginRight: number;
		textIndent: number;
	}): void {
		this._marginLeftSlider.setValue(marginLeft);
		this._marginRightSlider.setValue(marginRight);
		this._textIndentSlider.setValue(textIndent);
	}
}
