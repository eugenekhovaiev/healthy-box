import classNames from 'classnames';

import locationIcon from '@/assets/icons/location.svg';
import phoneLineIcon from '@/assets/icons/phone-line.svg';
import outlineEmailIcon from '@/assets/icons/outline-email.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import logoIcon from '@/assets/icons/logo.svg';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__info}>
        <div className={classNames('container', styles.header__infoContainer)}>
          <div className={styles.header__contacts}>
            <li className={styles.header__infoItem}>
              <img src={locationIcon} alt="location" />
              <div>Харків, Україна</div>
            </li>
            <li className={styles.header__infoItem}>
              <img src={phoneLineIcon} alt="phone" />
              <a href="tel:+380661954934">+380 66 195 49 34</a>
            </li>
            <li className={styles.header__infoItem}>
              <img src={outlineEmailIcon} alt="email" />
              <a href="mailto:info@healthy-box.co">info@healthy-box.co</a>
            </li>
          </div>
          <li className={styles.header__infoItem}>
            <img src={calendarIcon} alt="schedule" />
            <div>Пн-Пт: 9:00-20:00</div>
          </li>
        </div>
      </section>
      <nav className={styles.header__nav}>
        <div
          className={classNames(styles.header__navPart, styles.header__navLeft)}
        >
          <a href="#about-us" className={styles.header__navItem}>
            Про нас
          </a>
          <a href="#rations" className={styles.header__navItem}>
            Раціони
          </a>
          <a href="#calculator" className={styles.header__navItem}>
            Калькулятор
          </a>
        </div>
        <a href="/" className={styles.header__logo}>
          <img src={logoIcon} alt="logo" />
        </a>
        <div
          className={classNames(
            styles.header__navPart,
            styles.header__navRight,
          )}
        >
          <a href="#delivery" className={styles.header__navItem}>
            Доставка
          </a>
          <a href="#contacts" className={styles.header__navItem}>
            Контакти
          </a>
          <a href="#blog" className={styles.header__navItem}>
            Блог
          </a>
          <a href="#faq" className={styles.header__navItem}>
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
};
