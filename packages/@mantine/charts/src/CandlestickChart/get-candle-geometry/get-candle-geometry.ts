import { isRenderableValue } from '../get-candlestick-domain/get-candlestick-domain';

export interface GetCandleGeometryInput {
  /** Left edge of the slot recharts allocated to the candle */
  x: number;

  /** Top edge of the slot, corresponding to `high` */
  y: number;

  /** Width of the slot */
  width: number;

  /** Height of the slot, spanning `high` to `low` */
  height: number;

  open: unknown;
  high: unknown;
  low: unknown;
  close: unknown;
}

export interface CandleGeometry {
  /** Horizontal center of the slot, where the wick is drawn */
  centerX: number;

  /** Top of the open/close body */
  bodyY: number;

  /** Height of the open/close body, never less than 1px so a doji stays visible */
  bodyHeight: number;

  /** `true` when the candle closed at or above its open */
  isUp: boolean;
}

/**
 * Maps one OHLC row onto the slot recharts allocated for it. Returns `null` when the row
 * cannot be drawn – the same condition `getCandlestickDomain` uses to decide which rows
 * contribute to the axis, so the two never disagree about what is on the chart.
 */
export function getCandleGeometry({
  x,
  y,
  width,
  height,
  open,
  high,
  low,
  close,
}: GetCandleGeometryInput): CandleGeometry | null {
  if (![open, high, low, close].every(isRenderableValue)) {
    return null;
  }

  const range = (high as number) - (low as number);
  const ratio = range === 0 ? 0 : height / range;
  const openY = y + ((high as number) - (open as number)) * ratio;
  const closeY = y + ((high as number) - (close as number)) * ratio;

  return {
    centerX: x + width / 2,
    bodyY: Math.min(openY, closeY),
    bodyHeight: Math.max(Math.abs(closeY - openY), 1),
    isUp: (close as number) >= (open as number),
  };
}
