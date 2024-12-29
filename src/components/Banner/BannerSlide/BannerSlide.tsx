import classNames from 'classnames';
import { Button } from '../../../components/Button';

import styles from './BannerSlide.module.scss';

interface BannerSlideProps {
  background: string;
  title: string;
  text: string;
}

export const BannerSlide = ({ background, title, text }: BannerSlideProps) => {
  return (
    <div className={styles.slide}>
      <img src={background} alt="Banner" className={styles.slide__background} />
      <div className={styles.slide__content}>
        <div
          className={classNames('title', styles.slide__title)}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className={styles.slide__text}>{text}</div>
        <Button>Замовити прямо зараз</Button>
      </div>
    </div>
  );
};
