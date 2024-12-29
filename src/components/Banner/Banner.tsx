import banner1 from '../../assets/images/banners/home/banner1.png';
import banner2 from '../../assets/images/banners/home/banner2.png';
import banner3 from '../../assets/images/banners/home/banner3.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { BannerSlide } from './BannerSlide';

import '@/assets/styles/bannerSwiper.scss';

import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      allowTouchMove={false}
      loop={true}
      autoplay={{ delay: 10000 }}
      speed={1000}
      pagination={{ clickable: true }}
      className={styles.banner}
    >
      <SwiperSlide>
        <BannerSlide
          background={banner1}
          title="Доставка правильного харчування"
          text="Ми забезпечуємо смачне і збалансоване харчування для вашого
            здоров’я. Раціони включають корисні жири, клітковину, вітаміни,
            білки та підбираються відповідно до вашої мети."
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlide
          background={banner2}
          title="Швидко та зручно"
          text="Ми гарантуємо швидку та зручну доставку ваших раціонів щодня. Ми піклуємось про ваше здоров’я та час."
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlide
          background={banner3}
          title="Дієве та раціональне<br />схуднення з нашим раціоном fitness"
          text="Замовляйте раціон Fitness вже сьогодні та зробіть крок до досягнення своїх бажань і цілей. Збалансоване харчування допоможе вам покращити самопочуття та досягти результатів, про які ви мріяли!"
        />
      </SwiperSlide>
    </Swiper>
  );
};
