import { DEFAULT_THEME } from '../../../../MantineProvider';
import { rem } from '../../../../utils';
import { spacingResolver } from './spacing-resolver';

describe('@mantine/core/Box/spacing-resolver', () => {
  it('resolves number correctly', () => {
    expect(spacingResolver(10, DEFAULT_THEME)).toBe(rem(10));
    expect(spacingResolver(-10, DEFAULT_THEME)).toBe(rem(-10));
    expect(spacingResolver(1.5, DEFAULT_THEME)).toBe(rem(1.5));
    expect(spacingResolver(0, DEFAULT_THEME)).toBe(rem(0));
  });

  it('resolves theme value correctly', () => {
    expect(spacingResolver('xs', DEFAULT_THEME)).toBe('var(--mantine-spacing-xs)');
    expect(spacingResolver('-md', DEFAULT_THEME)).toBe('calc(var(--mantine-spacing-md) * -1)');
  });

  it('resolves string correctly', () => {
    expect(spacingResolver('10px', DEFAULT_THEME)).toBe(rem(10));
    expect(spacingResolver('-10px', DEFAULT_THEME)).toBe(rem(-10));
    expect(spacingResolver('1rem', DEFAULT_THEME)).toBe(rem('1rem'));
  });

  it('resolves empty strings correctly', () => {
    expect(spacingResolver('', DEFAULT_THEME)).toBe(rem(''));
    expect(spacingResolver(' 10px', DEFAULT_THEME)).toBe(` ${rem(10)}`);
  });
});
