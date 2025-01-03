import classNames from 'classnames';

import { CheckboxInput } from '../../../../../components/shared/CheckboxInput';
import { TextInput } from '../../../../../components/shared/TextInput';
import { Button } from '../../../../../components/shared/Button';
import Select from 'react-select';

import styles from './CalculatorForm.module.scss';

export const CalculatorForm = () => {
  const selectOptions = [
    { value: '1.725', label: 'Підвищена активність' },
    { value: '1.55', label: 'Середня активність' },
    { value: '1.375', label: 'Помірна активність' },
    { value: '1.2', label: 'Малорухливий (сидячий) спосіб життя' },
  ];

  return (
    <div className={styles.calculatorForm}>
      <div className={styles.calculatorForm__textWrapper}>
        <div className={classNames('title', styles.calculatorForm__title)}>
          Калькулятор калорій для підбору раціону
        </div>
        <div className={styles.calculatorForm__text}>
          Розрахуйте скільки калорій вам потрібно завдяки нашому калькулятору,
          або ж телефонуйте нам та отримуйте безкоштовну консультацію стосовно
          вашого раціону.
        </div>
      </div>
      <div className={styles.calculatorForm__fields}>
        <div className={styles.question}>
          <div className={classNames('title', styles.question__title)}>
            Стать:
          </div>
          <div className={styles.question__inputs}>
            <CheckboxInput className={styles.question__checkboxInput}>
              Жіноча
            </CheckboxInput>
            <CheckboxInput className={styles.question__checkboxInput}>
              Чоловіча
            </CheckboxInput>
          </div>
        </div>
        <div className={styles.question}>
          <div className={classNames('title', styles.question__title)}>
            Мета:
          </div>
          <div className={styles.question__inputs}>
            <CheckboxInput className={styles.question__checkboxInput}>
              Схуднути
            </CheckboxInput>
            <CheckboxInput className={styles.question__checkboxInput}>
              Підтримка ваги
            </CheckboxInput>
            <CheckboxInput className={styles.question__checkboxInput}>
              Набір маси
            </CheckboxInput>
          </div>
        </div>
        <div className={styles.question}>
          <div className={classNames('title', styles.question__title)}>
            Потрібні параметри:
          </div>
          <div className={styles.question__inputs}>
            <TextInput type="text" placeholder="Зріст...." />
            <TextInput type="text" placeholder="Вага...." />
            <TextInput type="text" placeholder="Вік...." />
          </div>
        </div>
        <div className={styles.question}>
          <div className={classNames('title', styles.question__title)}>
            Рівень активності:
          </div>
          <div className={styles.question__inputs}>
            <Select
              className={styles.question__selectInput}
              unstyled
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: '20px',
                  borderRadius: '10px',
                  border: '1px solid #f4f4f4',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  fontSize: '18px',
                  color: '#ffffff',
                  cursor: 'pointer',
                }),
                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: '#d0d0d0',
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: '#104223',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  fontSize: '18px',
                }),
                option: (baseStyles, { isFocused }) => ({
                  ...baseStyles,
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: isFocused ? '#347f3c' : '#104223',
                }),
              }}
              placeholder="Виберіть свій рівень активності"
              options={selectOptions}
            />
          </div>
        </div>
      </div>
      <div className={styles.calculatorForm__buttons}>
        <Button className={styles.calculatorForm__button}>Розрахувати</Button>
        <Button className={styles.calculatorForm__button} theme="light">
          Замовити безкоштовну консультацію
        </Button>
      </div>
    </div>
  );
};
