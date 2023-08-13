import { px } from './px';

describe('@mantine/styles/px', () => {
  it('converts rem string to px number', () => {
    expect(px('1rem')).toBe(16);
    expect(px('1.25rem')).toBe(20);
  });

  it('converts px string to px number', () => {
    expect(px('12px')).toBe(12);
  });

  it('returns number if function received number as an argument', () => {
    expect(px(16)).toBe(16);
    expect(px('16')).toBe(16);
  });

  it('returns NaN if value cannot be parsed', () => {
    expect(px('12p')).toBe(NaN);
    expect(px('12re')).toBe(NaN);
    expect(px('12%')).toBe(NaN);
    expect(px('12vh')).toBe(NaN);
    expect(px({})).toBe(NaN);
    expect(px([])).toBe(NaN);
    expect(px(null)).toBe(NaN);
    expect(px(undefined)).toBe(NaN);
  });
});
