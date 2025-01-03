import classNames from 'classnames';

import { IconWrapper } from '../../../../../components/shared/IconWrapper';

import styles from './ReasonCard.module.scss';

interface ReasonCardProps {
  className?: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  text: string;
}

export const ReasonCard = ({
  className,
  iconSrc,
  iconAlt,
  title,
  text,
}: ReasonCardProps) => {
  return (
    <div className={classNames(styles.reasonCard, className)}>
      <IconWrapper src={iconSrc} alt={iconAlt} />
      <div className={styles.reasonCard__textWrapper}>
        <div className={styles.reasonCard__title}>{title}</div>
        <div className={styles.reasonCard__text}>{text}</div>
      </div>
    </div>
  );
};
