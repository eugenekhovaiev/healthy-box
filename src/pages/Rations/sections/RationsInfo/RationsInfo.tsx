import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import classNames from 'classnames';

import leaf1 from '@/assets/images/howItWorks/leaf1.png';
import leaf2 from '@/assets/images/howItWorks/leaf2.png';
import fitnessBreakfast from '@/assets/images/food/fitness-breakfast.png';
import fitnessLunch from '@/assets/images/food/fitness-lunch.png';
import fitnessDinner from '@/assets/images/food/fitness-dinner.png';
import balanceBreakfast from '@/assets/images/food/balance-breakfast.png';
import balanceLunch from '@/assets/images/food/balance-lunch.png';
import balanceSnack from '@/assets/images/food/balance-snack.png';
import balanceDinner from '@/assets/images/food/balance-dinner.png';
import maxiBreakfast from '@/assets/images/food/maxi-breakfast.png';
import maxiSnack from '@/assets/images/food/maxi-snack.png';
import maxiLunch from '@/assets/images/food/maxi-lunch.png';
import maxiDinner from '@/assets/images/food/maxi-dinner.png';

import { Dish } from './Dish';
import { PriceItem } from './PriceItem';
import { Button } from '../../../../components/shared/Button';
import { FAQQuestion } from '../../../../components/shared/FAQQuestion';

import styles from './RationsInfo.module.scss';

export const RationsInfo = () => {
  const [activeRation, setActiveRation] = useState('');

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ration = params.get('ration');
    if (ration) {
      setActiveRation(ration);
    }
  }, [location]);

  const updateRationInURL = (ration: string) => {
    const params = new URLSearchParams(location.search);
    params.set('ration', ration);
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${params.toString()}`,
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ration = params.get('ration');
    if (ration) {
      setActiveRation(ration);
    }
  }, [location]);

  return (
    <div className={styles.rationsInfo}>
      <div className={styles.rationsInfo__leaf1}>
        <img src={leaf1} alt="Leaf" />
      </div>
      <div className={styles.rationsInfo__leaf2}>
        <img src={leaf2} alt="Leaf" />
      </div>
      <div className={classNames('container', styles.rationsInfo__container)}>
        <div className={styles.rationsInfo__switcher}>
          <button
            className={classNames(styles.switcherItem, {
              [styles.switcherItem_active]: activeRation === 'fitness',
            })}
            onClick={() => {
              setActiveRation('fitness');
              updateRationInURL('fitness');
            }}
          >
            <div className={styles.switcherItem__title}>Fitness</div>
            <div className={styles.switcherItem__energy}>1200-1400 ккал</div>
          </button>
          <button
            className={classNames(styles.switcherItem, {
              [styles.switcherItem_active]: activeRation === 'balance',
            })}
            onClick={() => {
              setActiveRation('balance');
              updateRationInURL('balance');
            }}
          >
            <div className={styles.switcherItem__title}>Balance</div>
            <div className={styles.switcherItem__energy}>1600-1800 ккал</div>
          </button>
          <button
            className={classNames(styles.switcherItem, {
              [styles.switcherItem_active]: activeRation === 'maxi',
            })}
            onClick={() => {
              setActiveRation('maxi');
              updateRationInURL('maxi');
            }}
          >
            <div className={styles.switcherItem__title}>Maxi</div>
            <div className={styles.switcherItem__energy}>2200-2400 ккал</div>
          </button>
        </div>
        <div className={styles.rationsInfo__ration}>
          <div className={styles.rationsInfo__dishesWrapper}>
            <div className={styles.rationsInfo__title}>Раціон</div>
            {activeRation === 'fitness' && (
              <div className={styles.rationsInfo__dishes}>
                <Dish
                  image={fitnessBreakfast}
                  time="Сніданок"
                  title="Тар-тар з креветками та авокадо"
                  energy="340 ккал"
                  bju="(БЖВ: 27 / 22 / 13)"
                />
                <Dish
                  image={fitnessLunch}
                  time="Обід"
                  title="Healthy паста з авокадо"
                  energy="392 ккал"
                  bju="(БЖВ: 6 / 28 / 29)"
                />
                <Dish
                  image={fitnessDinner}
                  time="Вечеря"
                  title="Ніжна рибка з овочами та горіховим соусом"
                  energy="388 ккал"
                  bju="(БЖВ: 30 / 22 / 22)"
                />
              </div>
            )}
            {activeRation === 'balance' && (
              <div className={styles.rationsInfo__dishes}>
                <Dish
                  image={balanceBreakfast}
                  time="Сніданок"
                  title="Рол з лососем та овочами"
                  energy="489 ккал"
                  bju="(БЖВ: 29 / 23 / 43)"
                />
                <Dish
                  image={balanceSnack}
                  time="Перекус"
                  title="Банановий шейк"
                  energy="293 ккал"
                  bju="(БЖВ: 7 / 13 / 42)"
                />
                <Dish
                  image={balanceLunch}
                  time="Обід"
                  title="Зелений крем-суп"
                  energy="399 ккал"
                  bju="(БЖВ: 40 / 11 / 38)"
                />
                <Dish
                  image={balanceDinner}
                  time="Вечеря"
                  title="Жульєн з куркою та сметанковим соусом"
                  energy="425 ккал"
                  bju="(БЖВ: 31 / 20 / 7)"
                />
              </div>
            )}
            {activeRation === 'maxi' && (
              <div className={styles.rationsInfo__dishes}>
                <Dish
                  image={maxiBreakfast}
                  time="Сніданок"
                  title="Високобілкові панкейки"
                  energy="520 ккал"
                  bju="(БЖВ: 26 / 14 / 68)"
                />
                <Dish
                  image={maxiSnack}
                  time="Перекус"
                  title="Курячі котлетки зі спаржею"
                  energy="520 ккал"
                  bju="(БЖВ: 48 / 12 / 24)"
                />
                <Dish
                  image={maxiLunch}
                  time="Обід"
                  title="Картопелька «Моцарелла»"
                  energy="680 ккал"
                  bju="(БЖВ: 62 / 21 / 44)"
                />
                <Dish
                  image={maxiDinner}
                  time="Вечеря"
                  title="Салат з індички та груші"
                  energy="598 ккал"
                  bju="(БЖВ: 60 / 19 / 35)"
                />
              </div>
            )}
          </div>
          <div className={styles.rationsInfo__pricesWrapper}>
            <div className={styles.rationsInfo__textWrapper}>
              <div className={styles.rationsInfo__title}>Ціни грн/день</div>
              <div className={styles.rationsInfo__description}>
                Раціон здорового харчування Fitness був створен з метою
                забезпечування швидкого зниження ваги навіть з низькою
                активністю
              </div>
            </div>
            {activeRation === 'fitness' && (
              <div className={styles.rationsInfo__priceList}>
                <PriceItem
                  time="2 тестових дня"
                  oldPrice="1098"
                  newPrice="989 UAH"
                />
                <PriceItem time="1 день" newPrice="549 UAH" />
                <PriceItem time="7 днів" oldPrice="3843" newPrice="3699 UAH" />
                <PriceItem time="14 днів" oldPrice="7686" newPrice="7269 UAH" />
                <PriceItem
                  time="30 днів"
                  oldPrice="16 470"
                  newPrice="15 269 UAH"
                />
              </div>
            )}
            {activeRation === 'balance' && (
              <div className={styles.rationsInfo__priceList}>
                <PriceItem
                  time="2 тестових дня"
                  oldPrice="1178"
                  newPrice="1099 UAH"
                />
                <PriceItem time="1 день" newPrice="589 UAH" />
                <PriceItem time="7 днів" oldPrice="4123" newPrice="3999 UAH" />
                <PriceItem time="14 днів" oldPrice="8246" newPrice="7899 UAH" />
                <PriceItem
                  time="30 днів"
                  oldPrice="17 670"
                  newPrice="16 699 UAH"
                />
              </div>
            )}
            {activeRation === 'maxi' && (
              <div className={styles.rationsInfo__priceList}>
                <PriceItem
                  time="2 тестових дня"
                  oldPrice="1318"
                  newPrice="1199 UAH"
                />
                <PriceItem time="1 день" newPrice="659 UAH" />
                <PriceItem time="7 днів" oldPrice="4613" newPrice="4499 UAH" />
                <PriceItem time="14 днів" oldPrice="9226" newPrice="8839 UAH" />
                <PriceItem
                  time="30 днів"
                  oldPrice="19 770"
                  newPrice="18 799 UAH"
                />
              </div>
            )}
            <div className={styles.rationsInfo__bottom}>
              <Button>Замовити прямо зараз</Button>
              <div className={styles.rationsInfo__clarification}>
                *Перелік страв є непостійним. Компанія залишає за собою право
                вносити зміни
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rationsInfo__faq}>
          <FAQQuestion
            question="Чи потрібно буде постійно їсти одні й ті самі страви?"
            answer="Раціон правильного харчування складено на 4 тижні, і містять в собі різноманітні страви."
          />
          <FAQQuestion
            question="Які продукти використовуються для приготування ваших раціонів?"
            answer="Ми використовуємо тільки свіжі інгредієнти, багаті на необхідні мікроелементи, білки, та корисні жири. Усі страви розроблені для підтримки здоров'я та гарного самопочуття."
          />
          <FAQQuestion
            question="Як правильно організувати режим харчування?"
            answer="На кожному боксі зі стравою зазначено якому прийому їжі кожен відповідає."
          />
          <FAQQuestion
            question="Що робити, якщо я маю алергію на певні продукти?"
            answer="Ми безкоштовно замінюємо 1 інгредієнт у Вашому харчуванні, який Ви не переносите або маєте на нього алергію. Просто повідомте нас про це при замовленні."
          />
        </div>
      </div>
    </div>
  );
};
