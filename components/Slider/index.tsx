import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import s from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { slider } from '@/lib/dataset';

const Slider = () => {
  return (
    <Swiper
      className={s.container}
      modules={[Pagination]}
      slidesPerView={1}
      pagination
      autoplay
      loop>
      {slider.map((item) => (
        <SwiperSlide className={s.swiper__slide} key={item}>
          <Image src={item} alt="image-banner" width={1200} height={360} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
