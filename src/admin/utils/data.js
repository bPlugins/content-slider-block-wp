import { __ } from '@wordpress/i18n';

import { gutenbergTabIcon } from './icons';

const slug = 'content-slider-block';

export const dashboardInfo = (info) => {
	const { version, startUrl, adminUrl = '', licenseActiveNonce } = info;

	return {
		name: `Content Slider Block`,
		displayName: `Content Slider Block - Slide Through Text or Media Content`,
		description: 'Professionally showcase your carousel slider with the Content Slider Block plugin. This plugin adds a new block in the Block Editor by which you can create a professional-looking content slider!',
		slug,
		version,
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
			// proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
			video: '',
			isYoutube: true
		},
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			// landing: `https://bplugins.com/products/${slug}/`,
			docs: `https://bplugins.com/docs/${slug}/`,
			pricing: `https://bplugins.com/products/${slug}/pricing/`,
		},
		freemius: {
			product_id: 14795,
			plan_id: 24643,
			public_key: 'pk_9c4ec15b2a1340392c3932bd66c9e'
		},
		licenseActiveNonce,
		startButton: {
			label: 'Start Now',
			url: startUrl
		}
	}
}

export const welcomeInfo = (adminUrl) => ({
	keywords: ['Slider', 'Layout', 'Effects', 'Autoplay'],
	keywordsLabel: 'Features',
	gettingStarted: {
		tabs: [
			{
				key: 'gutenberg',
				label: 'Gutenberg',
				icon: gutenbergTabIcon,
				steps: [
					{
						num: 1,
						title: 'Add the Content Slider Block',
						body: 'Open the block editor on any page or post. Click the <strong>+</strong> icon in the top-left corner or type <strong>/Content Slider</strong> to find and insert the Content Slider block.',
						link: { url: `${adminUrl}/post-new.php?post_type=page`, label: 'Open Editor' }
					},
					{
						num: 2,
						title: 'Add Slides & Content',
						body: 'Click the <strong>Add New Slide</strong> button inside the block to add slides. Customize each slide\'s background (image or color), title, description, and button settings.'
					},
					{
						num: 3,
						title: 'Configure Slider & Publish',
						body: 'Select the parent block to configure layout settings in the sidebar: adjust slider height, transition effects, navigation/pagination, speed, and autoplay delay. Publish when ready.'
					}
				]
			}
		]
	},
	changelogs: [
		{
			version: '3.2.1 - 11 Jun 2026',
			type: 'update',
			list: [
				'Update: SDK',
				'Update: Performance Improvement'
			]
		},
		{
			version: '3.2.0 - 04 Mar 2026',
			type: 'update',
			list: [
				'Update: Admin Dashboard - Improved UI with better navigation and clearer feature organization.'
			]
		},
		{
			version: '3.1.9 - 27 Nov 2025',
			type: 'update',
			list: [
				'Update Admin Dashboard.',
				'Update SDK.'
			]
		},
		{
			version: '3.1.8 - 5 May 2025',
			type: 'fix',
			list: [
				'Fix textdomain issue.'
			]
		},
		{
			version: '3.1.7 - 27 Jan 2025',
			type: 'update',
			list: [
				'Update SDK.'
			]
		},
		{
			version: '3.1.6 - 2 Nov 2024',
			type: 'fix',
			list: [
				'Fix ShortCode Issue'
			]
		}
	],
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		__('Sort your slides easily with sortable feature.', 'content-slider-block'),
		__('Add custom border styles to every slide.', 'content-slider-block'),
		__('Advanced autoplay with delay and interaction settings.', 'content-slider-block'),
		__('Stunning effects like Cube, Coverflow and Flip.', 'content-slider-block'),
		__('Enable free mode, sticky and keyboard control.', 'content-slider-block')
	]
})

export const demoInfo = {
	allInOneLabel: 'See All Demos',
	allInOneLink: '',
	demos: [
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z'/>`,
			title: 'Default, Image Background',
			type: 'iframe',
			url: 'https://csb.bplugins.com/demo/default-image-background/',
			category: 'Basic'
		},
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z'/>`,
			title: 'Layout',
			children: [
				{
					title: 'Custom Content Position',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/custom-content-position/'
				},
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z'/>`,
					title: 'Image Slider, Width 80%',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/image-slider-width-80/'
				}
			]
		},
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path d='M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z'/>`,
			title: 'Hide Pagination-Navigation on Tablet and Mobile',
			type: 'iframe',
			url: 'https://csb.bplugins.com/demo/hide-pagination-navigation-on-tablet-and-mobile/',
			category: 'Responsive'
		},
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='mouse'><path d='M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5'/>`,
			title: 'Slide on Mousewheel',
			type: 'iframe',
			url: 'https://csb.bplugins.com/demo/slide-on-mousewheel/',
			category: 'Interaction'
		},
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='collection-fill'><path d='M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1'/>`,
			title: 'Effect',
			children: [
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='mask'><path d='M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546M4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z'/>`,
					title: 'Fade Effect',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/fade-effect/'
				},
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z'/>`,
					title: 'Cube Effect',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/cube-effect/'
				},
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path d='M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z'/>`,
					title: 'Creative Effect',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/creative-effect/'
				},
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='collection-fill'><path d='M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1'/>`,
					title: 'Coverflow Effect',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/coverflow-effect/'
				},
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z'/>`,
					title: 'Flip Effect',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/flip-effect/'
				},
				{
					icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='card-heading'><path d='M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z'/><path d='M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z'/>`,
					title: 'Cards Effect',
					type: 'iframe',
					url: 'https://csb.bplugins.com/demo/cards-effect/'
				}
			]
		}
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 14795,
	planId: 24643,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3, // choose from licenses item
		text: 'Best Value'
	}
}