import { ReactNode } from 'react';

import checkIcon from '@/assets/icons/check.svg';

import styles from './ListItem.module.scss';

interface ListItemProps {
  children?: ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.listItem__iconWrapper}>
        <img src={checkIcon} alt="Check" />
      </div>
      <div className={styles.listItem__text}>{children}</div>
    </li>
  );
};
