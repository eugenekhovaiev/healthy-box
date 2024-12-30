import classNames from 'classnames';

import { Button } from '../Button';

import consultationTempImage from '@/assets/images/consultationTemp.png';

import styles from './Consultation.module.scss';

export const Consultation = () => {
  return (
    <div className={styles.consultation}>
      <div className={classNames('container', styles.consultation__container)}>
        <div className={styles.consultation__content}>
          <div className={styles.consultation__textWrapper}>
            <div className={classNames('title', styles.consultation__title)}>
              Консультація та доставка
              <br />
              здорового харчування
            </div>
            <div className={styles.consultation__text}>
              Отримайте персональну консультацію та замовте збалансоване здорове
              харчування з доставкою прямо до дверей!
            </div>
          </div>
          <Button>Отримати консультацію</Button>
        </div>
        <div className={styles.consultation__imageWrapper}>
          <img src={consultationTempImage} alt="Consultation" />
        </div>
      </div>
    </div>
  );
};
