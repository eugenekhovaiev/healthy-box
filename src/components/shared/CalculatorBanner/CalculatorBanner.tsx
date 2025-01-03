import classNames from 'classnames';

import { Button } from '../Button';

import styles from './CalculatorBanner.module.scss';

export const CalculatorBanner = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__wrapper}>
        <div className={styles.calculator__content}>
          <div className={classNames('title', styles.calculator__title)}>
            Розрахуйте скільки калорій Вам треба
          </div>
          <div className={styles.calculator__text}>
            Розрахуйте скільки калорій вам потрібно завдяки нашому калькулятору,
            або ж телефонуйте нам та отримуйте безкоштовну консультацію стосовно
            вашого раціону.
          </div>
        </div>
        <div className={styles.calculator__buttons}>
          <Button>Безкоштовна консультація</Button>
          <Button theme="light">Відкрити калькулятор</Button>
        </div>
      </div>
    </div>
  );
};
