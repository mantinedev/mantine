import { Table, RowData } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

export interface AutosizeColumnsOptions {
  columnIds?: string[];
  includeHeaders?: boolean;
  maxWidth?: number;
  minWidth?: number;
}

export function autosizeColumns<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  containerElement: HTMLElement,
  options?: AutosizeColumnsOptions
): void {
  const { columnIds, includeHeaders = true, maxWidth = 500, minWidth = 50 } = options ?? {};

  const columns = columnIds
    ? columnIds.map((id) => table.getColumn(id)).filter(Boolean)
    : table.getVisibleLeafColumns();

  const sizing: Record<string, number> = {};

  for (const column of columns) {
    if (!column) {
      continue;
    }

    const cells = containerElement.querySelectorAll(
      `[data-column-id="${column.id}"], th[data-column-id="${column.id}"]`
    );

    const colIndex = table.getVisibleLeafColumns().indexOf(column);
    const measured: HTMLElement[] = [];

    if (cells.length > 0) {
      cells.forEach((cell) => measured.push(cell as HTMLElement));
    } else if (colIndex >= 0) {
      const allRows = containerElement.querySelectorAll('tbody tr:not([data-group-row])');
      allRows.forEach((row) => {
        const tds = row.querySelectorAll('td');
        const extraOffset = tds.length - table.getVisibleLeafColumns().length;
        const td = tds[colIndex + Math.max(0, extraOffset)];
        if (td) {
          measured.push(td);
        }
      });

      if (includeHeaders) {
        const headerRows = containerElement.querySelectorAll('thead tr');
        const lastHeaderRow = headerRows[headerRows.length - 1];
        if (lastHeaderRow) {
          const ths = lastHeaderRow.querySelectorAll('th');
          const extraOffset = ths.length - table.getVisibleLeafColumns().length;
          const th = ths[colIndex + Math.max(0, extraOffset)];
          if (th) {
            measured.push(th);
          }
        }
      }
    }

    const maxContentWidth = Math.max(minWidth, measureContentWidth(measured, containerElement));
    sizing[column.id] = Math.min(maxContentWidth, maxWidth);
  }

  table.setColumnSizing((prev) => ({ ...prev, ...sizing }));
}

function measureContentWidth(cells: HTMLElement[], containerElement: HTMLElement) {
  if (cells.length === 0) {
    return 0;
  }

  const host = cells[0].closest('table')?.parentElement ?? containerElement;
  const measureTable = document.createElement('table');
  measureTable.className = cells[0].closest('table')?.className ?? '';
  measureTable.setAttribute('aria-hidden', 'true');
  measureTable.style.cssText =
    'position:absolute;visibility:hidden;pointer-events:none;top:0;left:0;width:max-content;table-layout:auto;';

  const tbody = document.createElement('tbody');
  const clones = cells.map((cell) => {
    const row = document.createElement('tr');
    row.className = cell.parentElement?.className ?? '';
    const clone = cell.cloneNode(true) as HTMLElement;
    clone.removeAttribute('id');
    clone.removeAttribute('colspan');
    clone.style.width = 'auto';
    clone.style.minWidth = '0';
    clone.style.maxWidth = 'none';
    clone.style.position = 'static';
    row.appendChild(clone);
    tbody.appendChild(row);
    return clone;
  });

  measureTable.appendChild(tbody);
  host.appendChild(measureTable);
  const width = Math.max(...clones.map((clone) => clone.getBoundingClientRect().width));
  measureTable.remove();

  return Math.ceil(width);
}
