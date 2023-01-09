import { DEFAULT_THEME, rem } from '@mantine/styles';
import { getSpacingValue } from './get-spacing-value';

describe('@mantine/core/Box/get-spacing-value', () => {
  it('returns correct value for spacing from theme', () => {
    expect(getSpacingValue('xs', DEFAULT_THEME)).toBe(DEFAULT_THEME.spacing.xs);
    expect(getSpacingValue('lg', DEFAULT_THEME)).toBe(DEFAULT_THEME.spacing.lg);
  });

  it('returns correct value for negative spacing from theme', () => {
    expect(getSpacingValue('-xs', DEFAULT_THEME)).toBe(`calc(${DEFAULT_THEME.spacing.xs} * -1)`);
    expect(getSpacingValue('-lg', DEFAULT_THEME)).toBe(`calc(${DEFAULT_THEME.spacing.lg} * -1)`);
  });

  it('returns correct value for values that are not part of theme', () => {
    expect(getSpacingValue(10, DEFAULT_THEME)).toBe(rem(10));
    expect(getSpacingValue('15rem', DEFAULT_THEME)).toBe('15rem');
  });
});
