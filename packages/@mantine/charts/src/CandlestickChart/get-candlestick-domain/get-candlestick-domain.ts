export function isRenderableValue(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

interface GetCandlestickDomainInput {
  data: Record<string, any>[];
  lowKey: string;
  highKey: string;
}

/**
 * Calculates an explicit y-axis domain padded by 5% of the range. Rows with missing or
 * non-finite values are ignored – `NaN` and `Infinity` are numbers, and letting either
 * reach the bounds produces a `NaN` domain that blanks the entire chart instead of just
 * the offending row. Bounds are reduced iteratively rather than spread into
 * `Math.min`/`Math.max`, which throws on large datasets.
 */
export function getCandlestickDomain({
  data,
  lowKey,
  highKey,
}: GetCandlestickDomainInput): [number, number] | undefined {
  let dataMin = Infinity;
  let dataMax = -Infinity;

  for (const item of data) {
    const low = item[lowKey];
    const high = item[highKey];

    if (isRenderableValue(low) && low < dataMin) {
      dataMin = low;
    }

    if (isRenderableValue(high) && high > dataMax) {
      dataMax = high;
    }
  }

  if (dataMin === Infinity || dataMax === -Infinity) {
    return undefined;
  }

  const padding = (dataMax - dataMin) * 0.05 || 1;

  return [dataMin - padding, dataMax + padding];
}
