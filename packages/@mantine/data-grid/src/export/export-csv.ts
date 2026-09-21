import { Table, RowData } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';
import {
  ExportColumnScope,
  ExportRowScope,
  getExportColumns,
  getExportHeaders,
  getExportRows,
  triggerDownload,
} from './export-utils';

export interface ExportCsvOptions {
  /** File name without the `.csv` extension, @default 'data-grid-export' */
  fileName?: string;

  /** Value separator, @default ',' */
  delimiter?: string;

  /** Whether the first line holds the column labels, @default true */
  includeHeaders?: boolean;

  /** Rows to export, @default 'all' */
  rows?: ExportRowScope;

  /** Columns to export, @default 'visible' */
  columns?: ExportColumnScope;

  /** Formats a cell value before it is written, `String(value)` by default */
  valueFormatter?: (value: unknown, columnId: string) => string;
}

export function escapeCsvValue(value: string, delimiter: string): string {
  if (
    value.includes(delimiter) ||
    value.includes('"') ||
    value.includes('\n') ||
    value.includes('\r')
  ) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function buildCsvString(
  headers: string[] | null,
  rows: string[][],
  delimiter: string
): string {
  const lines: string[] = [];

  if (headers) {
    lines.push(headers.map((h) => escapeCsvValue(h, delimiter)).join(delimiter));
  }

  for (const row of rows) {
    lines.push(row.map((v) => escapeCsvValue(v, delimiter)).join(delimiter));
  }

  return lines.join('\n');
}

export function formatCsv<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ExportCsvOptions
): string {
  const {
    delimiter = ',',
    includeHeaders = true,
    rows: rowsOption = 'all',
    columns: columnsOption = 'visible',
    valueFormatter,
  } = options ?? {};

  const cols = getExportColumns(table, columnsOption);
  const tableRows = getExportRows(table, rowsOption);
  const headers = includeHeaders ? getExportHeaders(cols) : null;

  const rows = tableRows.map((row) =>
    cols.map((col) => {
      const cellValue = row.getValue(col.id);
      return valueFormatter
        ? valueFormatter(cellValue, col.id)
        : cellValue == null
          ? ''
          : String(cellValue);
    })
  );

  return buildCsvString(headers, rows, delimiter);
}

export function exportToCsv<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ExportCsvOptions
): void {
  const { fileName = 'data-grid-export' } = options ?? {};
  const csv = formatCsv(table, options);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  triggerDownload(blob, `${fileName}.csv`);
}
