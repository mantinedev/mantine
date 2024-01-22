import { DEFAULT_THEME } from '../../default-theme';
import { getPrimaryShade } from './get-primary-shade';

describe('@mantine/core/get-primary-shade', () => {
  it('returns correct primary shade', () => {
    expect(getPrimaryShade(DEFAULT_THEME, 'dark')).toBe((DEFAULT_THEME.primaryShade as any).dark);
    expect(getPrimaryShade(DEFAULT_THEME, 'light')).toBe((DEFAULT_THEME.primaryShade as any).light);
    expect(getPrimaryShade(DEFAULT_THEME, 'auto')).toBe((DEFAULT_THEME.primaryShade as any).light);
  });
});
