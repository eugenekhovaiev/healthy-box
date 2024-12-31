import classNames from 'classnames';

import { Button } from '../shared/Button';
import { Checkbox } from '../shared/Checkbox';

import styles from './Help.module.scss';

export const Help = () => {
  return (
    <div className={styles.help}>
      <div className={classNames('container', styles.help__container)}>
        <div className={styles.form}>
          <div className={styles.form__textWrapper}>
            <div className={classNames('title', styles.form__title)}>
              Залишились ще питання?
            </div>
            <div className={styles.form__text}>
              Заповніть форму і через деякий час наш менеджер прийде на
              допомогу.
            </div>
          </div>
          <div className={styles.form__formWrapper}>
            <form className={styles.form__fields}>
              <input
                className={styles.form__input}
                type="text"
                placeholder="Ім'я...."
              />
              <input
                className={styles.form__input}
                type="tel"
                placeholder="Номер телефону...."
              />
              <input
                className={styles.form__input}
                type="email"
                placeholder="Email...."
              />
            </form>
            <div className={styles.form__agreements}>
              <div className={styles.form__agreement}>
                <Checkbox />
                <label className={styles.form__label} htmlFor="agreements">
                  Я ознайомлений та згоден з “Режимом прийому і зміни замовлень”
                </label>
              </div>
              <div className={styles.form__agreement}>
                <Checkbox />
                <label className={styles.form__label} htmlFor="agreements">
                  Я ознайомлений та згоден з{' '}
                  <a href="/#" className={styles.form__label_yellow}>
                    “ Договором публічної оферти ”
                  </a>{' '}
                  і{' '}
                  <a href="/#" className={styles.form__label_yellow}>
                    “ Політикою конфіденційності ”
                  </a>
                </label>
              </div>
            </div>
            <Button className={styles.form__button}>Відправити</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
