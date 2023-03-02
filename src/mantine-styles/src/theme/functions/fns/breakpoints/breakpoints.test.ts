import { smallerThan, largerThan } from './breakpoints';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/styles/breakpoints', () => {
  it('returns correct max-width value', () => {
    expect(smallerThan(DEFAULT_THEME)('md')).toBe('@media (max-width: 61.9375em)');
    expect(smallerThan(DEFAULT_THEME)(700)).toBe('@media (max-width: 43.6875em)');
    expect(smallerThan(DEFAULT_THEME)('20rem')).toBe('@media (max-width: 19.9375em)');
  });

  it('returns correct min-width value', () => {
    expect(largerThan(DEFAULT_THEME)('md')).toBe('@media (min-width: 62em)');
    expect(largerThan(DEFAULT_THEME)(320)).toBe('@media (min-width: 20em)');
    expect(largerThan(DEFAULT_THEME)('20rem')).toBe('@media (min-width: 20em)');
  });
});
