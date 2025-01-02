import classNames from 'classnames';

import { Breadcrumbs } from '@mui/material';

import styles from './UsualBanner.module.scss';

interface UsualBannerProps {
  pageName: string;
}

export const UsualBanner = ({ pageName }: UsualBannerProps) => {
  return (
    <section className={styles.usualBanner}>
      <div className={classNames('container', styles.usualBanner__container)}>
        <h1 className={classNames('title', styles.usualBanner__title)}>
          {pageName}
        </h1>
        <Breadcrumbs
          className={styles.usualBanner__breadcrumbs}
          aria-label="breadcrumb"
        >
          <a href="/">Головна</a>
          <div>{pageName}</div>
        </Breadcrumbs>
      </div>
    </section>
  );
};
