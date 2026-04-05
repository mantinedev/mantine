import type { MatrixChartCell } from '../MatrixChart';

export function getDomain(data: MatrixChartCell[], domain?: [number, number]): [number, number] {
  if (Array.isArray(domain)) {
    return domain;
  }

  const values = data.map((cell) => cell.value).filter((v): v is number => v !== null);
  if (values.length === 0) {
    return [0, 0];
  }

  return [Math.min(...values), Math.max(...values)];
}
