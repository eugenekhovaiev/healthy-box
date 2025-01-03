import classNames from 'classnames';

import checkIcon from '@/assets/icons/check.svg';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  passive?: boolean;
  checked?: boolean;
  onClick?: () => void;
}

export const Checkbox = ({ passive, checked, onClick }: CheckboxProps) => {
  return (
    <button
      className={classNames(styles.checkbox, {
        [styles.checkbox_passive]: passive,
        [styles.checkbox_checked]: checked,
      })}
      onClick={onClick}
    >
      <img src={checkIcon} alt="Check" />
    </button>
  );
};
