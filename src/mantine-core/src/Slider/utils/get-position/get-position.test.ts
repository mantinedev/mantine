import { getPosition } from './get-position';

describe('@mantine/core/Slider/get-position', () => {
  it('returns correct position value', () => {
    expect(getPosition({ value: 40, min: 0, max: 100 })).toBe(40);
    expect(getPosition({ value: 820, min: 100, max: 1000 })).toBe(80);
  });

  it('clamps values to min and max', () => {
    expect(getPosition({ value: 20, min: 100, max: 400 })).toBe(0);
    expect(getPosition({ value: 500, min: 100, max: 400 })).toBe(100);
  });
});
