import type { Column, RowData } from '@tanstack/react-table';
import type { DataGridFeatures } from './table-features';

/** Human-readable column label: `meta.label`, then a string `header`, then the column id */
export function getColumnLabel<TData extends RowData>(
  column: Column<DataGridFeatures, TData, unknown>
): string {
  const label = column.columnDef.meta?.label;
  if (label) {
    return label;
  }

  const header = column.columnDef.header;
  return typeof header === 'string' ? header : column.id;
}
