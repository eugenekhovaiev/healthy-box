import classNames from 'classnames';

import { IconWrapper } from '../shared/IconWrapper';

import logo from '../../assets/images/logo-yellow.svg';
import instagramIcon from '../../assets/icons/footer/instagram.svg';
import telegramIcon from '../../assets/icons/footer/telegram.svg';
import viberIcon from '../../assets/icons/footer/viber.svg';
import locationIcon from '../../assets/icons/footer/location.svg';
import phoneLineIcon from '../../assets/icons/footer/phone-line.svg';
import outlineEmailIcon from '../../assets/icons/footer/email.svg';
import calendarIcon from '../../assets/icons/footer/calendar.svg';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div
          className={classNames('container', styles.footer__contentContainer)}
        >
          <div className={styles.socialMedia}>
            <div className={styles.socialMedia__logo}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.socialMedia__content}>
              <div className={styles.socialMedia__slogan}>
                Healthy Box - це Ваш вибір для
                <br />
                кращого життя
              </div>
              <div className={styles.socialMedia__links}>
                <a href="/#" className={styles.socialMedia__link}>
                  <IconWrapper
                    className={styles.socialMedia__icon}
                    src={instagramIcon}
                    alt={'Instagram'}
                  />
                </a>
                <a href="/#" className={styles.socialMedia__link}>
                  <IconWrapper
                    className={styles.socialMedia__icon}
                    src={telegramIcon}
                    alt={'Telegram'}
                  />
                </a>
                <a href="/#" className={styles.socialMedia__link}>
                  <IconWrapper
                    className={styles.socialMedia__icon}
                    src={viberIcon}
                    alt={'Viber'}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={classNames('title', styles.column__title)}>
              Інформація
            </div>
            <div className={styles.column__links}>
              <a href="/#" className={styles.column__link}>
                Про нас
              </a>
              <a href="/#" className={styles.column__link}>
                Доставка та Оплата
              </a>
              <a href="/#" className={styles.column__link}>
                Контакти
              </a>
              <a href="/#" className={styles.column__link}>
                FAQ
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={classNames('title', styles.column__title)}>
              Пропозиція
            </div>
            <div className={styles.column__links}>
              <a href="/#" className={styles.column__link}>
                Раціони
              </a>
              <a href="/#" className={styles.column__link}>
                Калькулятор
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={classNames('title', styles.column__title)}>
              Контакти
            </div>
            <div className={styles.column__links}>
              <li className={styles.column__contact}>
                <IconWrapper
                  className={styles.column__icon}
                  src={locationIcon}
                  alt="Location"
                />
                <div>Харків, Україна</div>
              </li>
              <li className={styles.column__contact}>
                <IconWrapper
                  className={styles.column__icon}
                  src={phoneLineIcon}
                  alt="Phone"
                />
                <a href="tel:+380661954934">+380 66 195 49 34</a>
              </li>
              <li className={styles.column__contact}>
                <IconWrapper
                  className={styles.column__icon}
                  src={outlineEmailIcon}
                  alt="Email"
                />
                <a href="mailto:info@healthy-box.co">info@healthy-box.co</a>
              </li>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div
            className={classNames('container', styles.footer__bottomContainer)}
          >
            <div className={styles.footer__tradeMark}>
              © 2024 - HealthyBox - Доставка здорового харчування в м. Харків.
              Всі права захищені
            </div>
            <li className={styles.footer__schedule}>
              <img src={calendarIcon} alt="Schedule" />
              <div>Пн-Пт: 9:00 - 20:00</div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
