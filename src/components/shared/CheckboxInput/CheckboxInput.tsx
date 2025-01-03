import classNames from 'classnames';

import { ReactNode } from 'react';
import { Checkbox } from '../Checkbox';

import styles from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  children: ReactNode;
  className?: string;
}

export const CheckboxInput = ({ children, className }: CheckboxInputProps) => {
  return (
    <div className={classNames(styles.checkboxInput, className)}>
      <Checkbox />
      <div className={styles.checkboxInput__label}>{children}</div>
    </div>
  );
};
