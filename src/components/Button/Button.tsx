import { ReactNode } from 'react';
import classNames from 'classnames';

import ArrowIcon from '@/assets/icons/arrow.svg?react';

import styles from './Button.module.scss';

interface ButtonProps {
  theme?: 'light' | 'dark';
  arrow?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = ({
  theme = 'dark',
  arrow,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.button_dark]: theme === 'dark',
        [styles.button_light]: theme === 'light',
        [styles.button_arrow]: arrow,
      })}
      onClick={onClick}
    >
      {children}
      {arrow && <ArrowIcon className={styles.button__arrow} />}
    </button>
  );
};
