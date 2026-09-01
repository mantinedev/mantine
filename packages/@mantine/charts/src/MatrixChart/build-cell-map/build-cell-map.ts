import type { MatrixChartCell } from '../MatrixChart';

export function getCellKey(x: string, y: string): string {
  return `${x.length}:${x}\0${y}`;
}

export function buildCellMap(data: MatrixChartCell[]): Map<string, MatrixChartCell> {
  const map = new Map<string, MatrixChartCell>();
  data.forEach((cell) => {
    map.set(getCellKey(cell.x, cell.y), cell);
  });
  return map;
}
