import { hasResponsiveStyles } from './has-responsive-styles';

describe('@mantine/core/Box/has-responsive-styles', () => {
  it('returns true if style prop is object with breakpoint key', () => {
    expect(hasResponsiveStyles({ base: 1, xs: 2 })).toBe(true);
    expect(hasResponsiveStyles({ xs: 2, sm: 3 })).toBe(true);
  });

  it('returns false if style prop is object with base key', () => {
    expect(hasResponsiveStyles({ base: 1 })).toBe(false);
  });

  it('returns false if style prop is not object', () => {
    expect(hasResponsiveStyles(1)).toBe(false);
    expect(hasResponsiveStyles('1')).toBe(false);
    expect(hasResponsiveStyles(null)).toBe(false);
  });
});
