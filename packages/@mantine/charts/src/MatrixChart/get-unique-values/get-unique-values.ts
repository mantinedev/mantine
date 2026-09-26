import type { MatrixChartCell } from '../MatrixChart';

export function getUniqueValues(
  data: MatrixChartCell[],
  axis: 'x' | 'y',
  labels?: string[]
): string[] {
  if (labels) {
    return labels;
  }

  const seen = new Set<string>();
  const result: string[] = [];
  data.forEach((cell) => {
    const value = cell[axis];
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  });
  return result;
}
