import { DEFAULT_THEME } from '../../../../MantineProvider';
import { rem } from '../../../../utils';
import { fontSizeResolver } from './font-size-resolver';

describe('@mantine/core/Box/font-size-resolver', () => {
  it('resolves theme font size', () => {
    expect(fontSizeResolver('xs', DEFAULT_THEME)).toBe('var(--mantine-font-size-xs)');
    expect(fontSizeResolver('sm', DEFAULT_THEME)).toBe('var(--mantine-font-size-sm)');
    expect(fontSizeResolver('md', DEFAULT_THEME)).toBe('var(--mantine-font-size-md)');
    expect(fontSizeResolver('lg', DEFAULT_THEME)).toBe('var(--mantine-font-size-lg)');
    expect(fontSizeResolver('xl', DEFAULT_THEME)).toBe('var(--mantine-font-size-xl)');
  });

  it('resolves number font size', () => {
    expect(fontSizeResolver(12, DEFAULT_THEME)).toBe('calc(0.75rem * var(--mantine-scale))');
    expect(fontSizeResolver(32, DEFAULT_THEME)).toBe('calc(2rem * var(--mantine-scale))');
  });

  it('resolves string font size', () => {
    expect(fontSizeResolver('12px', DEFAULT_THEME)).toBe(rem(12));
    expect(fontSizeResolver('1em', DEFAULT_THEME)).toBe(rem('1em'));
    expect(fontSizeResolver('1rem', DEFAULT_THEME)).toBe(rem('1rem'));
  });
});
