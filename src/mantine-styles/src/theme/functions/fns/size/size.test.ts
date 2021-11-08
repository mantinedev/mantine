import { size } from './size';

const sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

describe('@mantine/styles/size', () => {
  it('returns given value if value type is number', () => {
    expect(size({ size: 20, sizes })).toBe(20);
    expect(size({ size: 0, sizes })).toBe(0);
    expect(size({ size: -20, sizes })).toBe(-20);
  });

  it('returns correct size from given sizes object', () => {
    expect(size({ size: 'xs', sizes })).toBe(sizes.xs);
    expect(size({ size: 'sm', sizes })).toBe(sizes.sm);
    expect(size({ size: 'md', sizes })).toBe(sizes.md);
    expect(size({ size: 'lg', sizes })).toBe(sizes.lg);
    expect(size({ size: 'xl', sizes })).toBe(sizes.xl);
  });

  it('returns default size if size was not given', () => {
    expect(size({ size: null, sizes })).toBe(sizes.md);
  });
});
