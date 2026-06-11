import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade, EffectCube, EffectCreative, EffectCoverflow, EffectFlip, EffectCards } from 'swiper/modules';

import { sanitizeHTML } from '../../../../bpl-tools/utils/common';

import { prefix } from '../../utils/data';

const Slider = ({ attributes, initialSlide = 0, isBackend = false }) => {
	const { slides = [], columns, columnGap, isLoop, isTouchMove, speed, isAutoplay, effect, isPage, isPageClickable, isPageDynamic, isPrevNext, isTitle, isDesc, isBtn } = attributes;

	return <Swiper
		className={prefix}
		direction='horizontal'
		initialSlide={initialSlide}
		slidesPerView={columns.mobile}
		breakpoints={{ 576: { slidesPerView: columns.tablet }, 768: { slidesPerView: columns.desktop } }}
		spaceBetween={columnGap}
		modules={[Autoplay, Navigation, Pagination, EffectFade, EffectCube, EffectCreative, EffectCoverflow, EffectFlip, EffectCards]}
		loop={isLoop}
		allowTouchMove={isBackend ? false : isTouchMove}
		grabCursor={isBackend ? false : isTouchMove}
		speed={speed * 1000}
		autoplay={isAutoplay && !isBackend}
		effect={effect}
		fadeEffect={{ crossFade: false }}
		cubeEffect={{ shadow: false, slideShadows: false }}
		creativeEffect={{
			prev: {
				shadow: true,
				translate: ['-120%', 0, -500],
			},
			next: {
				shadow: true,
				translate: ['120%', 0, -500],
			}
		}}
		pagination={isPage ? {
			clickable: isPageClickable,
			dynamicBullets: isPageDynamic,
			forceClass: true
		} : false}
		navigation={isPrevNext}
		allowSlidePrev={true}
		allowSlideNext={true}
		autoHeight={false}
		notificationClass={null}
	>
		{slides?.map((slide, index) => {
			const { position, title, description, btnText, btnLink } = slide;

			return <SwiperSlide key={index} className={`slide-${index}`}>
				<div className={`slideContent ${position?.split(' ')?.join('-') || 'center-center'}`}>
					{isTitle && title && <h2 className='slideTitle' dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }} />}

					{isDesc && description && <p className='slideDesc' dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />}

					{isBtn && btnText && <a href={isBackend ? '#' : btnLink} className='slideBtn' dangerouslySetInnerHTML={{ __html: sanitizeHTML(btnText) }} />}
				</div>
			</SwiperSlide>
		})}
	</Swiper>
}
export default Slider;