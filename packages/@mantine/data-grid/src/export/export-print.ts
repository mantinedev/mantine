import { Table, RowData } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';
import { formatCsv } from './export-csv';
import type { ExportColumnScope, ExportRowScope } from './export-utils';

export interface ExportPrintOptions {
  title?: string;
  rows?: ExportRowScope;
  columns?: ExportColumnScope;
  valueFormatter?: (value: unknown, columnId: string) => string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildPrintTable<TData extends RowData>(
  doc: Document,
  table: Table<DataGridFeatures, TData>,
  options?: ExportPrintOptions
): HTMLTableElement {
  const {
    rows: rowsOption = 'all',
    columns: columnsOption = 'visible',
    valueFormatter,
  } = options ?? {};

  const csvString = formatCsv(table, {
    rows: rowsOption,
    columns: columnsOption,
    valueFormatter,
    includeHeaders: true,
    delimiter: '\0',
  });

  const lines = csvString.split('\n');
  const [headerLine, ...dataLines] = lines;
  const headers = headerLine.split('\0');

  const tableEl = doc.createElement('table');
  tableEl.style.cssText = 'border-collapse:collapse;width:100%';

  const thead = doc.createElement('thead');
  const headRow = doc.createElement('tr');
  for (const h of headers) {
    const th = doc.createElement('th');
    th.textContent = h;
    th.style.cssText =
      'border:1px solid #ddd;padding:8px;text-align:left;font-size:13px;background:#f5f5f5;font-weight:600';
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  tableEl.appendChild(thead);

  const tbody = doc.createElement('tbody');
  dataLines.forEach((line, i) => {
    const tr = doc.createElement('tr');
    if (i % 2 === 1) {
      tr.style.backgroundColor = '#fafafa';
    }
    for (const v of line.split('\0')) {
      const td = doc.createElement('td');
      td.textContent = v;
      td.style.cssText = 'border:1px solid #ddd;padding:8px;text-align:left;font-size:13px';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  tableEl.appendChild(tbody);

  return tableEl;
}

export function exportToPrint<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  options?: ExportPrintOptions
): void {
  const { title = document.title } = options ?? {};
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    return;
  }

  const doc = printWindow.document;
  doc.title = escapeHtml(title);

  const style = doc.createElement('style');
  style.textContent =
    'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;margin:20px}@media print{body{margin:0}}';
  doc.head.appendChild(style);

  const tableEl = buildPrintTable(doc, table, options);
  doc.body.appendChild(tableEl);

  printWindow.focus();
  printWindow.print();
  printWindow.close();
}
