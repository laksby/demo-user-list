import { format } from 'date-fns';
import { FC, useEffect, useMemo, useState } from 'react';
import { getUsers } from '../api';
import { Table, TableCellValue, TableColumn, Tag, UserPreview } from '../components';
import { User } from '../models';
import { getPasswordLevelTagType } from '../utils';

export const IndexPage: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const columns = useMemo<TableColumn<User>[]>(
    () => [
      {
        id: 'photo',
        width: '320px',
        getValue: user => <UserPreview user={user} skeleton={loading} />,
      },
      {
        id: 'birth',
        width: '140px',
        getValue: user => (
          <TableCellValue value={format(user.birthDate, 'dd/MM/yyyy')} description="Birth Date" skeleton={loading} />
        ),
      },
      {
        id: 'address',
        getValue: user => (
          <TableCellValue
            value={`${user.address}, ${user.city}, ${user.zip}`}
            description="Address"
            skeleton={loading}
          />
        ),
      },
      {
        id: 'phone',
        width: '200px',
        getValue: user => <TableCellValue value={user.phone} description="Phone Number" skeleton={loading} />,
      },
      {
        id: 'password',
        width: '140px',
        getValue: user => (
          <TableCellValue
            value={<Tag value={user.passwordLevel} type={getPasswordLevelTagType(user.passwordLevel)} />}
            description="Password"
            skeleton={loading}
          />
        ),
      },
    ],
    [loading],
  );

  const data = useMemo<User[]>(() => getUsers(), []);

  return (
    <div className="tw-p-4">
      <Table<User> columns={columns} data={data} getId={user => user.id} />
    </div>
  );
};

export default IndexPage;
