import type { RowData } from '@tanstack/react-table';
import type { DataGridColumnDef } from '../DataGrid.types';
import { collectLeafColumnDefIds, type ColumnDefIdSource } from '../get-column-def-id';

function defaultSortingDisabled<TData extends RowData>(
  columns: readonly DataGridColumnDef<TData>[]
): DataGridColumnDef<TData>[] {
  return columns.map((col) => ({
    enableSorting: false,
    ...col,
    ...('columns' in col &&
      col.columns && {
        columns: defaultSortingDisabled(col.columns),
      }),
  }));
}

const ACTIONS_COLUMN_DEFAULTS = {
  size: 80,
  enableSorting: false,
  enableColumnFilter: false,
  enableResizing: false,
} as const;

function processActionsColumns<TData extends RowData>(
  columns: readonly DataGridColumnDef<TData>[]
): DataGridColumnDef<TData>[] {
  return columns.map((col) => {
    if ('columns' in col && col.columns) {
      return { ...col, columns: processActionsColumns(col.columns) };
    }

    if (col.meta?.type !== 'actions') {
      return col;
    }

    return {
      ...ACTIONS_COLUMN_DEFAULTS,
      header: '',
      ...col,
      meta: { align: 'end', disableExport: true, ...col.meta },
    };
  });
}

interface PrepareColumnsInput<TData extends RowData> {
  columns: readonly DataGridColumnDef<TData>[];
  utilityColumns: DataGridColumnDef<TData>[];
  withSorting: boolean;
}

export function prepareColumns<TData extends RowData>({
  columns,
  utilityColumns,
  withSorting,
}: PrepareColumnsInput<TData>): DataGridColumnDef<TData>[] {
  const sortProcessed = withSorting ? defaultSortingDisabled(columns) : columns;
  const dataColumns = processActionsColumns(sortProcessed);
  return utilityColumns.length > 0 ? [...utilityColumns, ...dataColumns] : dataColumns;
}

export function collectAggregatedColumnIds<TData extends RowData>(
  columns: readonly DataGridColumnDef<TData>[]
): string[] {
  return collectLeafColumnDefIds(
    columns as readonly ColumnDefIdSource[],
    (def) => (def as DataGridColumnDef<TData>).aggregationFn !== undefined
  );
}
