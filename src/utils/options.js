import { __ } from '@wordpress/i18n';

export const aligns = [
	{ label: __('Left', 'content-slider-block'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('Center', 'content-slider-block'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('Right', 'content-slider-block'), value: 'right', icon: 'editor-alignright' },
	{ label: __('Justify', 'content-slider-block'), value: 'justify', icon: 'editor-justify' }
];

export const effects = [
	{ label: __('Slide', 'content-slider-block'), value: 'slide' },
	{ label: __('Fade', 'content-slider-block'), value: 'fade' }
];

export const tabs = [
	{ name: 'general', title: __('General', 'content-slider-block') },
	{ name: 'options', title: __('Options', 'content-slider-block') },
	{ name: 'style', title: __('Style', 'content-slider-block') }
];