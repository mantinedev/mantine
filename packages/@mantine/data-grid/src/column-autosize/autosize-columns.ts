import { Table, RowData } from '@tanstack/react-table';
import { GRID_ELEMENT_SELECTOR, getOwnedGrid, SCROLL_CONTAINER_SELECTOR } from '../hooks/grid-dom';
import type { DataGridFeatures } from '../table-features';

export interface AutosizeColumnsOptions {
  columnIds?: string[];
  includeHeaders?: boolean;
  maxWidth?: number;
  minWidth?: number;
}

const EXCLUDED_ROW_SELECTOR =
  '[data-expanded-row], [data-empty-row], [data-skeleton-row], [data-group-row]';

function getGridElement(containerElement: HTMLElement) {
  if (containerElement.matches(GRID_ELEMENT_SELECTOR)) {
    return containerElement;
  }

  const scrollContainer = containerElement.matches(SCROLL_CONTAINER_SELECTOR)
    ? containerElement
    : containerElement.querySelector<HTMLElement>(SCROLL_CONTAINER_SELECTOR);
  return (
    getOwnedGrid(scrollContainer) ??
    containerElement.querySelector<HTMLElement>(GRID_ELEMENT_SELECTOR)
  );
}

function isHeaderCell(cell: HTMLElement) {
  return cell.tagName === 'TH' || cell.getAttribute('role') === 'columnheader';
}

function isSpanningCell(cell: HTMLElement) {
  return Number(cell.getAttribute('colspan') ?? cell.getAttribute('aria-colspan') ?? 1) > 1;
}

function collectColumnCells(
  grid: HTMLElement,
  columnIds: string[],
  includeHeaders: boolean
): HTMLElement[][] {
  const groupIndexById = new Map(columnIds.map((id, index) => [id, index]));
  const cellGroups: HTMLElement[][] = columnIds.map(() => []);

  grid.querySelectorAll<HTMLElement>('[data-column-id]').forEach((cell) => {
    const groupIndex = groupIndexById.get(cell.getAttribute('data-column-id')!);
    const excludedRow = cell.closest(EXCLUDED_ROW_SELECTOR);
    if (
      groupIndex === undefined ||
      cell.closest(GRID_ELEMENT_SELECTOR) !== grid ||
      (excludedRow && grid.contains(excludedRow)) ||
      (!includeHeaders && isHeaderCell(cell)) ||
      isSpanningCell(cell)
    ) {
      return;
    }

    cellGroups[groupIndex].push(cell);
  });

  return cellGroups;
}

/**
 * Measures rendered cell content and sets column sizes to fit it.
 *
 * @param table TanStack table instance of the grid (`store.table`)
 * @param containerElement DataGrid root element, its scroll container, or the grid element itself
 * @param options Columns to measure and width bounds
 */
export function autosizeColumns<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  containerElement: HTMLElement,
  options?: AutosizeColumnsOptions
): void {
  const { columnIds, includeHeaders = true, maxWidth = 500, minWidth = 50 } = options ?? {};

  const columns = columnIds
    ? columnIds.map((id) => table.getColumn(id)).filter((column) => !!column)
    : table.getVisibleLeafColumns();

  const grid = getGridElement(containerElement);
  const cellGroups = grid
    ? collectColumnCells(
        grid,
        columns.map((column) => column.id),
        includeHeaders
      )
    : columns.map(() => []);

  const widths = measureContentWidths(cellGroups, grid?.parentElement ?? containerElement, grid);
  const sizing: Record<string, number> = {};
  columns.forEach((column, index) => {
    if (cellGroups[index].length > 0) {
      sizing[column.id] = Math.min(Math.max(minWidth, widths[index]), maxWidth);
    }
  });

  table.setColumnSizing((prev) => ({ ...prev, ...sizing }));
}

function toTableCell(clone: HTMLElement) {
  if (clone.tagName === 'TD' || clone.tagName === 'TH') {
    return clone;
  }

  const wrapper = document.createElement('td');
  wrapper.style.cssText = 'padding:0;border:0;';
  wrapper.appendChild(clone);
  return wrapper;
}

function measureContentWidths(
  cellGroups: HTMLElement[][],
  host: HTMLElement,
  grid: HTMLElement | null
) {
  if (!cellGroups.some((cells) => cells.length > 0)) {
    return cellGroups.map(() => 0);
  }

  const sourceRows = new Map<Element | null, (HTMLElement | undefined)[]>();
  cellGroups.forEach((cells, groupIndex) => {
    for (const cell of cells) {
      const sourceRow = cell.parentElement;
      let rowCells = sourceRows.get(sourceRow);
      if (!rowCells) {
        rowCells = new Array(cellGroups.length);
        sourceRows.set(sourceRow, rowCells);
      }
      if (!rowCells[groupIndex]) {
        rowCells[groupIndex] = cell;
      }
    }
  });

  const measureTable = document.createElement('table');
  measureTable.className = grid instanceof HTMLTableElement ? grid.className : '';
  measureTable.setAttribute('aria-hidden', 'true');
  measureTable.style.cssText =
    'position:absolute;visibility:hidden;pointer-events:none;top:0;left:0;width:max-content;table-layout:auto;';

  const tbody = document.createElement('tbody');
  const columnClones: (HTMLElement | undefined)[] = new Array(cellGroups.length);

  for (const [sourceRow, rowCells] of sourceRows) {
    const row = document.createElement('tr');
    row.className = sourceRow instanceof HTMLElement ? sourceRow.className : '';
    row.style.display = 'table-row';
    for (let groupIndex = 0; groupIndex < cellGroups.length; groupIndex += 1) {
      const cell = rowCells[groupIndex];
      if (!cell) {
        const placeholder = document.createElement('td');
        placeholder.style.cssText = 'padding:0;border:0;width:0;min-width:0;';
        row.appendChild(placeholder);
        continue;
      }

      const clone = cell.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      clone.removeAttribute('colspan');
      clone.removeAttribute('rowspan');
      clone.style.width = 'auto';
      clone.style.minWidth = '0';
      clone.style.maxWidth = 'none';
      clone.style.position = 'static';
      const measuredCell = toTableCell(clone);
      row.appendChild(measuredCell);
      columnClones[groupIndex] ??= measuredCell;
    }
    tbody.appendChild(row);
  }

  measureTable.appendChild(tbody);
  host.appendChild(measureTable);
  const widths = cellGroups.map((_, groupIndex) =>
    Math.ceil(columnClones[groupIndex]?.getBoundingClientRect().width ?? 0)
  );
  measureTable.remove();

  return widths;
}
