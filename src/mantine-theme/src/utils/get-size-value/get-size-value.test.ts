import { getSizeValue } from './get-size-value';

const sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

describe('@mantine/theme/get-size-value', () => {
  it('returns given value if value type is number', () => {
    expect(getSizeValue({ size: 20, sizes })).toBe(20);
    expect(getSizeValue({ size: 0, sizes })).toBe(0);
    expect(getSizeValue({ size: -20, sizes })).toBe(-20);
  });

  it('returns correct size from given sizes object', () => {
    expect(getSizeValue({ size: 'xs', sizes })).toBe(sizes.xs);
    expect(getSizeValue({ size: 'sm', sizes })).toBe(sizes.sm);
    expect(getSizeValue({ size: 'md', sizes })).toBe(sizes.md);
    expect(getSizeValue({ size: 'lg', sizes })).toBe(sizes.lg);
    expect(getSizeValue({ size: 'xl', sizes })).toBe(sizes.xl);
  });

  it('returns default size if size was not given', () => {
    expect(getSizeValue({ size: null, sizes })).toBe(sizes.md);
    expect(getSizeValue({ size: null, sizes, defaultSize: 'xs' })).toBe(sizes.xs);
  });
});
