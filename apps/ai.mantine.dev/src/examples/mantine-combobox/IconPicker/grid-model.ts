import type { IconEntry, IconPickerValue, IconStyle } from './icon-index';

export const COLUMNS = 8;
export const CELL_SIZE = 40;
export const CELL_GAP = 4;
export const ROW_HEIGHT = CELL_SIZE + CELL_GAP;
export const LABEL_HEIGHT = 28;
export const GRID_HEIGHT = 6 * ROW_HEIGHT + LABEL_HEIGHT;
export const PAGE_ROWS = Math.floor(GRID_HEIGHT / ROW_HEIGHT);
/** Grid columns, dropdown padding and room for the scrollbar */
export const DROPDOWN_WIDTH = COLUMNS * CELL_SIZE + (COLUMNS - 1) * CELL_GAP + 24;

export interface GridCell {
  key: string;
  name: string;
  style: IconStyle;
}

export type GridRow =
  | { kind: 'label'; key: string; label: string }
  | { kind: 'icons'; key: string; start: number; end: number };

export interface GridModel {
  cells: GridCell[];
  rows: GridRow[];
  /** Top offset of every row */
  starts: number[];
  totalHeight: number;
  /** Indexes in `rows` of the rows that hold icons */
  iconRows: number[];
  /** Position in `iconRows` of the row that holds each cell */
  cellIconRow: number[];
  /** Index of the first cell of the full grid, after the recent icons */
  gridStart: number;
}

export function buildGridModel(
  entries: IconEntry[],
  style: IconStyle,
  recent: IconPickerValue[]
): GridModel {
  const cells: GridCell[] = [];
  const rows: GridRow[] = [];
  const iconRows: number[] = [];
  const cellIconRow: number[] = [];

  const addCells = (section: string, items: GridCell[]) => {
    for (let start = 0; start < items.length; start += COLUMNS) {
      const chunk = items.slice(start, start + COLUMNS);
      const first = cells.length;
      iconRows.push(rows.length);
      rows.push({
        kind: 'icons',
        key: `${section}-${start}`,
        start: first,
        end: first + chunk.length,
      });
      for (const cell of chunk) {
        cells.push(cell);
        cellIconRow.push(iconRows.length - 1);
      }
    }
  };

  if (recent.length > 0) {
    rows.push({ kind: 'label', key: 'recent-label', label: 'Recent' });
    addCells(
      'recent',
      recent.map((item) => ({ key: `recent-${item.style}-${item.name}`, ...item }))
    );
    rows.push({ kind: 'label', key: 'all-label', label: 'All icons' });
  }

  const gridStart = cells.length;
  addCells(
    'all',
    entries.map((entry) => ({ key: `${style}-${entry.name}`, name: entry.name, style }))
  );

  const starts: number[] = [];
  let offset = 0;
  for (const row of rows) {
    starts.push(offset);
    offset += row.kind === 'label' ? LABEL_HEIGHT : ROW_HEIGHT;
  }

  return { cells, rows, starts, totalHeight: offset, iconRows, cellIconRow, gridStart };
}

/** Cell in the same column `deltaRows` rows away, or the last cell of a shorter row */
export function moveByRows(model: GridModel, index: number, deltaRows: number) {
  const current = model.cellIconRow[index];
  const target = Math.min(Math.max(current + deltaRows, 0), model.iconRows.length - 1);
  const currentRow = model.rows[model.iconRows[current]];
  const targetRow = model.rows[model.iconRows[target]];

  if (currentRow.kind !== 'icons' || targetRow.kind !== 'icons') {
    return index;
  }

  return Math.min(targetRow.start + index - currentRow.start, targetRow.end - 1);
}

/** Scroll offset that keeps the cell's row (and the section label right above it) visible */
export function getOffsetToReveal(model: GridModel, index: number, currentOffset: number) {
  const rowIndex = model.iconRows[model.cellIconRow[index]];
  const top = model.starts[model.rows[rowIndex - 1]?.kind === 'label' ? rowIndex - 1 : rowIndex];
  const bottom = model.starts[rowIndex] + ROW_HEIGHT;

  if (top < currentOffset) {
    return top;
  }
  if (bottom > currentOffset + GRID_HEIGHT) {
    return bottom - GRID_HEIGHT;
  }
  return currentOffset;
}

/** Scroll offset that puts the cell's row in the middle of the grid */
export function getOffsetToCenter(model: GridModel, index: number) {
  if (index < 0) {
    return 0;
  }
  const rowIndex = model.iconRows[model.cellIconRow[index]];
  const centered = model.starts[rowIndex] - (GRID_HEIGHT - ROW_HEIGHT) / 2;
  return Math.max(0, Math.min(centered, model.totalHeight - GRID_HEIGHT));
}
