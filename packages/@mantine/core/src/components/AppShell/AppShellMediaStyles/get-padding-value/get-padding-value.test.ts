import { getPaddingValue } from './get-padding-value';

describe('@mantine/core/AppShellMediaStyles/get-padding-value', () => {
  it('returns 0px for 0', () => {
    expect(getPaddingValue(0)).toBe('0px');
    expect(getPaddingValue('0')).toBe('0px');
  });

  it('returns spacing value for number', () => {
    expect(getPaddingValue(1)).toBe('calc(0.0625rem * var(--mantine-scale))');
    expect(getPaddingValue('1')).toBe('calc(0.0625rem * var(--mantine-scale))');
  });

  it('returns spacing value for string', () => {
    expect(getPaddingValue('xs')).toBe('var(--mantine-spacing-xs)');
    expect(getPaddingValue('0rem')).toBe('0rem');
  });
});
