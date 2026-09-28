import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RangeControl, ToolbarGroup, ToolbarButton, Dashicon, ToggleControl, TabPanel, __experimentalUnitControl as UnitControl, SelectControl } from '@wordpress/components';

import { Label, ColorControl, Device, ItemsPanel, HelpPanel, Typography, BBlocksAds, Notice } from '../../../../../bpl-tools/Components';
import { BorderControl, SpaceControl } from '../../../../../bpl-tools/Components/Deprecated';
import { AdvertiseCard, PremiumBadge, PremiumPanel } from '../../../../../bpl-tools/ProControls';
import { pxUnit, perUnit, emUnit, vhUnit } from '../../../../../bpl-tools/utils/options';
import { primaryColor, secondaryColor } from '../../../../../bpl-tools/utils/data';

import { pluginSlug, pricingUrl } from '../../../utils/data';
import { effects, tabs } from '../../../utils/options';
import ItemSettings from './ItemSettings';

const defaultChildPositions = [
	{
		top: 36,
		right: 44.71,
		bottom: 44.5,
		left: 44.71
	},
	{
		top: 47.5,
		right: 34.67,
		bottom: 52.5,
		left: 34.67
	},
	{
		top: 55.5,
		right: 44.54,
		bottom: 67,
		left: 44.54
	}
];

const Settings = ({ attributes, setAttributes, clientId, activeIndex, setActiveIndex, device }) => {
	const { slides = [], columns, columnGap, sliderWidth, sliderHeight, isLoop, isTouchMove, speed, isAutoplay, effect, isPage, isPageClickable, isPageDynamic, isPrevNext, pageColor, pageWidth, pageHeight, pageBorder, prevNextColor, sliderAlign, isTitle, titleTypo, isDesc, descTypo, isBtn, linkTarget, btnTypo, btnPadding, btnBorder } = attributes;

	const newSlide = {
		background: { color: '#00000080' },
		border: {},
		position: 'center center',
		childPositions: defaultChildPositions,
		title: `Slide Title ${slides.length + 1}`,
		titleColor: '#fff',
		description: `This content area describes slider ${slides.length + 1} descriptions/details.`,
		descColor: '#fff',
		btnText: `Button ${slides.length + 1}`,
		btnLink: '#',
		btnColors: { color: '#fff', bg: primaryColor },
		btnHovColors: { color: '#fff', bg: secondaryColor }
	}

	const addSlide = () => {
		setAttributes({
			slides: [...slides, newSlide]
		});
		setActiveIndex(slides.length);
	}

	const premiumProps = {};

	const panelBodyIF = {
		className: 'bPlPanelBody',
		initialOpen: false
	}

	const itemsProps = { attributes, setAttributes, clientId, arrKey: 'slides', activeIndex, setActiveIndex, premiumProps }

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={tabs}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug={pluginSlug} docsLink='https://bplugins.com/docs/content-slider-block/' />


					<PanelBody className='bPlPanelBody' title={__('Slides', 'content-slider-block')}>
						<ItemsPanel {...itemsProps} newItem={newSlide} ItemSettings={ItemSettings} itemLabel='Slide' design='all' />
					</PanelBody>


					<PanelBody title={__('Layout Settings', 'content-slider-block')} {...panelBodyIF}>
						<PanelRow>
							<Label className='mb5'>{__('Columns:', 'content-slider-block')}</Label>
							<Device />
						</PanelRow>
						<RangeControl value={columns[device]} onChange={val => { setAttributes({ columns: { ...columns, [device]: val } }) }} min={1} max={6} step={1} beforeIcon='grid-view' />

						<Label>{__('Column Gap:', 'content-slider-block')}</Label>
						<RangeControl value={columnGap} onChange={val => setAttributes({ columnGap: val })} min={0} max={250} step={1} beforeIcon='arrow-right-alt' />

						<UnitControl className='mt20' label={__('Width:', 'content-slider-block')} labelPosition='left' value={sliderWidth} onChange={val => setAttributes({ sliderWidth: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<UnitControl className='mt20' label={__('Height:', 'content-slider-block')} labelPosition='left' value={sliderHeight} onChange={val => setAttributes({ sliderHeight: val })} units={[pxUnit(), emUnit(), vhUnit()]} />
					</PanelBody>
				</>}


				{'options' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Basic Options', 'content-slider-block')}>
						<ToggleControl label={__('Enable Loop', 'content-slider-block')} checked={isLoop} onChange={val => setAttributes({ isLoop: val })} />

						<ToggleControl className='mt10' label={__('Enable Touch Move', 'content-slider-block')} checked={isTouchMove} onChange={val => setAttributes({ isTouchMove: val })} />
						<small>{__('Switch slide with grab in anywhere in slide', 'content-slider-block')}</small>
						<small>{__('Touch Move will not work in backend', 'content-slider-block')}</small>

						<Label>{__('Speed (s):', 'content-slider-block')}</Label>
						<RangeControl value={speed} onChange={val => setAttributes({ speed: val })} min={0} max={10} step={.05} />
						<small>{__('Smaller speed value will be slide faster', 'content-slider-block')}</small>
					</PanelBody>


					<PanelBody title={__('Autoplay', 'content-slider-block')} {...panelBodyIF}>
						<ToggleControl label={__('Enable Autoplay', 'content-slider-block')} checked={isAutoplay} onChange={val => setAttributes({ isAutoplay: val })} />
						<small>{__('Autoplay will not work in backend', 'content-slider-block')}</small>

						{isAutoplay && <>
							<Notice status='premium' isIcon={true}>{__('Unlock advanced autoplay settings (delay, reverse direction, pause on hover, stop on last slide, etc.) with Premium version.', 'content-slider-block')}</Notice>
						</>}
					</PanelBody>


					<PanelBody title={<>{__('Free Mode', 'content-slider-block')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Free Mode', 'content-slider-block')} description={__('Unlock Free Mode, smooth scrolling, and sticky slide settings with Premium version.', 'content-slider-block')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody title={__('Effects', 'content-slider-block')} {...panelBodyIF}>
						<PanelRow>
							<Label className=''>{__('Effect:', 'content-slider-block')}</Label>
							<SelectControl value={effect}
								onChange={val => {
									setAttributes({ effect: val });
									val === 'slide' && setAttributes({
										columns: { desktop: 1, tablet: 1, mobile: 1 },
										sliderWidth: '100%',
										sliderHeight: '400px',
										sliderPadding: { vertical: '0px', horizontal: '0px' }
									});
									val === 'fade' && setAttributes({
										columns: { desktop: 1, tablet: 1, mobile: 1 },
										sliderWidth: '100%',
										sliderHeight: '400px',
										sliderPadding: { vertical: '0px', horizontal: '0px' }
									});
								}}
								options={effects}
							/>
						</PanelRow>
						<small>{__('To work fade effect properly, set single column per view.', 'content-slider-block')}</small>
						<br />
						<small>{__('Some settings may change when effect is changed.', 'content-slider-block')}</small>
						<Notice status='premium' isIcon={true}>{__('Unlock Cube, Creative, Coverflow, Flip, and Cards transition effects with Premium version.', 'content-slider-block')}</Notice>
					</PanelBody>


					<PanelBody title={<>{__('Keyboard Control', 'content-slider-block')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Keyboard Control', 'content-slider-block')} description={__('Unlock Keyboard control to navigate slides using keyboard keys with Premium version.', 'content-slider-block')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody title={<>{__('Mousewheel', 'content-slider-block')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Mousewheel', 'content-slider-block')} description={__('Unlock Mousewheel scroll control to slide through content on scroll with Premium version.', 'content-slider-block')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody title={__('Pagination', 'content-slider-block')} {...panelBodyIF}>
						<ToggleControl label={__('Show Pagination', 'content-slider-block')} checked={isPage} onChange={val => setAttributes({ isPage: val })} />

						{isPage && <>
							<ToggleControl className='mt10' label={__('Enable Pagination Clickable', 'content-slider-block')} checked={isPageClickable} onChange={val => setAttributes({ isPageClickable: val })} />

							<ToggleControl className='mt10' label={__('Enable Pagination Dynamic Bullets', 'content-slider-block')} checked={isPageDynamic} onChange={val => setAttributes({ isPageDynamic: val })} />

							<Notice status='premium' isIcon={true}>{__('Unlock device-specific visibility controls (Show on Tablet/Mobile) for Pagination with Premium version.', 'content-slider-block')}</Notice>
						</>}
					</PanelBody>


					<PanelBody title={__('Navigation', 'content-slider-block')} {...panelBodyIF}>
						<ToggleControl label={__('Show Preview Next Button', 'content-slider-block')} checked={isPrevNext} onChange={val => setAttributes({ isPrevNext: val })} />

						{isPrevNext && <>
							<Notice status='premium' isIcon={true}>{__('Unlock device-specific visibility controls (Show on Tablet/Mobile) for Navigation with Premium version.', 'content-slider-block')}</Notice>
						</>}
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody title={<>{__('Slider', 'content-slider-block')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Slider', 'content-slider-block')} description={__('Unlock Slider background and padding styling options with Premium version.', 'content-slider-block')} pricingUrl={pricingUrl} />
					</PanelBody>


					{isPage || isPrevNext ? <PanelBody title={__('Options', 'content-slider-block')} {...panelBodyIF}>
						{isPage && <>
							<ColorControl label={__('Pagination Bullets Color:', 'content-slider-block')} value={pageColor} onChange={val => setAttributes({ pageColor: val })} defaultColor='#fff' />

							<UnitControl className='mt20' label={__('Pagination Width:', 'content-slider-block')} labelPosition='left' value={pageWidth} onChange={val => setAttributes({ pageWidth: val })} units={[pxUnit(), emUnit()]} />

							<UnitControl className='mt20' label={__('Pagination Height:', 'content-slider-block')} labelPosition='left' value={pageHeight} onChange={val => setAttributes({ pageHeight: val })} units={[pxUnit(), emUnit()]} />

							<BorderControl label={__('Pagination Border:', 'content-slider-block')} value={pageBorder} onChange={val => setAttributes({ pageBorder: val })} defaults={{ radius: '50%' }} />
						</>}

						{isPrevNext && <ColorControl label={__('Preview Next Button Color:', 'content-slider-block')} value={prevNextColor} onChange={val => setAttributes({ prevNextColor: val })} defaultColor='#fff' />}
					</PanelBody> : ''}


					<PanelBody title={__('Slide Title', 'content-slider-block')} {...panelBodyIF}>
						<ToggleControl label={__('Show Title', 'content-slider-block')} checked={isTitle} onChange={val => setAttributes({ isTitle: val })} />

						{isTitle && <Typography value={titleTypo} onChange={val => setAttributes({ titleTypo: val })} defaults={{ fontSize: { desktop: 25, tablet: 22, mobile: 20 } }} />}
					</PanelBody>


					<PanelBody title={__('Slide Description', 'content-slider-block')} {...panelBodyIF}>
						<ToggleControl label={__('Show Description', 'content-slider-block')} checked={isDesc} onChange={val => setAttributes({ isDesc: val })} />

						{isDesc && <Typography value={descTypo} onChange={val => setAttributes({ descTypo: val })} defaults={{ fontSize: { desktop: 15, tablet: 15, mobile: 15 } }} />}
					</PanelBody>


					<PanelBody title={__('Slide Button', 'content-slider-block')} {...panelBodyIF}>
						<ToggleControl label={__('Show Button', 'content-slider-block')} checked={isBtn} onChange={val => setAttributes({ isBtn: val })} />

						{isBtn && <>
							<ToggleControl className='mt10' label={__('Open link in new tab', 'content-slider-block')} checked={'_blank' === linkTarget ? true : false} onChange={val => setAttributes({ linkTarget: val ? '_blank' : '' })} />

							<Typography value={btnTypo} onChange={val => setAttributes({ btnTypo: val })} defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 } }} />

							<SpaceControl className='mt20' label={__('Padding:', 'content-slider-block')} value={btnPadding} onChange={val => setAttributes({ btnPadding: val })} defaults={{ vertical: '12px', horizontal: '35px' }} />

							<BorderControl label={__('Border:', 'content-slider-block')} value={btnBorder} onChange={val => setAttributes({ btnBorder: val })} defaults={{ radius: '3px' }} />
						</>}
					</PanelBody>
				</>}
			</>}</TabPanel>

			<AdvertiseCard planLink={pricingUrl} />
		</InspectorControls>


		<BlockControls>
			<ToolbarGroup className='bPlToolbar'>
				<ToolbarButton label={__('Add New Slide', 'content-slider-block')} onClick={addSlide} ><Dashicon icon='plus' /></ToolbarButton>
			</ToolbarGroup>

			<AlignmentToolbar value={sliderAlign} onChange={val => setAttributes({ sliderAlign: val })} describedBy={__('Slider Alignment')} alignmentControls={[
				{ title: __('Slider in left', 'content-slider-block'), align: 'left', icon: 'align-left' },
				{ title: __('Slider in center', 'content-slider-block'), align: 'center', icon: 'align-center' },
				{ title: __('Slider in right', 'content-slider-block'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};
export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase()
	}
})(Settings);