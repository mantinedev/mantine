import { Column, Table } from '@tanstack/react-table';

export interface ExportCsvOptions {
  fileName?: string;
  delimiter?: string;
  includeHeaders?: boolean;
  rows?: 'all' | 'filtered' | 'selected' | 'page';
  columns?: 'visible' | 'all' | string[];
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

function getColumns<TData>(
  table: Table<TData>,
  columns: ExportCsvOptions['columns']
): Column<TData, unknown>[] {
  const allColumns =
    columns === 'all'
      ? table.getAllColumns()
      : Array.isArray(columns)
        ? (columns.map((id) => table.getColumn(id)).filter(Boolean) as Column<TData, unknown>[])
        : table.getVisibleLeafColumns();

  return allColumns.filter((col) => !col.columnDef.meta?.disableExport);
}

function getRows<TData>(table: Table<TData>, rows: ExportCsvOptions['rows']) {
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

export function formatCsv<TData>(table: Table<TData>, options?: ExportCsvOptions): string {
  const {
    delimiter = ',',
    includeHeaders = true,
    rows: rowsOption = 'all',
    columns: columnsOption = 'visible',
    valueFormatter,
  } = options ?? {};

  const cols = getColumns(table, columnsOption);
  const tableRows = getRows(table, rowsOption);

  const headers = includeHeaders
    ? cols.map((col) => {
        const header = col.columnDef.header;
        return typeof header === 'string' ? header : col.id;
      })
    : null;

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

export function exportToCsv<TData>(table: Table<TData>, options?: ExportCsvOptions): void {
  const { fileName = 'data-grid-export' } = options ?? {};
  const csv = formatCsv(table, options);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
