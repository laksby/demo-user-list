import { FC } from 'react';
import { User } from '../../../models';
import { Avatar, TableCellValue } from '../../core';
import * as styles from './UserPreview.module.css';

interface Props {
  user: User;
  skeleton?: boolean;
}

export const UserPreview: FC<Props> = props => {
  const { user, skeleton } = props;

  return (
    <div className={styles.preview}>
      <Avatar url={user.photo} size="64px" className={styles.avatar} skeleton={skeleton} />
      <TableCellValue value={user.fullName} description={user.email} className={styles.text} skeleton={skeleton} />
    </div>
  );
};
