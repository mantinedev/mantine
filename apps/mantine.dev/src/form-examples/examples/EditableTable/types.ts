import { UseFormReturnType } from '@mantine/form';
import { TableRow } from './data';

export interface TableValues {
  rows: TableRow[];
}

export type TableForm = UseFormReturnType<TableValues>;
