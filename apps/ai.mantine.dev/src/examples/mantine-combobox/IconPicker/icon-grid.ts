import type { IconEntry } from './icon-data';

export type GridRow =
  | { kind: 'header'; label: string }
  | { kind: 'cells'; start: number; count: number; group: 'recent' | 'all' };

export interface IconGrid {
  /** Every cell in navigation order: recent icons first, then the results */
  cells: IconEntry[];
  rows: GridRow[];
  /** Index of the row that holds each cell */
  cellRows: number[];
  /** Index of the first cell of the results, after the recent row */
  resultsStart: number;
}

export function buildIconGrid(
  results: IconEntry[],
  recent: IconEntry[],
  columns: number
): IconGrid {
  const cells: IconEntry[] = [];
  const rows: GridRow[] = [];
  const cellRows: number[] = [];

  const addCells = (entries: IconEntry[], group: 'recent' | 'all') => {
    for (let offset = 0; offset < entries.length; offset += columns) {
      const chunk = entries.slice(offset, offset + columns);
      const rowIndex = rows.length;
      rows.push({ kind: 'cells', start: cells.length, count: chunk.length, group });
      for (const entry of chunk) {
        cells.push(entry);
        cellRows.push(rowIndex);
      }
    }
  };

  if (recent.length > 0) {
    rows.push({ kind: 'header', label: 'Recent' });
    addCells(recent, 'recent');
    rows.push({ kind: 'header', label: 'All icons' });
  }

  const resultsStart = cells.length;
  addCells(results, 'all');

  return { cells, rows, cellRows, resultsStart };
}

type CellsRow = Extract<GridRow, { kind: 'cells' }>;

export type GridMove = 'left' | 'right' | 'up' | 'down' | 'pageUp' | 'pageDown' | 'first' | 'last';

/** Next highlighted cell; up and down keep the column, clamped to the length of a shorter row */
export function moveInGrid(grid: IconGrid, index: number, move: GridMove, pageRows: number) {
  const last = grid.cells.length - 1;

  if (last < 0) {
    return -1;
  }

  if (index < 0 || index > last) {
    return move === 'last' ? last : 0;
  }

  switch (move) {
    case 'left':
      return Math.max(index - 1, 0);
    case 'right':
      return Math.min(index + 1, last);
    case 'first':
      return 0;
    case 'last':
      return last;
  }

  const delta = move === 'up' ? -1 : move === 'down' ? 1 : move === 'pageUp' ? -pageRows : pageRows;
  const cellRowIndexes = grid.rows.flatMap((row, rowIndex) =>
    row.kind === 'cells' ? [rowIndex] : []
  );
  const currentRowIndex = grid.cellRows[index];
  const currentRow = grid.rows[currentRowIndex] as CellsRow;
  const column = index - currentRow.start;
  const position = cellRowIndexes.indexOf(currentRowIndex);
  const targetPosition = Math.min(Math.max(position + delta, 0), cellRowIndexes.length - 1);
  const targetRow = grid.rows[cellRowIndexes[targetPosition]] as CellsRow;

  return targetRow.start + Math.min(column, targetRow.count - 1);
}
