import classNames from 'classnames';

import { ListItem } from './ListItem';

import leaf from '@/assets/images/delivery/leaf.png';

import styles from './Delivery.module.scss';

interface DeliveryProps {
  withLeaf?: boolean;
}

export const Delivery = ({ withLeaf = false }: DeliveryProps) => {
  return (
    <div className={styles.delivery}>
      {withLeaf && (
        <div className={styles.delivery__leaf}>
          <img src={leaf} alt="Leaf" />
        </div>
      )}
      <div className={classNames('container', styles.delivery__container)}>
        <div className={styles.delivery__content}>
          <div className={classNames('title', styles.delivery__title)}>
            Ми доставляємо раціони правильного
            <br />
            харчування до всіх районів м. Харків.
          </div>
          <ul className={styles.delivery__list}>
            <ListItem>доставка здійснюється щодня</ListItem>
            <ListItem>час доставки з 7.00 до 10.00 ранку </ListItem>
            <ListItem>
              раціон здорового харчування буде доставлено наступного дня після
              замовлення
            </ListItem>
            <ListItem>
              замовлення приймаються за один день до відправки
            </ListItem>
            <ListItem>
              зупинка доставки здійснюється за день до відправки (сьогодні
              скасували - завтра не доставляємо)
            </ListItem>
          </ul>
        </div>
        <div className={styles.delivery__mapWrapper}>
          <iframe
            className={styles.delivery__map}
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.63285207358!2d36.12102312370995!3d49.99447464035121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sen!2sus!4v1735594487901!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
