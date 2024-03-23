import { RowData, Table as TableDefinition } from '@tanstack/react-table';
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { DataTableFactory } from './DataTable';

export type DataTableContextValue<TData extends RowData = RowData> = {
  table: TableDefinition<TData>;
  getStyles: GetStylesApi<DataTableFactory>;
  highlightOnSelect?: boolean;
};

export const [DataTableProvider, useDataTableContext] = createSafeContext<DataTableContextValue>(
  'DataTable component was not found in the tree'
);
