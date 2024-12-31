import { useState } from 'react';
import classNames from 'classnames';

import checkIcon from '@/assets/icons/check.svg';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  passive?: boolean;
}

export const Checkbox = ({ passive }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(Boolean(passive));

  return (
    <button
      className={classNames(styles.checkbox, {
        [styles.checkbox_passive]: passive,
        [styles.checkbox_checked]: isChecked,
      })}
      onClick={() => setIsChecked(passive ? true : !isChecked)}
    >
      <img src={checkIcon} alt="Check" />
    </button>
  );
};
