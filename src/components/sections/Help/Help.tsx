import classNames from 'classnames';

import { Button } from '../../shared/Button';
import { TextInput } from '../../shared/TextInput';
import { CheckboxInput } from '../../shared/CheckboxInput';

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
          <div className={styles.form__fields}>
            <div className={styles.form__textInputs}>
              <TextInput type="text" placeholder="Ім'я...." />
              <TextInput type="tel" placeholder="Номер телефону...." />
              <TextInput type="email" placeholder="Email...." />
            </div>
            <div className={styles.form__checkboxInputs}>
              <CheckboxInput>
                <div>
                  Я ознайомлений та згоден з “Режимом прийому і зміни замовлень”
                </div>
              </CheckboxInput>
              <CheckboxInput>
                Я ознайомлений та згоден з{' '}
                <a href="/#">“ Договором публічної оферти ”</a> і{' '}
                <a href="/#">“ Політикою конфіденційності ”</a>
              </CheckboxInput>
            </div>
            <Button className={styles.form__button}>Відправити</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
