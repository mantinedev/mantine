import { Column, Row, RowData, Table } from '@tanstack/react-table';
import { getOrderedVisibleColumns } from '../column-cell-props';
import { getColumnLabel } from '../get-column-label';
import type { DataGridFeatures } from '../table-features';

/** Rows included in an export: every row, the filtered rows, the selected rows or the current page; `all`, `filtered` and `selected` follow the current sort order */
export type ExportRowScope = 'all' | 'filtered' | 'selected' | 'page';

/** Columns included in an export: the visible columns, every column or an explicit list of column ids; utility columns and `meta.disableExport` columns are always excluded */
export type ExportColumnScope = 'visible' | 'all' | string[];

export function getExportColumns<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  columns: ExportColumnScope | undefined
): Column<DataGridFeatures, TData, unknown>[] {
  const allColumns =
    columns === 'all'
      ? [
          ...table.getPinnedLeafColumns('start'),
          ...table.getPinnedLeafColumns('center'),
          ...table.getPinnedLeafColumns('end'),
        ]
      : Array.isArray(columns)
        ? (columns.map((id) => table.getColumn(id)).filter(Boolean) as Column<
            DataGridFeatures,
            TData,
            unknown
          >[])
        : getOrderedVisibleColumns(table);

  return allColumns.filter(
    (col) => !col.columnDef.meta?.utility && !col.columnDef.meta?.disableExport
  );
}

type ExportRow<TData extends RowData> = Row<DataGridFeatures, TData>;

function inSortedOrder<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  rows: ExportRow<TData>[]
): ExportRow<TData>[] {
  const ids = new Set(rows.map((row) => row.id));
  return table.getSortedRowModel().flatRows.filter((row) => ids.has(row.id));
}

function sortRows<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  rows: ExportRow<TData>[]
): ExportRow<TData>[] {
  const sorting = table.options.manualSorting ? [] : (table.store.state.sorting ?? []);
  const entries = sorting.flatMap((sort) => {
    const column = table.getColumn(sort.id);
    return column && column.getCanSort() ? [{ sort, column, sortFn: column.getSortFn() }] : [];
  });
  if (entries.length === 0) {
    return rows;
  }

  return rows.slice().sort((rowA, rowB) => {
    for (const { sort, column, sortFn } of entries) {
      const { sortUndefined, invertSorting } = column.columnDef;
      let result = 0;
      if (sortUndefined) {
        const aUndefined = rowA.getValue(sort.id) === undefined;
        const bUndefined = rowB.getValue(sort.id) === undefined;
        if (aUndefined && bUndefined) {
          continue;
        }
        if (aUndefined || bUndefined) {
          if (sortUndefined === 'first') {
            return aUndefined ? -1 : 1;
          }
          if (sortUndefined === 'last') {
            return aUndefined ? 1 : -1;
          }
          result = aUndefined ? sortUndefined : -sortUndefined;
        }
      }
      if (result === 0) {
        result = sortFn(rowA, rowB, sort.id);
      }
      if (result !== 0) {
        return result * (sort.desc ? -1 : 1) * (invertSorting ? -1 : 1);
      }
    }
    return rowA.index - rowB.index;
  });
}

function getExportRows<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  rows: ExportRowScope | undefined
) {
  switch (rows) {
    case 'filtered':
      return inSortedOrder(table, table.getFilteredRowModel().rows);
    case 'selected':
      return sortRows(table, table.getSelectedRowModel().rows);
    case 'page':
      return table.getRowModel().rows;
    default:
      return sortRows(table, table.getCoreRowModel().rows);
  }
}

export function getExportHeaders<TData extends RowData>(
  columns: Column<DataGridFeatures, TData, unknown>[]
): string[] {
  return columns.map((col) => getColumnLabel(col));
}

export interface ExportMatrixOptions {
  rows?: ExportRowScope;
  columns?: ExportColumnScope;
  valueFormatter?: (value: unknown, columnId: string) => string;
  raw?: boolean;
}

export function getExportMatrix<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options: ExportMatrixOptions & { raw: true }
): { headers: string[]; rows: unknown[][] };
export function getExportMatrix<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ExportMatrixOptions
): { headers: string[]; rows: string[][] };
export function getExportMatrix<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ExportMatrixOptions
): { headers: string[]; rows: unknown[][] } {
  const { rows = 'all', columns = 'visible', valueFormatter, raw = false } = options ?? {};
  const cols = getExportColumns(table, columns);

  return {
    headers: getExportHeaders(cols),
    rows: getExportRows(table, rows).map((row) =>
      cols.map((col) => {
        const value = row.getValue(col.id);
        if (valueFormatter) {
          return valueFormatter(value, col.id);
        }
        return raw ? value : value == null ? '' : String(value);
      })
    ),
  };
}

export function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
