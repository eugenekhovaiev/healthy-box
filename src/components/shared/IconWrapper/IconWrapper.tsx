import classNames from 'classnames';

import styles from './IconWrapper.module.scss';

interface IconWrapperProps {
  className?: string;
  src: string;
  alt: string;
}

export const IconWrapper = ({ className, src, alt }: IconWrapperProps) => {
  return (
    <div
      className={classNames(styles.iconWrapper, {
        [className || '']: className,
      })}
    >
      <img src={src} alt={alt} />
    </div>
  );
};
