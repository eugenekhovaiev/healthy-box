import classNames from 'classnames';

import { Button } from '../../../../components/shared/Button';
import { IconWrapper } from '../../../../components/shared/IconWrapper';
import { CalculatorBanner } from '../../../../components/shared/CalculatorBanner';

import logo from '@/assets/images/logo.svg';
import mentalHealthIcon from '@/assets/icons/howItWorks/mental-health-line.svg';
import clockIcon from '@/assets/icons/howItWorks/clock-fast.svg';
import cookIcon from '@/assets/icons/howItWorks/cook.svg';
import leaf1 from '@/assets/images/howItWorks/leaf1.png';
import leaf2 from '@/assets/images/howItWorks/leaf2.png';

import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.howItWorks__leaf1}>
        <img src={leaf1} alt="Leaf" />
      </div>
      <div className={styles.howItWorks__leaf2}>
        <img src={leaf2} alt="Leaf" />
      </div>
      <div className={classNames('container', styles.howItWorks__container)}>
        <div className={styles.howItWorks__advantages}>
          <div className={styles.howItWorks__logoWrapper}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.bigCard}>
            <div className={styles.bigCard__header}>
              <div className={styles.bigCard__subtitle}>Про нас</div>
              <Button withArrow theme="light" />
            </div>
            <div className={styles.bigCard__content}>
              <div className={classNames('title', styles.bigCard__title)}>
                Познайомимось?
              </div>
              <div className={styles.bigCard__text}>
                Healthy Box – це Ваш простір для усвідомленого здорового
                харчування. Вибір страв має велике значення для підтримки
                здоров&apos;я і загального самопочуття, тож найкращий час обрати
                ліпше життя для себе – це зараз.
              </div>
            </div>
          </div>
          <div className={styles.smallCard}>
            <IconWrapper src={mentalHealthIcon} alt="Mental Health" />
            <div className={styles.smallCard__content}>
              <div className={styles.smallCard__title}>Здоров’я та енергія</div>
              <div className={styles.smallCard__text}>
                Здорове харчування знижує ризик хронічних захворювань і покращує
                загальне самопочуття. Забезпечують енергію та підвищують фізичну
                і розумову працездатність.
              </div>
            </div>
          </div>
          <div className={styles.smallCard}>
            <IconWrapper src={clockIcon} alt="Clock" />
            <div className={styles.smallCard__content}>
              <div className={styles.smallCard__title}>
                Економія часу та грошей
              </div>
              <div className={styles.smallCard__text}>
                З Healthy Box ви економите час на покупках і приготуванні їжі.
                Вартість раціону доступна та залежить лише від кількості
                калорій.
              </div>
            </div>
          </div>
          <div className={styles.smallCard}>
            <IconWrapper src={cookIcon} alt="Cook" />
            <div className={styles.smallCard__content}>
              <div className={styles.smallCard__title}>
                Зручність та різноманіття
              </div>
              <div className={styles.smallCard__text}>
                Щодня доставляються збалансовані страви з корисними
                інгредієнтами, адаптовані до ваших цілей. Вам не потрібно
                готувати — усе зроблено за вас.
              </div>
            </div>
          </div>
        </div>
        <CalculatorBanner />
      </div>
    </section>
  );
};
