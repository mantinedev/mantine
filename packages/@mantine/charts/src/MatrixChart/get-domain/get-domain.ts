import type { MatrixChartCell } from '../MatrixChart';

/**
 * Calculates the value domain used for color interpolation. Rows with missing or
 * non-finite values are ignored – `NaN` and `Infinity` are numbers, and letting either
 * reach the bounds produces a `NaN` domain, which resolves every cell color to
 * `undefined` and paints the whole matrix with the SVG default fill instead of just
 * skipping the offending cell. Bounds are reduced iteratively rather than spread into
 * `Math.min`/`Math.max`, which throws on large matrices.
 */
export function getDomain(data: MatrixChartCell[], domain?: [number, number]): [number, number] {
  if (Array.isArray(domain)) {
    return domain;
  }

  let min = Infinity;
  let max = -Infinity;

  for (const cell of data) {
    const value = cell.value;

    if (typeof value === 'number' && Number.isFinite(value)) {
      if (value < min) {
        min = value;
      }

      if (value > max) {
        max = value;
      }
    }
  }

  if (min === Infinity) {
    return [0, 0];
  }

  return [min, max];
}
