import React, { useRef } from 'react'
import styles from './Slider.module.scss'
import Slide from './Slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderList } from '../../../public/db/slidersList';

import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Slider = () => {
    return <div className={styles.slider}>
        <div className='container-lg'>
            <div className={styles.slider__inner}>

                <Swiper
                    spaceBetween={34}
                    slidesPerView={1}
                    autoplay={{
                        stopOnLastSlide: false,
                        waitForTransition: false,
                        delay: 3000
                    }}
                    modules={[Autoplay, Navigation]}
                    loop={true}
                    navigation={{
                        nextEl: '.next',
                        prevEl: '.prev',
                    }}
                    className='my-swiper'
                    breakpoints={{
                        768: {
                            slidesPerView: 2,

                        },
                        1560: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {sliderList.map((slide, index) => (
                        <SwiperSlide key={index}><Slide title={slide.title} total={slide.total} /></SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.navigate}>
                    <button className={'prev'} type='button'></button>
                    <button className={'next'} type='button'></button>
                </div>
            </div>
        </div>

    </div>
}

export default Slider