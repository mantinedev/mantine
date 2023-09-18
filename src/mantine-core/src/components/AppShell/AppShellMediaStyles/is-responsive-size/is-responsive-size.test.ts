import { isResponsiveSize } from './is-responsive-size';

describe('@mantine/core/AppShell/is-responsive-size', () => {
  it('detects responsive value', () => {
    expect(isResponsiveSize({ sm: 1 })).toBe(true);
    expect(isResponsiveSize({ md: 'xs', xl: 1 })).toBe(true);
    expect(isResponsiveSize({ base: '0rem', md: 1 })).toBe(true);
  });

  it('detects non-responsive value', () => {
    expect(isResponsiveSize(1)).toBe(false);
    expect(isResponsiveSize({ base: 1 })).toBe(false);
    expect(isResponsiveSize('xs')).toBe(false);
    expect(isResponsiveSize('0rem')).toBe(false);
  });
});
