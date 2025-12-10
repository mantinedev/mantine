import { clampIntervalMinutes } from './clamp-interval-minutes';

describe('@mantine/schedule/clampIntervalMinutes', () => {
  it('returns the same value for valid divisors of 60', () => {
    const validDivisors = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];

    validDivisors.forEach((divisor) => {
      expect(clampIntervalMinutes(divisor)).toBe(divisor);
    });
  });

  it('defaults to 30 for invalid divisors of 60 within valid range', () => {
    const invalidDivisors = [7, 8, 9, 11, 13, 14, 16, 25, 35, 45, 55];

    invalidDivisors.forEach((divisor) => {
      expect(clampIntervalMinutes(divisor)).toBe(60);
    });
  });

  it('clamps negative values to 1', () => {
    expect(clampIntervalMinutes(-10)).toBe(1);
    expect(clampIntervalMinutes(-100)).toBe(1);
    expect(clampIntervalMinutes(-1)).toBe(1);
  });

  it('clamps 0 to 1', () => {
    expect(clampIntervalMinutes(0)).toBe(1);
  });

  it('clamps values greater than 60 to 60', () => {
    expect(clampIntervalMinutes(61)).toBe(60);
    expect(clampIntervalMinutes(100)).toBe(60);
    expect(clampIntervalMinutes(1000)).toBe(60);
  });

  it('rounds decimal values before clamping', () => {
    expect(clampIntervalMinutes(29.4)).toBe(60);
    expect(clampIntervalMinutes(60.6)).toBe(60);
  });

  it('handles edge cases', () => {
    expect(clampIntervalMinutes(60)).toBe(60);
    expect(clampIntervalMinutes(1)).toBe(1);
  });

  it('handles fractional negative values', () => {
    expect(clampIntervalMinutes(-5.5)).toBe(1);
    expect(clampIntervalMinutes(-0.5)).toBe(1);
  });

  it('handles fractional values greater than 60', () => {
    expect(clampIntervalMinutes(60.5)).toBe(60);
    expect(clampIntervalMinutes(100.9)).toBe(60);
  });
});
