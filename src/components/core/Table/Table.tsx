import { ReactNode } from 'react';
import * as styles from './Table.module.css';

interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
  getId(record: T): string | number;
}

export interface TableColumn<T> {
  id: string;
  width?: string;
  getValue(record: T): ReactNode;
}

export function Table<T>(props: Props<T>): ReactNode {
  const { columns, data, getId } = props;

  return (
    <table className={styles.table}>
      <colgroup>
        {columns.map(column => (
          <col key={column.id} style={{ width: column.width }} />
        ))}
      </colgroup>
      <tbody>
        {data.map(record => {
          const recordId = getId(record);

          return (
            <tr key={recordId}>
              {columns.map(column => {
                const value = column.getValue(record);

                return <td key={column.id}>{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
