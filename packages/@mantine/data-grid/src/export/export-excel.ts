import { Column, Table } from '@tanstack/react-table';
import { ExportCsvOptions } from './export-csv';

export interface ExportExcelOptions {
  fileName?: string;
  sheetName?: string;
  rows?: ExportCsvOptions['rows'];
  columns?: ExportCsvOptions['columns'];
  valueFormatter?: ExportCsvOptions['valueFormatter'];
  includeHeaders?: boolean;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildCell(value: unknown): string {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return `<Cell><Data ss:Type="Number">${value}</Data></Cell>`;
  }

  const str = value == null ? '' : String(value);
  return `<Cell><Data ss:Type="String">${escapeXml(str)}</Data></Cell>`;
}

function buildRow(cells: unknown[]): string {
  return `<Row>${cells.map(buildCell).join('')}</Row>`;
}

export function buildExcelXml(
  headers: string[] | null,
  rows: unknown[][],
  sheetName: string
): string {
  const xmlRows: string[] = [];

  if (headers) {
    xmlRows.push(buildRow(headers));
  }

  for (const row of rows) {
    xmlRows.push(buildRow(row));
  }

  return [
    '<?xml version="1.0"?>',
    '<?mso-application progid="Excel.Sheet"?>',
    '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"',
    '  xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">',
    `<Worksheet ss:Name="${escapeXml(sheetName)}">`,
    '<Table>',
    ...xmlRows,
    '</Table>',
    '</Worksheet>',
    '</Workbook>',
  ].join('\n');
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

export function exportToExcel<TData>(table: Table<TData>, options?: ExportExcelOptions): void {
  const {
    fileName = 'data-grid-export',
    sheetName = 'Sheet1',
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
      if (valueFormatter) {
        return valueFormatter(cellValue, col.id);
      }
      return cellValue;
    })
  );

  const xml = buildExcelXml(headers, rows, sheetName);
  const blob = new Blob([xml], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.xls`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
