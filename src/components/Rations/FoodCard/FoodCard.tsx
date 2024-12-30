import classNames from 'classnames';
import { Button } from '../../shared/Button';

import styles from './FoodCard.module.scss';

interface FoodCardProps {
  image: string;
  name: string;
  energy: string;
  price: string;
  isActive: boolean;
}

export const FoodCard = ({
  image,
  name,
  energy,
  price,
  isActive,
}: FoodCardProps) => {
  return (
    <div
      className={classNames(styles.foodCard, {
        [styles.foodCard_active]: isActive,
      })}
    >
      <div className={styles.foodCard__image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.foodCard__content}>
        <div className={styles.foodCard__textWrapper}>
          <div className={styles.foodCard__description}>
            <div className={styles.foodCard__name}>{name}</div>
            <div className={styles.foodCard__energy}>{energy}</div>
          </div>
          <div className={styles.foodCard__price}>{price}</div>
        </div>
        <div className={styles.foodCard__buttons}>
          <Button>Замовити</Button>
          <Button theme="light">Детальніше</Button>
        </div>
      </div>
    </div>
  );
};
