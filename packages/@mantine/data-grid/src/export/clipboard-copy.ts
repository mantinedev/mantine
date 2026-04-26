import { Table } from '@tanstack/react-table';
import { formatCsv, ExportCsvOptions } from './export-csv';

export interface ClipboardCopyOptions {
  rows?: ExportCsvOptions['rows'];
  columns?: ExportCsvOptions['columns'];
  includeHeaders?: boolean;
  valueFormatter?: ExportCsvOptions['valueFormatter'];
}

export function copyToClipboard<TData>(
  table: Table<TData>,
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
