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

export interface ExportExcelOptions {
  /** File name without the `.xls` extension, @default 'data-grid-export' */
  fileName?: string;

  /** Worksheet name, @default 'Sheet1' */
  sheetName?: string;

  /** Rows to export, @default 'all' */
  rows?: ExportRowScope;

  /** Columns to export, @default 'visible' */
  columns?: ExportColumnScope;

  /** Formats a cell value before it is written, `String(value)` by default */
  valueFormatter?: (value: unknown, columnId: string) => string;

  /** Whether the first row holds the column labels, @default true */
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

export function exportToExcel<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ExportExcelOptions
): void {
  const {
    fileName = 'data-grid-export',
    sheetName = 'Sheet1',
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
      if (valueFormatter) {
        return valueFormatter(cellValue, col.id);
      }
      return cellValue;
    })
  );

  const xml = buildExcelXml(headers, rows, sheetName);
  const blob = new Blob([xml], { type: 'application/vnd.ms-excel' });
  triggerDownload(blob, `${fileName}.xls`);
}
