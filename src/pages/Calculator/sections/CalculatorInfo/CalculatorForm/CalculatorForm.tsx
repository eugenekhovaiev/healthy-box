import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { CheckboxInput } from '../../../../../components/shared/CheckboxInput';
import { TextInput } from '../../../../../components/shared/TextInput';
import { Button } from '../../../../../components/shared/Button';
import Select from 'react-select';

import balancePlate from '@/assets/images/food/balance-plate.png';
import fitnessPlate from '@/assets/images/food/fitness-plate.png';
import maxiPlate from '@/assets/images/food/maxi-plate.png';

import styles from './CalculatorForm.module.scss';

interface SelectOption {
  value: string;
  label: string;
}

const selectOptions = [
  { value: '1.725', label: 'Підвищена активність' },
  { value: '1.55', label: 'Середня активність' },
  { value: '1.375', label: 'Помірна активність' },
  { value: '1.2', label: 'Малорухливий (сидячий) спосіб життя' },
];

export const CalculatorForm = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState<SelectOption | null>(null);
  const [errors, setErrors] = useState({
    gender: '',
    goal: '',
    height: '',
    weight: '',
    age: '',
    activity: '',
  });
  const [energyResult, setEnergyResult] = useState(0);
  const [rationResult, setRationResult] = useState('');

  const validateTextField = (min: number, max: number, value?: string) => {
    const numberPattern = /^\d+$/;
    if (!value) {
      return "Поле обов'язкове";
    } else if (!numberPattern.test(value)) {
      return 'Поле має містити тільки числове значення';
    } else if (Number(value) < min || Number(value) > max) {
      return 'Недопустиме значення';
    }
    return '';
  };

  const validateSelectField = (value: SelectOption | null) => {
    if (!value?.value) {
      return "Поле обов'язкове";
    }

    const isValidOption = selectOptions.some(
      (option) => option.value === value.value,
    );
    if (!isValidOption) {
      return 'Недопустиме значення';
    }

    return '';
  };

  const validate = () => {
    const newErrors = {
      gender: gender ? '' : "Стать потрібно вказати обов'язково",
      goal: goal ? '' : "Мету потрібно вказати обов'язково",
      height: validateTextField(80, 230, height),
      weight: validateTextField(20, 300, weight),
      age: validateTextField(1, 100, age),
      activity: validateSelectField(activity),
    };

    setErrors(newErrors);
    return (
      !newErrors.gender &&
      !newErrors.goal &&
      !newErrors.height &&
      !newErrors.weight &&
      !newErrors.age &&
      !newErrors.activity
    );
  };

  const handleSubmit = () => {
    if (validate()) {
      if (gender === 'female') {
        setEnergyResult(
          Math.round(
            (10 * Number(weight) +
              6.25 * Number(height) -
              5 * Number(age) -
              161) *
              Number(activity?.value),
          ),
        );
      } else {
        setEnergyResult(
          Math.round(
            (10 * Number(weight) +
              6.25 * Number(height) -
              5 * Number(age) +
              5) *
              Number(activity?.value),
          ),
        );
      }

      if (goal === 'lose-weight') {
        setRationResult('fitness');
      } else if (goal === 'weight-support') {
        setRationResult('balance');
      } else {
        setRationResult('maxi');
      }
    }
  };

  return (
    <div className={styles.calculatorFormWrapper}>
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
              <CheckboxInput
                className={styles.question__checkboxInput}
                checked={gender === 'female'}
                onClick={() => setGender(gender === 'female' ? '' : 'female')}
              >
                Жіноча
              </CheckboxInput>
              <CheckboxInput
                className={styles.question__checkboxInput}
                checked={gender === 'male'}
                onClick={() => setGender(gender === 'male' ? '' : 'male')}
              >
                Чоловіча
              </CheckboxInput>
            </div>
            {errors.gender && (
              <div className={styles.question__error}>{errors.gender}</div>
            )}
          </div>
          <div className={styles.question}>
            <div className={classNames('title', styles.question__title)}>
              Мета:
            </div>
            <div className={styles.question__inputs}>
              <CheckboxInput
                className={styles.question__checkboxInput}
                checked={goal === 'lose-weight'}
                onClick={() =>
                  setGoal(goal === 'lose-weight' ? '' : 'lose-weight')
                }
              >
                Схуднути
              </CheckboxInput>
              <CheckboxInput
                className={styles.question__checkboxInput}
                checked={goal === 'weight-support'}
                onClick={() =>
                  setGoal(goal === 'weight-support' ? '' : 'weight-support')
                }
              >
                Підтримка ваги
              </CheckboxInput>
              <CheckboxInput
                className={styles.question__checkboxInput}
                checked={goal === 'gain-weight'}
                onClick={() =>
                  setGoal(goal === 'gain-weight' ? '' : 'gain-weight')
                }
              >
                Набір маси
              </CheckboxInput>
            </div>
            {errors.goal && (
              <div className={styles.question__error}>{errors.goal}</div>
            )}
          </div>
          <div className={styles.question}>
            <div className={classNames('title', styles.question__title)}>
              Потрібні параметри:
            </div>
            <div className={styles.question__inputs}>
              <TextInput
                type="text"
                placeholder="Зріст (см)...."
                value={height}
                error={errors.height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <TextInput
                type="text"
                placeholder="Вага (кг)...."
                value={weight}
                error={errors.weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <TextInput
                type="text"
                placeholder="Вік...."
                value={age}
                error={errors.age}
                onChange={(e) => setAge(e.target.value)}
              />
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
                value={activity}
                onChange={(value) => setActivity(value as SelectOption)}
                placeholder="Виберіть свій рівень активності"
                options={selectOptions}
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
              />
            </div>
            {errors.activity && (
              <div className={styles.question__error}>{errors.activity}</div>
            )}
          </div>
        </div>
        <div className={styles.calculatorForm__buttons}>
          <Button
            className={styles.calculatorForm__button}
            onClick={handleSubmit}
          >
            Розрахувати
          </Button>
          <Button className={styles.calculatorForm__button} theme="light">
            Замовити безкоштовну консультацію
          </Button>
        </div>
      </div>
      {Boolean(energyResult) && (
        <div className={styles.calculatorResult}>
          <div className={styles.energyCard}>
            <div
              className={classNames(
                styles.calculatorResult__title,
                styles.energyCard__title,
              )}
            >
              Результат:
            </div>
            <div className={styles.energyCard__content}>
              <div className={styles.energyCard__description}>
                Потрібна кількість калорій
              </div>
              <div className={styles.energyCard__energy}>
                <div className={styles.energyCard__number}>{energyResult}</div>
                <div className={styles.energyCard__units}>ккал</div>
              </div>
            </div>
          </div>
          <div className={styles.rationCard}>
            <div
              className={classNames(
                styles.calculatorResult__title,
                styles.rationCard__title,
              )}
            >
              Раціон, який може підійти:
            </div>
            {rationResult === 'balance' && (
              <>
                <div className={styles.rationCard__image}>
                  <img src={balancePlate} alt="Balance plate" />
                </div>
                <div className={styles.rationCard__content}>
                  <div className={styles.rationCard__rationInfo}>
                    <div className={styles.rationCard__energy}>
                      1600-1800 ккал
                    </div>
                    <div
                      className={classNames(
                        styles.calculatorResult__title,
                        styles.rationCard__name,
                      )}
                    >
                      Раціон “Balance”
                    </div>
                  </div>
                  <div className={styles.rationCard__price}>589 UAH</div>
                </div>
              </>
            )}
            {rationResult === 'fitness' && (
              <>
                <div className={styles.rationCard__image}>
                  <img src={fitnessPlate} alt="Fitness plate" />
                </div>
                <div className={styles.rationCard__content}>
                  <div className={styles.rationCard__rationInfo}>
                    <div className={styles.rationCard__energy}>
                      1200-1400 ккал
                    </div>
                    <div
                      className={classNames(
                        styles.calculatorResult__title,
                        styles.rationCard__name,
                      )}
                    >
                      Раціон “Fitness”
                    </div>
                  </div>
                  <div className={styles.rationCard__price}>549 UAH</div>
                </div>
              </>
            )}
            {rationResult === 'maxi' && (
              <>
                <div className={styles.rationCard__image}>
                  <img src={maxiPlate} alt="Maxi plate" />
                </div>
                <div className={styles.rationCard__content}>
                  <div className={styles.rationCard__rationInfo}>
                    <div className={styles.rationCard__energy}>
                      2200-2400 ккал
                    </div>
                    <div
                      className={classNames(
                        styles.calculatorResult__title,
                        styles.rationCard__name,
                      )}
                    >
                      Раціон “Maxi”
                    </div>
                  </div>
                  <div className={styles.rationCard__price}>659 UAH</div>
                </div>
              </>
            )}
          </div>
          <Button
            className={styles.calculatorResult__button}
            onClick={() => {
              navigate(`/rations?ration=${rationResult}`);
            }}
          >
            Дивитись раціон
          </Button>
        </div>
      )}
    </div>
  );
};
