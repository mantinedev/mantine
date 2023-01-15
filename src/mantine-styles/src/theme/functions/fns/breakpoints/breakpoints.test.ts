import { smallerThan, largerThan } from './breakpoints';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/styles/breakpoints', () => {
  it('returns correct max-width value', () => {
    expect(smallerThan(DEFAULT_THEME)('md')).toBe('@media (max-width: 61.9375rem)');
    expect(smallerThan(DEFAULT_THEME)(700)).toBe('@media (max-width: 43.6875rem)');
  });

  it('returns correct min-width value', () => {
    expect(largerThan(DEFAULT_THEME)('md')).toBe('@media (min-width: 62rem)');
    expect(largerThan(DEFAULT_THEME)(320)).toBe('@media (min-width: 20rem)');
  });
});
