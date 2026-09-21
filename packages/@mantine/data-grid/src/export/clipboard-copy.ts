import { Table, RowData } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';
import { formatCsv } from './export-csv';
import type { ExportColumnScope, ExportRowScope } from './export-utils';

export interface ClipboardCopyOptions {
  /** Rows to copy, @default 'all' */
  rows?: ExportRowScope;

  /** Columns to copy, @default 'visible' */
  columns?: ExportColumnScope;

  /** Whether the first line holds the column labels, @default false */
  includeHeaders?: boolean;

  /** Formats a cell value before it is copied, `String(value)` by default */
  valueFormatter?: (value: unknown, columnId: string) => string;
}

export function copyToClipboard<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ClipboardCopyOptions
): Promise<void> {
  const {
    rows: rowsOption = 'selected',
    columns: columnsOption = 'visible',
    includeHeaders = false,
    valueFormatter,
  } = options ?? {};

  const effectiveRows =
    rowsOption === 'selected' && table.getSelectedRowModel().rows.length === 0
      ? 'page'
      : rowsOption;

  const tsv = formatCsv(table, {
    rows: effectiveRows,
    columns: columnsOption,
    includeHeaders,
    valueFormatter,
    delimiter: '\t',
  });

  return navigator.clipboard.writeText(tsv);
}
