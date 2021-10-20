// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import "./bannerStyles.css";

import SwiperCore, {
  Navigation
  } from 'swiper';

import imgUrl from './images/banner1.png'


  SwiperCore.use([Navigation]);

export default function BannerSwiper() {
    return (
      <Swiper navigation={true} className="mySwiper">
         <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
         <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
         <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
         <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
         <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
         <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
    </Swiper>
    );
  }
  