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
 * reach `Math.min`/`Math.max` produces a `NaN` domain that blanks the entire chart
 * instead of just the offending row.
 */
export function getCandlestickDomain({
  data,
  lowKey,
  highKey,
}: GetCandlestickDomainInput): [number, number] | undefined {
  const lows = data.map((item) => item[lowKey]).filter(isRenderableValue);
  const highs = data.map((item) => item[highKey]).filter(isRenderableValue);

  if (lows.length === 0 || highs.length === 0) {
    return undefined;
  }

  const dataMin = Math.min(...lows);
  const dataMax = Math.max(...highs);
  const padding = (dataMax - dataMin) * 0.05 || 1;

  return [dataMin - padding, dataMax + padding];
}
