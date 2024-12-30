import classNames from 'classnames';

import aimingLineIcon from '@/assets/icons/whyWe/aiming-line.svg';
import appleIcon from '@/assets/icons/whyWe/apple.svg';
import boxIcon from '@/assets/icons/whyWe/box.svg';
import bookIcon from '@/assets/icons/whyWe/book.svg';
import supportIcon from '@/assets/icons/whyWe/support.svg';
import pigMoneyIcon from '@/assets/icons/whyWe/pig-money.svg';

import styles from './WhyWe.module.scss';
import { ReasonCard } from './ReasonCard';

export const WhyWe = () => {
  return (
    <div className={styles.whyWe}>
      <div className={classNames('container', styles.whyWe__container)}>
        <div className={styles.whyWe__textWrapper}>
          <div className={classNames('title', styles.whyWe__title)}>
            Чому обирають нас?
          </div>
          <div className={styles.whyWe__text}>
            Ми пропонуємо комплексний підхід до корисного харчування, який
            включає лише свіжі інгредієнти, професійне приготування та зручність
            у доставці. Наш сервіс створений для вашого комфорту та підтримки
            здоров’я.
          </div>
        </div>
        <div className={styles.whyWe__cards}>
          <ReasonCard
            iconSrc={aimingLineIcon}
            iconAlt="Aiming Line"
            title="Індивідуальний підхід"
            text="Ми враховуємо ваші потреби, цілі та обмеження у харчуванні. У
                  нас є можливість вибору раціону за калорійністю, а також
                  раціону для людей із харчовими алергіями."
          />
          <ReasonCard
            iconSrc={appleIcon}
            iconAlt="Apple"
            title="Свіжість і якість продуктів"
            text="Ми використовуємо тільки свіжі інгредієнти, багаті на необхідні мікроелементи, білки, та корисні жири. Усі страви розроблені для підтримки здоров'я та гарного самопочуття."
          />
          <ReasonCard
            iconSrc={boxIcon}
            iconAlt="Box"
            title="Зручність доставки"
            text="Ми доставляємо страви до вашого порогу в зручний для вас час, звільняючи вас від потреби ходити в магазин, готувати та мити посуд."
          />
          <ReasonCard
            iconSrc={bookIcon}
            iconAlt="Book"
            title="Різноманітність меню"
            text="Програми харчування адаптовані до ваших потреб, будь то схуднення, підтримка ваги чи набір м'язової маси. Ви також можете обрати калорійність і скласти меню відповідно до своїх цілей."
          />
          <ReasonCard
            iconSrc={supportIcon}
            iconAlt="Support"
            title="Професійні консультації"
            text="Ми завжди готові допомогти вам обрати раціон для досягнення ваших цілей. Якщо ви сумніваєтеся, який раціон вам підходить, ми розрахуємо це за вас і відповімо на всі запитання."
          />
          <ReasonCard
            iconSrc={pigMoneyIcon}
            iconAlt="Pig Money"
            title="Тільки вигідні ціни"
            text="Ми готуємо смачні, збалансовані страви за ціною, вигіднішою за самостійне готування. Більше не потрібно витрачати час на закупівлю продуктів."
          />
        </div>
      </div>
    </div>
  );
};
