import { tintColors } from './tint-colors';

const tuple = Array.from({ length: 10 }, (_, i) => `oklch(0.${9 - i} 0 0)`) as any;

describe('tintColors', () => {
  it('returns a 10-item tuple of color-mix values', () => {
    const result = tintColors(tuple, 'blue');
    expect(result).toHaveLength(10);
    expect(result[5]).toBe('color-mix(in oklab, oklch(0.4 0 0), blue 10%)');
  });

  it('weights mid shades heavier than extremes', () => {
    const result = tintColors(tuple, 'blue', 0.1);
    expect(result[0]).toBe('color-mix(in oklab, oklch(0.9 0 0), blue 5%)');
    expect(result[4]).toBe('color-mix(in oklab, oklch(0.5 0 0), blue 10%)');
  });

  it('returns the original shades when strength is 0', () => {
    expect(tintColors(tuple, 'blue', 0)).toEqual(tuple);
  });
});
