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
    let maxContentWidth = minWidth;

    if (cells.length > 0) {
      cells.forEach((cell) => {
        const width = (cell as HTMLElement).scrollWidth;
        if (width > maxContentWidth) {
          maxContentWidth = width;
        }
      });
    } else if (colIndex >= 0) {
      const allRows = containerElement.querySelectorAll('tbody tr:not([data-group-row])');
      allRows.forEach((row) => {
        const tds = row.querySelectorAll('td');
        const extraOffset = tds.length - table.getVisibleLeafColumns().length;
        const td = tds[colIndex + Math.max(0, extraOffset)];
        if (td) {
          const width = td.scrollWidth + 16;
          if (width > maxContentWidth) {
            maxContentWidth = width;
          }
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
            const width = th.scrollWidth + 16;
            if (width > maxContentWidth) {
              maxContentWidth = width;
            }
          }
        }
      }
    }

    sizing[column.id] = Math.min(maxContentWidth, maxWidth);
  }

  table.setColumnSizing((prev) => ({ ...prev, ...sizing }));
}
