import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import * as styles from './Tag.module.css';

interface Props {
  value: ReactNode;
  type: TagType;
}

export type TagType = 'Success' | 'Warning' | 'Danger';

export const Tag: FC<Props> = props => {
  const { value, type } = props;

  return (
    <span
      className={clsx(styles.tag, {
        [styles.tagSuccess]: type === 'Success',
        [styles.tagWarning]: type === 'Warning',
        [styles.tagDanger]: type === 'Danger',
      })}>
      {value}
    </span>
  );
};
