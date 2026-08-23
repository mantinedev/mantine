export function isRenderableValue(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

interface GetCandlestickDomainInput {
  data: Record<string, any>[];
  openKey: string;
  highKey: string;
  lowKey: string;
  closeKey: string;
}

/**
 * Calculates an explicit y-axis domain padded by 5% of the range. Rows with missing or
 * non-finite values are ignored – `NaN` and `Infinity` are numbers, and letting either
 * reach the bounds produces a `NaN` domain that blanks the entire chart instead of just
 * the offending row. Bounds are reduced iteratively rather than spread into
 * `Math.min`/`Math.max`, which throws on large datasets.
 *
 * A row counts only when all four OHLC values are renderable, which is the same condition
 * the candle shape uses. Taking `low`/`high` independently would let a half-filled row
 * stretch the domain toward a candle that is never drawn, squashing the real ones.
 */
export function getCandlestickDomain({
  data,
  openKey,
  highKey,
  lowKey,
  closeKey,
}: GetCandlestickDomainInput): [number, number] | undefined {
  let dataMin = Infinity;
  let dataMax = -Infinity;

  for (const item of data) {
    const low = item[lowKey];
    const high = item[highKey];

    if (![item[openKey], high, low, item[closeKey]].every(isRenderableValue)) {
      continue;
    }

    if (low < dataMin) {
      dataMin = low;
    }

    if (high > dataMax) {
      dataMax = high;
    }
  }

  if (dataMin === Infinity || dataMax === -Infinity) {
    return undefined;
  }

  const padding = (dataMax - dataMin) * 0.05 || 1;

  return [dataMin - padding, dataMax + padding];
}
