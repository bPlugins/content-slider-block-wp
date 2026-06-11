import { __ } from '@wordpress/i18n';
import { PanelRow, TextControl, TextareaControl, __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import { produce } from 'immer';

import { Label, Background, ColorControl, ColorsControl, Notice } from '../../../../../bpl-tools/Components';
import { primaryColor, secondaryColor } from '../../../../../bpl-tools/utils/data';

import { getPosByPos } from '../../../utils/functions';
import { prefix } from '../../../utils/data';

const ItemSettings = ({ attributes, setAttributes, clientId, arrKey, index, setActiveIndex = false }) => {
	const items = attributes[arrKey];
	const { background, title, titleColor, description, descColor, btnText, btnLink, btnColors, btnHovColors } = items[index];

	const updateSlide = (index, property, val) => {
		const newSlides = produce(attributes[arrKey], draft => {
			draft[index][property] = val;
		});

		setAttributes({ [arrKey]: newSlides });
		setActiveIndex && setActiveIndex(index);
	}

	return <>
		<Background label={__('Background', 'content-slider-block')} value={background} onChange={val => updateSlide(index, 'background', val)} defaults={{ color: '#00000080' }} />



		<PanelRow>
			<Label className=''>{__('Content Position', 'content-slider-block')}</Label>
			<AlignmentMatrixControl onChange={val => {
				setAttributes({
					slides: produce(items, draft => {
						draft[index]['position'] = val;
						draft[index]['childPositions'] = getPosByPos(`${prefix}-${clientId}`, index, val);
					})
				})
			}} />
		</PanelRow>
		<small>{__('You can also change the content position by dragging element.', 'content-slider-block')}</small>

		<PanelRow className='mt20'>
			<Label className=''>{__('Title:', 'content-slider-block')}</Label>
			<TextControl value={title} onChange={val => updateSlide(index, 'title', val)} placeholder={__('Slide title', 'content-slider-block')} />
		</PanelRow>

		<ColorControl label={__('Title Color:', 'content-slider-block')} value={titleColor} onChange={val => updateSlide(index, 'titleColor', val)} defaultColor='#fff' />

		<Label>{__('Description:', 'content-slider-block')}</Label>
		<TextareaControl value={description} onChange={val => updateSlide(index, 'description', val)} placeholder={__('Description of the slider', 'content-slider-block')} />

		<ColorControl label={__('Description Color:', 'content-slider-block')} value={descColor} onChange={val => updateSlide(index, 'descColor', val)} defaultColor='#fff' />

		<PanelRow className='mt20'>
			<Label className=''>{__('Button Text:', 'content-slider-block')}</Label>
			<TextControl value={btnText} onChange={val => updateSlide(index, 'btnText', val)} placeholder={__('Button label', 'content-slider-block')} />
		</PanelRow>

		<PanelRow>
			<Label className=''>{__('Button Link:', 'content-slider-block')}</Label>
			<TextControl value={btnLink} onChange={val => updateSlide(index, 'btnLink', val)} placeholder={__('Button link', 'content-slider-block')} />
		</PanelRow>

		<ColorsControl label={__('Button Colors:', 'content-slider-block')} value={btnColors} onChange={val => updateSlide(index, 'btnColors', val)} defaults={{ color: '#fff', bg: primaryColor }} />

		<ColorsControl label={__('Button Hover Colors:', 'content-slider-block')} value={btnHovColors} onChange={val => updateSlide(index, 'btnHovColors', val)} defaults={{ color: '#fff', bg: secondaryColor }} />

		<Notice status='premium' isIcon={true}>{__('Unlock border styling options with Premium version.', 'content-slider-block')}</Notice>
	</>
}
export default ItemSettings;