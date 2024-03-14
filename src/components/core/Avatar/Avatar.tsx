import clsx from 'clsx';
import { FC } from 'react';
import * as styles from './Avatar.module.css';

interface Props {
  url: string;
  size?: string;
  className?: string;
  skeleton?: boolean;
}

export const Avatar: FC<Props> = props => {
  const { url, size = '64px', className, skeleton } = props;

  return (
    <div className={clsx(styles.avatarRoot, className)}>
      <div className={styles.wrapper} style={{ width: size, height: size }}>
        <img src={url} alt="User avatar" />
      </div>
      {skeleton && (
        <div
          className={clsx('skeleton skeleton-circle', styles.avatarSkeleton)}
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
};
