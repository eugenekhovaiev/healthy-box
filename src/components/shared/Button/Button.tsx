import { ReactNode } from 'react';
import classNames from 'classnames';

import ArrowIcon from '@/assets/icons/arrow.svg?react';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  theme?: 'light' | 'dark';
  withArrow?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = ({
  className,
  theme = 'dark',
  withArrow,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.button_dark]: theme === 'dark',
          [styles.button_light]: theme === 'light',
          [styles.button_withArrow]: withArrow,
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
      {withArrow && <ArrowIcon className={styles.button__arrow} />}
    </button>
  );
};
