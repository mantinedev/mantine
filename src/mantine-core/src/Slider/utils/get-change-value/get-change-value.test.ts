import { getChangeValue } from './get-change-value';

describe('@mantine/core/Slider/get-change-value', () => {
  it('returns correct change value', () => {
    expect(getChangeValue({ value: 20, containerWidth: 200, min: 0, max: 100, step: 1 })).toBe(10);
    expect(getChangeValue({ value: 20, containerWidth: 800, min: 0, max: 100, step: 1 })).toBe(3);
    expect(getChangeValue({ value: 123, containerWidth: 800, min: 0, max: 100, step: 10 })).toBe(
      20
    );
    expect(getChangeValue({ value: 574, containerWidth: 800, min: 0, max: 100, step: 40 })).toBe(
      80
    );
  });

  it('rounds according to passed precision', () => {
    expect(getChangeValue({ value: 30, containerWidth: 100, min: 0, max: 1, step: 0.1 })).not.toBe(
      0.3
    );
    expect(
      getChangeValue({ value: 30, containerWidth: 100, min: 0, max: 1, step: 0.1, precision: 1 })
    ).toBe(0.3);
  });
});
