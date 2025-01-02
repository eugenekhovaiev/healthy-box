import styles from './Dish.module.scss';

interface DishProps {
  image: string;
  time: string;
  title: string;
  energy: string;
  bju: string;
}

export const Dish = ({ image, time, title, energy, bju }: DishProps) => {
  return (
    <div className={styles.dish}>
      <div className={styles.dish__image}>
        <img src={image} alt="Dish" />
      </div>
      <div className={styles.dish__info}>
        <div className={styles.dish__textWrapper}>
          <div className={styles.dish__time}>{time}</div>
          <div className={styles.dish__title}>{title}</div>
        </div>
        <div className={styles.dish__energyWrapper}>
          <div className={styles.dish__energy}>{energy}</div>
          <div className={styles.dish__bju}>{bju}</div>
        </div>
      </div>
    </div>
  );
};
