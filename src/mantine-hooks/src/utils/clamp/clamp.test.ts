import { clamp } from './clamp';

describe('@mantine/hooks/clamp', () => {
  it('clamps given value', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-10, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });

  it('correctly works with undefined min and max', () => {
    expect(clamp(10, undefined, undefined)).toBe(10);
    expect(clamp(10, undefined, 5)).toBe(5);
    expect(clamp(10, 0, undefined)).toBe(10);

    expect(clamp(10, 15, undefined)).toBe(15);
    expect(clamp(10, undefined, 5)).toBe(5);
  });
});
