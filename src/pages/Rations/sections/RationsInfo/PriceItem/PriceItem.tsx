import styles from './PriceItem.module.scss';

interface PriceItemProps {
  time: string;
  oldPrice?: string;
  newPrice: string;
}

export const PriceItem: React.FC<PriceItemProps> = ({
  time,
  oldPrice,
  newPrice,
}: PriceItemProps) => {
  return (
    <div className={styles.priceItem}>
      <div className={styles.priceItem__time}>{time}</div>
      <div className={styles.priceItem__prices}>
        {oldPrice && (
          <div className={styles.priceItem__oldPrice}>{oldPrice}</div>
        )}
        <div className={styles.priceItem__newPrice}>{newPrice}</div>
      </div>
    </div>
  );
};
