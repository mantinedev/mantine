import { clamp } from './clamp';

describe('@mantine/hooks/clamp', () => {
  it('clamps given value', () => {
    expect(clamp({ value: 10, min: 0, max: 5 })).toBe(5);
    expect(clamp({ value: -10, min: 0, max: 5 })).toBe(0);
    expect(clamp({ value: 3, min: 0, max: 5 })).toBe(3);
  });
});
