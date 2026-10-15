import type { MatrixChartCell } from '../MatrixChart';

export function getDataRange(cells: (MatrixChartCell | undefined)[]): [number, number] | null {
  let min = Infinity;
  let max = -Infinity;

  for (const cell of cells) {
    const value = cell?.value;

    if (typeof value === 'number' && Number.isFinite(value)) {
      if (value < min) {
        min = value;
      }

      if (value > max) {
        max = value;
      }
    }
  }

  return min === Infinity ? null : [min, max];
}

export function getDomain(
  dataRange: [number, number] | null,
  domain?: [number, number]
): [number, number] {
  if (Array.isArray(domain) && Number.isFinite(domain[0]) && Number.isFinite(domain[1])) {
    return domain;
  }

  return dataRange ?? [0, 0];
}
