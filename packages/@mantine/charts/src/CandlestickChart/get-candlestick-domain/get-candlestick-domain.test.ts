import { getCandlestickDomain, isRenderableValue } from './get-candlestick-domain';

const call = (data: Record<string, any>[]) =>
  getCandlestickDomain({
    data,
    openKey: 'open',
    highKey: 'high',
    lowKey: 'low',
    closeKey: 'close',
  });

/** A complete OHLC row – the domain only counts rows the candle shape can actually draw */
const row = (low: number | any, high: number | any, rest: Record<string, any> = {}) => ({
  low,
  high,
  open: low,
  close: high,
  ...rest,
});

describe('@mantine/charts/getCandlestickDomain', () => {
  it('pads the domain by 5% of the range', () => {
    expect(call([row(0, 100)])).toStrictEqual([-5, 105]);
  });

  it('falls back to a padding of 1 when every value is equal', () => {
    expect(call([row(10, 10)])).toStrictEqual([9, 11]);
  });

  it('spans the lowest low and the highest high', () => {
    expect(call([row(20, 40), row(10, 30)])).toStrictEqual([8.5, 41.5]);
  });

  it('returns undefined when there is no data', () => {
    expect(call([])).toBeUndefined();
  });

  it('returns undefined when no row has usable values', () => {
    expect(call([row(null, undefined)])).toBeUndefined();
  });

  it('ignores NaN rows instead of poisoning the domain', () => {
    const domain = call([row(5, 20), row(NaN, NaN)]);

    expect(domain).toStrictEqual([4.25, 20.75]);
    expect(domain!.every(Number.isFinite)).toBe(true);
  });

  it('ignores infinite rows instead of producing an infinite domain', () => {
    const domain = call([row(5, 20), row(-Infinity, Infinity)]);

    expect(domain).toStrictEqual([4.25, 20.75]);
    expect(domain!.every(Number.isFinite)).toBe(true);
  });

  it('ignores non-numeric values', () => {
    expect(call([row('5', '20'), row(5, 20)])).toStrictEqual([4.25, 20.75]);
  });

  it('ignores rows the candle renderer would skip, even when low and high are valid', () => {
    // `{ low: 0 }` is a perfectly good number, but with no open/close the candle is never
    // drawn - counting it would drag the domain to zero and squash every real candle
    const domain = call([row(100, 120), { low: 0, high: 130, open: null, close: undefined }]);

    expect(domain).toStrictEqual([99, 121]);
  });

  it('isRenderableValue rejects everything that cannot be drawn', () => {
    expect(isRenderableValue(5)).toBe(true);
    expect(isRenderableValue(0)).toBe(true);
    expect(isRenderableValue(-3.5)).toBe(true);
    expect(isRenderableValue(NaN)).toBe(false);
    expect(isRenderableValue(Infinity)).toBe(false);
    expect(isRenderableValue(-Infinity)).toBe(false);
    expect(isRenderableValue('5')).toBe(false);
    expect(isRenderableValue(null)).toBe(false);
    expect(isRenderableValue(undefined)).toBe(false);
  });
});
