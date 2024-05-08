import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel.module.css';

import Mother from '../assets/images/mother.png';
import PHM from '../assets/images/phm.png';
import MOH from '../assets/images/moh.png';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
    <div className="carouselContainer">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide" color="#4aa832">
          <div className='border-orange-700 border-2 rounded-lg'>
            <img className='my-10' src={Mother} alt="Mother" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
        <div className='border-orange-700 border-2 rounded-lg'>
            <img className='my-10' src={PHM} alt="Mother" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
        <div className='border-orange-700 border-2 rounded-3xl'>
            <img className='my-10' src={MOH} alt="Mother" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  );
}