import classNames from 'classnames';

import { ReactNode } from 'react';
import { Checkbox } from '../Checkbox';

import styles from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  className?: string;
  checked?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export const CheckboxInput = ({
  className,
  checked,
  onClick,
  children,
}: CheckboxInputProps) => {
  return (
    <div className={classNames(styles.checkboxInput, className)}>
      <Checkbox checked={checked} onClick={onClick} />
      <div className={styles.checkboxInput__label}>{children}</div>
    </div>
  );
};
