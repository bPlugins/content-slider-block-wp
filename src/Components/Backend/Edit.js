import { useState, useEffect, useRef, useCallback } from 'react';
import { withSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import { produce } from 'immer';
const $ = jQuery;

import Settings from './Settings/Settings';
import Slider from '../Common/Slider';
import Style from '../Common/Style';
import { prefix } from '../../utils/data';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected, isEditorSidebarOpened } = props;
	const { slides = [], columns, columnGap, isLoop, speed, effect, isPage, isPageClickable, isPageDynamic, isPrevNext, isTitle, isDesc, isBtn } = attributes;

	const blockProps = useBlockProps();
	const id = blockProps.id;

	const [activeIndex, setActiveIndex] = useState(0);
	const [rendered, setRendered] = useState(true);
	const blockRef = useRef(null);

	// Merge useBlockProps ref with our blockRef
	const mergedRef = useCallback(node => {
		blockRef.current = node;
		if (blockProps.ref) {
			if (typeof blockProps.ref === 'function') {
				blockProps.ref(node);
			} else {
				blockProps.ref.current = node;
			}
		}
	}, [blockProps.ref]);

	useEffect(() => {
		setRendered(!rendered);
	}, [slides, columns, columnGap, isLoop, speed, effect, isPage, isPageClickable, isPageDynamic, isPrevNext, isTitle, isDesc, isBtn, isEditorSidebarOpened]);

	const updateSlide = (index, type, val, cI = false, cT = false) => {
		const newSlides = produce(slides, draft => {
			if (false !== cI && cT) {
				draft[index][type][cI][cT] = val;
			} else if (false !== cI && false === cT) {
				draft[index][type][cI] = val;
			} else {
				draft[index][type] = val;
			}
		})
		setAttributes({ slides: newSlides });
		setActiveIndex(index);
	}

	$(document).ready(function () {
		const doc = document.querySelector('iframe[name="editor-canvas"]')?.contentDocument || document;

		slides?.length && slides.map((_, index) => {
			const contentEl = doc.querySelector(`#${id} .${prefix} .slide-${index}:not(.swiper-slide-duplicate) .slideContent`);
			const contentChildEls = contentEl?.children || [];

			for (let i = 0; i < contentChildEls?.length; i++) {
				$(contentChildEls[i]).draggable({
					containment: 'parent',
					cursor: 'dragging',

					stop(event, ui) {
						const { top: topP, left: leftP } = ui.position;
						const { clientWidth, clientHeight } = event.target || {};
						const { clientWidth: parentWidth, clientHeight: parentHeight } = event.target?.parentElement || {};

						const top = (topP / parentHeight) * 100;
						const left = (leftP / parentWidth) * 100;

						// Adjust calculation for the right and bottom positions
						const right = ((parentWidth - (leftP + clientWidth)) / parentWidth) * 100;
						const bottom = ((parentHeight - (topP + clientHeight)) / parentHeight) * 100;

						updateSlide(index, 'childPositions', { top, right, bottom, left }, i);
					}
				});
			}
		});
	});

	const SliderEl = () => <Slider attributes={attributes} initialSlide={activeIndex} isBackend={true} />

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} activeIndex={activeIndex} setActiveIndex={setActiveIndex} id={id} />

		<div {...blockProps} ref={mergedRef}>
			{!isSelected && <div className='mouse'></div>}

			<Style attributes={attributes} id={id} />

			<SliderEl />
		</div>
	</>;
};
export default withSelect((select) => {
	return {
		isEditorSidebarOpened: !!select('core/edit-post')?.isEditorSidebarOpened()
	};
})(Edit);