import { ReactNode } from 'react';

import { Checkbox } from '../../../shared/Checkbox';

import styles from './ListItem.module.scss';

interface ListItemProps {
  children?: ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <Checkbox passive checked />
      <div className={styles.listItem__text}>{children}</div>
    </li>
  );
};
