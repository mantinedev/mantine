import { getCandleGeometry } from './get-candle-geometry';

// Recharts allocates a 20px wide, 100px tall slot spanning high=130 down to low=90, so one
// price unit is 2.5px and `y` (0) is the high.
const slot = { x: 10, y: 0, width: 20, height: 100 };

const call = (ohlc: { open: unknown; high: unknown; low: unknown; close: unknown }) =>
  getCandleGeometry({ ...slot, ...ohlc });

describe('@mantine/charts/getCandleGeometry', () => {
  it('centers the wick in the slot', () => {
    expect(call({ open: 100, high: 130, low: 90, close: 120 })!.centerX).toBe(20);
  });

  it('places the body between open and close for a rising candle', () => {
    const geometry = call({ open: 100, high: 130, low: 90, close: 120 })!;

    // close 120 is 10 units below high -> 25px; open 100 is 30 units below -> 75px
    expect(geometry.bodyY).toBe(25);
    expect(geometry.bodyHeight).toBe(50);
    expect(geometry.isUp).toBe(true);
  });

  it('places the body between open and close for a falling candle', () => {
    const geometry = call({ open: 120, high: 130, low: 90, close: 100 })!;

    expect(geometry.bodyY).toBe(25);
    expect(geometry.bodyHeight).toBe(50);
    expect(geometry.isUp).toBe(false);
  });

  it('treats a flat candle as rising', () => {
    expect(call({ open: 110, high: 130, low: 90, close: 110 })!.isUp).toBe(true);
  });

  it('keeps a doji visible with a minimum body height', () => {
    const geometry = call({ open: 110, high: 130, low: 90, close: 110 })!;

    expect(geometry.bodyHeight).toBe(1);
  });

  it('does not divide by zero when high equals low', () => {
    const geometry = call({ open: 100, high: 100, low: 100, close: 100 })!;

    expect(geometry.bodyY).toBe(0);
    expect(geometry.bodyHeight).toBe(1);
    expect(Number.isFinite(geometry.bodyY)).toBe(true);
  });

  it.each([
    ['open', { open: null, high: 130, low: 90, close: 120 }],
    ['high', { open: 100, high: undefined, low: 90, close: 120 }],
    ['low', { open: 100, high: 130, low: NaN, close: 120 }],
    ['close', { open: 100, high: 130, low: 90, close: Infinity }],
    ['a string value', { open: '100', high: 130, low: 90, close: 120 }],
  ])('returns null when %s cannot be drawn', (_label, ohlc) => {
    expect(call(ohlc)).toBeNull();
  });
});
