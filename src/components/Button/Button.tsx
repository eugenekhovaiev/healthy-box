import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  theme?: 'light' | 'dark';
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ theme = 'dark', onClick, children }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.button_dark]: theme === 'dark',
        [styles.button_light]: theme === 'light',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
