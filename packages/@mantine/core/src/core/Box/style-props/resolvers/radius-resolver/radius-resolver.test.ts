import { DEFAULT_THEME } from '../../../../MantineProvider';
import { rem } from '../../../../utils';
import { radiusResolver } from './radius-resolver';

describe('@mantine/core/Box/radius-resolver', () => {
  it('resolves theme radius', () => {
    expect(radiusResolver('xs', DEFAULT_THEME)).toBe('var(--mantine-radius-xs)');
    expect(radiusResolver('sm', DEFAULT_THEME)).toBe('var(--mantine-radius-sm)');
    expect(radiusResolver('md', DEFAULT_THEME)).toBe('var(--mantine-radius-md)');
    expect(radiusResolver('lg', DEFAULT_THEME)).toBe('var(--mantine-radius-lg)');
    expect(radiusResolver('xl', DEFAULT_THEME)).toBe('var(--mantine-radius-xl)');
  });

  it('resolves number radius', () => {
    expect(radiusResolver(12, DEFAULT_THEME)).toBe('calc(0.75rem * var(--mantine-scale))');
    expect(radiusResolver(32, DEFAULT_THEME)).toBe('calc(2rem * var(--mantine-scale))');
  });

  it('resolves string radius', () => {
    expect(radiusResolver('12px', DEFAULT_THEME)).toBe(rem(12));
    expect(radiusResolver('1em', DEFAULT_THEME)).toBe(rem('1em'));
    expect(radiusResolver('1rem', DEFAULT_THEME)).toBe(rem('1rem'));
  });
});
