import { normalizeRadialValue } from './use-radial-move';

describe('@mantine/hooks/use-radial-move', () => {
  it('normalizeRadialValue rounds to the nearest step', () => {
    expect(normalizeRadialValue(11, 10)).toBe(10);
    expect(normalizeRadialValue(14, 10)).toBe(10);
    expect(normalizeRadialValue(16, 10)).toBe(20);
    expect(normalizeRadialValue(0.4, 1)).toBe(0);
    expect(normalizeRadialValue(0.6, 1)).toBe(1);
  });

  it('normalizeRadialValue never returns a value outside 0-360', () => {
    expect(normalizeRadialValue(360, 7)).toBe(357);
    expect(normalizeRadialValue(360, 11)).toBe(0);
    expect(normalizeRadialValue(360, 100)).toBe(0);

    for (let step = 1; step <= 180; step += 1) {
      const value = normalizeRadialValue(360, step);
      expect(value).toBeLessThanOrEqual(360);
      expect(value).toBeGreaterThanOrEqual(0);
    }
  });

  it('normalizeRadialValue keeps exact multiples and wraps 360 to 0', () => {
    expect(normalizeRadialValue(0, 10)).toBe(0);
    expect(normalizeRadialValue(90, 10)).toBe(90);
    expect(normalizeRadialValue(359, 1)).toBe(359);
    expect(normalizeRadialValue(360, 10)).toBe(0);
    expect(normalizeRadialValue(360, 1)).toBe(0);
  });

  it('normalizeRadialValue clamps values outside the 0-360 range', () => {
    expect(normalizeRadialValue(-20, 10)).toBe(0);
    expect(normalizeRadialValue(400, 10)).toBe(0);
  });

  it('normalizeRadialValue keeps the precision of a fractional step', () => {
    expect(normalizeRadialValue(0.07, 0.01)).toBe(0.07);
    expect(normalizeRadialValue(12.4, 0.5)).toBe(12.5);
    expect(normalizeRadialValue(1.26, 0.25)).toBe(1.25);
  });
});
