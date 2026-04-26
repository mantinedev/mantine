import { useCallback, useRef } from 'react';

export interface UseGridNavigationReturn {
  onKeyDown: (event: React.KeyboardEvent) => void;
  getCellTabIndex: (rowIndex: number, colIndex: number) => number;
}

export function useGridNavigation(options: {
  rowCount: number;
  colCount: number;
  onCellFocus?: (rowIndex: number, colIndex: number) => void;
}): UseGridNavigationReturn {
  const { rowCount, colCount, onCellFocus } = options;
  const activeCell = useRef({ row: 0, col: 0 });

  const focusCell = useCallback(
    (row: number, col: number, container: HTMLElement) => {
      const cell = container.querySelector<HTMLElement>(
        `[data-row-index="${row}"] [data-col-index="${col}"]`
      );

      if (cell) {
        activeCell.current = { row, col };
        cell.focus();
        onCellFocus?.(row, col);
      }
    },
    [onCellFocus]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const container = event.currentTarget as HTMLElement;
      const { row, col } = activeCell.current;

      let nextRow = row;
      let nextCol = col;

      switch (event.key) {
        case 'ArrowUp':
          nextRow = Math.max(0, row - 1);
          break;
        case 'ArrowDown':
          nextRow = Math.min(rowCount - 1, row + 1);
          break;
        case 'ArrowLeft':
          nextCol = Math.max(0, col - 1);
          break;
        case 'ArrowRight':
          nextCol = Math.min(colCount - 1, col + 1);
          break;
        case 'Home':
          if (event.ctrlKey || event.metaKey) {
            nextRow = 0;
            nextCol = 0;
          } else {
            nextCol = 0;
          }
          break;
        case 'End':
          if (event.ctrlKey || event.metaKey) {
            nextRow = rowCount - 1;
            nextCol = colCount - 1;
          } else {
            nextCol = colCount - 1;
          }
          break;
        default:
          return;
      }

      if (nextRow !== row || nextCol !== col) {
        event.preventDefault();
        focusCell(nextRow, nextCol, container);
      }
    },
    [rowCount, colCount, focusCell]
  );

  const getCellTabIndex = useCallback(
    (rowIndex: number, colIndex: number): number =>
      activeCell.current.row === rowIndex && activeCell.current.col === colIndex ? 0 : -1,
    []
  );

  return { onKeyDown, getCellTabIndex };
}
