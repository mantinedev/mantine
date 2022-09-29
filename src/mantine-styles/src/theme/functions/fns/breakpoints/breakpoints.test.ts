import { smallerThan, largerThan } from './breakpoints';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/styles/breakpoints', () => {
  it('returns correct max-width value', () => {
    expect(smallerThan(DEFAULT_THEME)('md')).toBe(
      `@media (max-width: ${DEFAULT_THEME.breakpoints.md - 1}px)`
    );
    expect(smallerThan(DEFAULT_THEME)(700)).toBe(`@media (max-width: ${699}px)`);
  });

  it('returns correct min-width value', () => {
    expect(largerThan(DEFAULT_THEME)('md')).toBe(
      `@media (min-width: ${DEFAULT_THEME.breakpoints.md}px)`
    );
    expect(largerThan(DEFAULT_THEME)(700)).toBe(`@media (min-width: ${700}px)`);
  });
});
