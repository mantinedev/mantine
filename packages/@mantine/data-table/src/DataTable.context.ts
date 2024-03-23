import { createSafeContext, GetStylesApi } from '@mantine/core';
import { RowData, Table as TableDefinition } from '@tanstack/react-table';
import type { DataTableFactory } from './DataTable';

export type DataTableContextValue<TData extends RowData = RowData> = {
  table: TableDefinition<TData>;
  getStyles: GetStylesApi<DataTableFactory>;
};

export const [DataTableProvider, useDataTableContext] = createSafeContext<DataTableContextValue>(
  'DataTable component was not found in the tree'
);
