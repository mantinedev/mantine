import { getPrecision } from './get-precision';

describe('@mantine/core/Slider/get-precision', () => {
  it('returns correct precision based on given step value', () => {
    expect(getPrecision(0.1)).toBe(1);
    expect(getPrecision(0.01)).toBe(2);
    expect(getPrecision(0.001)).toBe(3);
    expect(getPrecision(1)).toBe(0);
    expect(getPrecision(10)).toBe(0);
    expect(getPrecision(NaN)).toBe(0);
  });
});
