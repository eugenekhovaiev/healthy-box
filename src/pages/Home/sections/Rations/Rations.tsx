import classNames from 'classnames';

import { Button } from '../../../../components/shared/Button';
import { FoodCard } from './FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import fitnessPlate from '@/assets/images/food/fitness-plate.png';
import maxiPlate from '@/assets/images/food/maxi-plate.png';
import balancePlate from '@/assets/images/food/balance-plate.png';

import ArrowIcon from '@/assets/icons/arrow.svg?react';
import leaf from '@/assets/images/rations/leaf.png';

import '@/assets/styles/rationsSwiper.scss';
import styles from './Rations.module.scss';

export const Rations = () => {
  return (
    <div className={styles.rations}>
      <div className={styles.rations__leaf}>
        <img src={leaf} alt="Leaf" />
      </div>
      <div className={classNames('container', styles.rations__container)}>
        <div className={styles.rations__header}>
          <div className={styles.rations__headerTextWrapper}>
            <div className={classNames('title', styles.rations__headerTitle)}>
              Обирайте раціон під свої потреби та смак
            </div>
            <div className={styles.rations__headerSubtitle}>
              До Вашої уваги, наші раціони, які підійдуть під ваші потреби та
              смаки.
            </div>
          </div>
          <Button
            className={styles.rations__headerButton}
            withArrow
            theme="light"
          >
            Дивитись раціони
          </Button>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          allowTouchMove={false}
          loop={true}
          speed={1000}
          navigation={{ nextEl: '.carouselNext', prevEl: '.carouselPrev' }}
          className="rationsCarousel"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <FoodCard
                image={fitnessPlate}
                name="Раціон “Fitness”"
                energy="1200-1400 ккал"
                price="549 UAH"
                isActive={isActive}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <FoodCard
                image={balancePlate}
                name="Раціон “Balance”"
                energy="1600-1800 ккал"
                price="589 UAH"
                isActive={isActive}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <FoodCard
                image={maxiPlate}
                name="Раціон “Maxi”"
                energy="2200-2400 ккал"
                price="699 UAH"
                isActive={isActive}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <FoodCard
                image={fitnessPlate}
                name="Раціон “Fitness”"
                energy="1200-1400 ккал"
                price="549 UAH"
                isActive={isActive}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <FoodCard
                image={balancePlate}
                name="Раціон “Balance”"
                energy="1600-1800 ккал"
                price="589 UAH"
                isActive={isActive}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <FoodCard
                image={maxiPlate}
                name="Раціон “Maxi”"
                energy="2200-2400 ккал"
                price="699 UAH"
                isActive={isActive}
              />
            )}
          </SwiperSlide>
        </Swiper>
        <div className="carouselPrev">
          <ArrowIcon />
        </div>
        <div className="carouselNext">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};
