import { Column, Table, RowData } from '@tanstack/react-table';
import { getColumnLabel } from '../get-column-label';
import type { DataGridFeatures } from '../table-features';

export type ExportRowScope = 'all' | 'filtered' | 'selected' | 'page';
export type ExportColumnScope = 'visible' | 'all' | string[];

export function getExportColumns<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  columns: ExportColumnScope | undefined
): Column<DataGridFeatures, TData, unknown>[] {
  const allColumns =
    columns === 'all'
      ? table.getAllColumns()
      : Array.isArray(columns)
        ? (columns.map((id) => table.getColumn(id)).filter(Boolean) as Column<
            DataGridFeatures,
            TData,
            unknown
          >[])
        : table.getVisibleLeafColumns();

  return allColumns.filter(
    (col) => !col.columnDef.meta?.utility && !col.columnDef.meta?.disableExport
  );
}

export function getExportRows<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  rows: ExportRowScope | undefined
) {
  switch (rows) {
    case 'filtered':
      return table.getFilteredRowModel().rows;
    case 'selected':
      return table.getSelectedRowModel().rows;
    case 'page':
      return table.getRowModel().rows;
    default:
      return table.getCoreRowModel().rows;
  }
}

export function getExportHeaders<TData extends RowData>(
  columns: Column<DataGridFeatures, TData, unknown>[]
): string[] {
  return columns.map((col) => getColumnLabel(col));
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
