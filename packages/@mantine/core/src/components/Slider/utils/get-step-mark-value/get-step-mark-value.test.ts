import {
  getFirstMarkValue,
  getLastMarkValue,
  getNextMarkValue,
  getPreviousMarkValue,
} from './get-step-mark-value';

describe('@mantine/core/Slider/get-step-mark-value', () => {
  it('returns first mark value', () => {
    expect(getFirstMarkValue([{ value: 1 }, { value: 2 }])).toBe(1);
    expect(getFirstMarkValue([{ value: 1 }])).toBe(1);
    expect(getFirstMarkValue([])).toBe(0);
  });

  it('returns last mark value', () => {
    expect(getLastMarkValue([{ value: 1 }, { value: 2 }])).toBe(2);
    expect(getLastMarkValue([{ value: 1 }])).toBe(1);
    expect(getLastMarkValue([])).toBe(100);
  });

  it('returns next mark value', () => {
    expect(getNextMarkValue(1, [{ value: 1 }, { value: 2 }])).toBe(2);
    expect(getNextMarkValue(1, [{ value: 2 }, { value: 3 }])).toBe(2);
    expect(getNextMarkValue(1, [{ value: 0 }, { value: 2 }])).toBe(2);
    expect(getNextMarkValue(1, [{ value: 0 }, { value: 1 }])).toBe(1);
    expect(getNextMarkValue(1, [{ value: 1 }])).toBe(1);
    expect(getNextMarkValue(1, [])).toBe(1);
  });

  it('returns previous mark value', () => {
    expect(getPreviousMarkValue(1, [{ value: 1 }, { value: 2 }])).toBe(1);
    expect(getPreviousMarkValue(1, [{ value: 2 }, { value: 3 }])).toBe(1);
    expect(getPreviousMarkValue(1, [{ value: 0 }, { value: 2 }])).toBe(0);
    expect(getPreviousMarkValue(1, [{ value: 0 }, { value: 1 }])).toBe(0);
    expect(getPreviousMarkValue(1, [{ value: 1 }])).toBe(1);
    expect(getPreviousMarkValue(1, [])).toBe(1);
  });
});
