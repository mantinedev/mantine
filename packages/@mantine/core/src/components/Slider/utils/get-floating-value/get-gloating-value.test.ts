import { getFloatingValue } from './get-gloating-value';

describe('@mantine/core/Slider/get-floating-value', () => {
  it('returns floating value with given precision', () => {
    expect(getFloatingValue(0.123456, 2)).toBe(0.12);
    expect(getFloatingValue(0.123456, 4)).toBe(0.1235);
    expect(getFloatingValue(0.123456, 6)).toBe(0.123456);
    expect(getFloatingValue(1.123456, 0)).toBe(1);
  });
});
