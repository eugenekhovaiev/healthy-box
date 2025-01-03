import classNames from 'classnames';

import styles from './OurAdvantage.module.scss';

interface OurAdvantageProps {
  bannerSrc: string;
  title: string;
  text: string;
  direction?: 'left' | 'right';
}

export const OurAdvantage = ({
  bannerSrc,
  title,
  text,
  direction = 'left',
}: OurAdvantageProps) => {
  return (
    <div className={styles.ourAdvantage}>
      {direction === 'left' && (
        <div className={styles.ourAdvantage__banner}>
          <img src={bannerSrc} alt="Banner" />
        </div>
      )}
      <div className={styles.ourAdvantage__content}>
        <div className={classNames('title', styles.ourAdvantage__title)}>
          {title}
        </div>
        <div className={styles.ourAdvantage__text}>{text}</div>
      </div>
      {direction === 'right' && (
        <div className={styles.ourAdvantage__banner}>
          <img src={bannerSrc} alt="Banner" />
        </div>
      )}
    </div>
  );
};
