// // // import * as React from 'react';

// // // import { EffectCoverflow, Pagination } from 'swiper/modules';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import Mother from "../assets/images/mother.png";
// // // import PHM from "../assets/images/phm.png";
// // // import MOH from "../assets/images/moh.png";
// // // import Doctor from "../assets/images/doctor.png";

// // // const photos = [
// // //   Mother,
// // //   PHM,
// // //   MOH,
// // //   Doctor
// // // ];

// // // export default function Carousel() {
// // //   return (
// // //     <section className="pt-[7rem] pb-[2rem] bg-[#F5F5F5]">
// // //       <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        
// // //         <Swiper
// // //           modules={[EffectCoverflow, Pagination]}
// // //           effect={'coverflow'}
// // //           loop={true}
// // //           spaceBetween={30}
// // //           slidesPerView={3}
// // //           pagination={{
// // //             clickable: true,
// // //           }}
// // //           centeredSlides={true}
// // //           grabCursor={true}
// // //           coverflowEffect={{
// // //             rotate: 0,
// // //             slideShadows: false,
// // //           }}
// // //           className="coverflow"
// // //         >
// // //           {photos.map((p, index) => {
// // //             return (
// // //               <SwiperSlide key={index}>
// // //                 <img src={p} alt="" />
// // //               </SwiperSlide>
// // //             );
// // //           })}
// // //         </Swiper>
// // //       </div>
// // //     </section>
// // //   );
// // // }


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'; // core Swiper
import SwiperCore from 'swiper/core';
// import { EffectCoverflow } from 'swiper/modules/effect-coverflow'; // Import EffectCoverflow

import { EffectCoverflow, Pagination } from 'swiper/modules';


import Mother from '../assets/images/mother.png';
import PHM from '../assets/images/phm.png';
import MOH from '../assets/images/moh.png';
import Doctor from '../assets/images/doctor.png';

const photos = [Mother, PHM, MOH, Doctor];

SwiperCore.use([EffectCoverflow, Pagination]);

const Carousel = () => {
  return (
    <section className="pt-7rem pb-2rem bg-[#F5F5F5]">
      <div className="lg:mx-auto max-w-5xl mx-1.5rem">
        <Swiper
          effect="coverflow"
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="swiper-container"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img src={photo} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// export default () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };