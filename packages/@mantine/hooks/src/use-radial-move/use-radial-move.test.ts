import { normalizeRadialValue } from './use-radial-move';

describe('@mantine/hooks/use-radial-move', () => {
  it('rounds value to the nearest step', () => {
    expect(normalizeRadialValue(10.2, 1)).toBe(10);
    expect(normalizeRadialValue(10.6, 1)).toBe(11);
    expect(normalizeRadialValue(31, 30)).toBe(30);
    expect(normalizeRadialValue(46, 30)).toBe(60);
    expect(normalizeRadialValue(90, 1)).toBe(90);
  });

  it('wraps 360 to 0', () => {
    expect(normalizeRadialValue(360, 1)).toBe(0);
    expect(normalizeRadialValue(359.6, 1)).toBe(0);
    expect(normalizeRadialValue(350, 30)).toBe(0);
    expect(normalizeRadialValue(0, 30)).toBe(0);
  });

  it('supports decimal steps', () => {
    expect(normalizeRadialValue(0.2 + 0.1, 0.1)).toBe(0.3);
    expect(normalizeRadialValue(10.24, 0.1)).toBe(10.2);
    expect(normalizeRadialValue(359.96, 0.1)).toBe(0);
  });

  it('supports steps that do not divide 360', () => {
    expect(normalizeRadialValue(10, 7)).toBe(7);
    expect(normalizeRadialValue(11, 7)).toBe(14);
    expect(normalizeRadialValue(357, 7)).toBe(357);
    expect(normalizeRadialValue(359, 7)).toBe(0);
  });

  it('rounds to 0 when 360 is the nearest step on the circle', () => {
    expect(normalizeRadialValue(356, 50)).toBe(0);
    expect(normalizeRadialValue(355, 50)).toBe(0);
    expect(normalizeRadialValue(354, 50)).toBe(350);
  });
});
