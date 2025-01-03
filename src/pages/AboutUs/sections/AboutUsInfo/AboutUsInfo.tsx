import classNames from 'classnames';

import leaf1 from '@/assets/images/howItWorks/leaf1.png';
import leaf2 from '@/assets/images/howItWorks/leaf2.png';
import banner1 from '@/assets/images/aboutUsInfo/banner1-1920.png';
import banner2 from '@/assets/images/aboutUsInfo/banner2-1920.png';
import banner3 from '@/assets/images/aboutUsInfo/banner3-1920.png';
import banner4 from '@/assets/images/aboutUsInfo/banner4-1920.png';

import { OurAdvantage } from './OurAdvantage';
import { CalculatorBanner } from '../../../../components/shared/CalculatorBanner';

import styles from './AboutUsInfo.module.scss';
import { FAQQuestion } from '../../../../components/shared/FAQQuestion';

export const AboutUsInfo = () => {
  return (
    <section className={styles.aboutUsInfo}>
      <div className={styles.aboutUsInfo__leaf1}>
        <img src={leaf1} alt="Leaf" />
      </div>
      <div className={styles.aboutUsInfo__leaf2}>
        <img src={leaf2} alt="Leaf" />
      </div>
      <div className={classNames('container', styles.aboutUsInfo__container)}>
        <div className={styles.aboutUsInfo__advantages}>
          <OurAdvantage
            bannerSrc={banner1}
            title="Познайомимось?"
            text="Healthy Box – це Ваш простір для усвідомленого здорового харчування. Вибір страв має велике значення для підтримки здоров'я і загального самопочуття, тож найкращий час обрати ліпше життя для себе – це зараз."
          />
          <OurAdvantage
            bannerSrc={banner2}
            title="Здоров’я та енергія"
            text="Здорове харчування знижує ризик хронічних захворювань і покращує
                загальне самопочуття. Забезпечують енергію та підвищують фізичну
                і розумову працездатність."
            direction="right"
          />
          <OurAdvantage
            bannerSrc={banner3}
            title="Економія часу та грошей"
            text="З Healthy Box ви економите час на покупках і приготуванні їжі.
                Вартість раціону доступна та залежить лише від кількості
                калорій."
          />
          <OurAdvantage
            bannerSrc={banner4}
            title="Зручність та різноманіття"
            text="Щодня доставляються збалансовані страви з корисними
                інгредієнтами, адаптовані до ваших цілей. Вам не потрібно
                готувати — усе зроблено за вас."
            direction="right"
          />
        </div>
        <CalculatorBanner />
        <div className={styles.aboutUsInfo__faq}>
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
    </section>
  );
};
