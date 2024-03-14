import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import * as styles from './TableCellValue.module.css';

interface Props {
  value: ReactNode;
  description?: ReactNode;
  className?: string;
  skeleton?: boolean;
}

export const TableCellValue: FC<Props> = props => {
  const { value, description, className, skeleton } = props;

  return (
    <div className={clsx(styles.valueContainer, className)}>
      {skeleton ? (
        <>
          <div className="skeleton skeleton-block tw-h-4" />
          <div className="skeleton skeleton-block tw-h-4" />
        </>
      ) : (
        <>
          <span className={styles.valueHeading}>{value}</span>
          {description && <span className={styles.valueDescription}>{description}</span>}
        </>
      )}
    </div>
  );
};
