// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './assets/css/swiperStyles.css';

import SwiperCore, {
  Pagination,
} from 'swiper';

import imgUrl from './assets/images/ex.jpg';

SwiperCore.use([Pagination]);

export default function CategorySwiper() {
  return (
    <Swiper slidesPerView={8} spaceBetween={0} className="mySwiper">
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imgUrl} alt="" /></SwiperSlide>
    </Swiper>
  );
}
