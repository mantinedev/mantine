import { getCandlestickDomain, isRenderableValue } from './get-candlestick-domain';

const call = (data: Record<string, any>[]) =>
  getCandlestickDomain({ data, lowKey: 'low', highKey: 'high' });

describe('@mantine/charts/getCandlestickDomain', () => {
  it('pads the domain by 5% of the range', () => {
    expect(call([{ low: 0, high: 100 }])).toStrictEqual([-5, 105]);
  });

  it('falls back to a padding of 1 when every value is equal', () => {
    expect(call([{ low: 10, high: 10 }])).toStrictEqual([9, 11]);
  });

  it('spans the lowest low and the highest high', () => {
    expect(
      call([
        { low: 20, high: 40 },
        { low: 10, high: 30 },
      ])
    ).toStrictEqual([8.5, 41.5]);
  });

  it('returns undefined when there is no data', () => {
    expect(call([])).toBeUndefined();
  });

  it('returns undefined when no row has usable values', () => {
    expect(call([{ low: null, high: undefined }])).toBeUndefined();
  });

  it('ignores NaN rows instead of poisoning the domain', () => {
    const domain = call([
      { low: 5, high: 20 },
      { low: NaN, high: NaN },
    ]);

    expect(domain).toStrictEqual([4.25, 20.75]);
    expect(domain!.every(Number.isFinite)).toBe(true);
  });

  it('ignores infinite rows instead of producing an infinite domain', () => {
    const domain = call([
      { low: 5, high: 20 },
      { low: -Infinity, high: Infinity },
    ]);

    expect(domain).toStrictEqual([4.25, 20.75]);
    expect(domain!.every(Number.isFinite)).toBe(true);
  });

  it('ignores non-numeric values', () => {
    expect(
      call([
        { low: '5', high: '20' },
        { low: 5, high: 20 },
      ])
    ).toStrictEqual([4.25, 20.75]);
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
