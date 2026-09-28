import { getLastRadialStep, stepRadialValue } from './step-radial-value';

describe('@mantine/core/AngleSlider/step-radial-value', () => {
  it('returns the last grid step below 360', () => {
    expect(getLastRadialStep(1)).toBe(359);
    expect(getLastRadialStep(30)).toBe(330);
    expect(getLastRadialStep(7)).toBe(357);
    expect(getLastRadialStep(0.1)).toBe(359.9);
    expect(getLastRadialStep(50)).toBe(350);
  });

  it('steps forward and wraps to 0', () => {
    expect(stepRadialValue(100, 1, 1)).toBe(101);
    expect(stepRadialValue(359, 1, 1)).toBe(0);
    expect(stepRadialValue(359.5, 1, 1)).toBe(0);
    expect(stepRadialValue(330, 30, 1)).toBe(0);
    expect(stepRadialValue(350, 7, 1)).toBe(357);
    expect(stepRadialValue(357, 7, 1)).toBe(0);
    expect(stepRadialValue(0.2, 0.1, 1)).toBe(0.3);
    expect(stepRadialValue(359.9, 0.1, 1)).toBe(0);
    expect(stepRadialValue(350, 50, 1)).toBe(0);
  });

  it('steps backward and wraps to the last grid step', () => {
    expect(stepRadialValue(100, 1, -1)).toBe(99);
    expect(stepRadialValue(0, 1, -1)).toBe(359);
    expect(stepRadialValue(0, 30, -1)).toBe(330);
    expect(stepRadialValue(0, 7, -1)).toBe(357);
    expect(stepRadialValue(5, 7, -1)).toBe(357);
    expect(stepRadialValue(357, 7, -1)).toBe(350);
    expect(stepRadialValue(0, 0.1, -1)).toBe(359.9);
    expect(stepRadialValue(0, 50, -1)).toBe(350);
    expect(stepRadialValue(100, 50, -1)).toBe(50);
  });

  it('always returns values within [0, 360)', () => {
    [1, 7, 30, 50, 0.1].forEach((step) => {
      for (let value = 0; value < 360; value += 0.5) {
        [1, -1].forEach((direction) => {
          const result = stepRadialValue(value, step, direction as 1 | -1);
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThan(360);
        });
      }
    });
  });
});
