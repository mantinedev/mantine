import { themeColor } from './theme-color';
import { DEFAULT_THEME } from '../../../default-theme';

const getThemeColor = themeColor(DEFAULT_THEME);

describe('@mantine/styles/theme-color', () => {
  it('returns correct shade of given color', () => {
    expect(getThemeColor('red', 3)).toBe(DEFAULT_THEME.colors.red[3]);
  });

  it('returns primary color shade if color was not provided', () => {
    expect(getThemeColor(null, 5)).toBe(DEFAULT_THEME.colors[DEFAULT_THEME.primaryColor][5]);
  });

  it('allows to disable primary color fallback', () => {
    expect(getThemeColor('#783298', 5, false)).toBe('#783298');
  });

  it('allows to get color by index', () => {
    expect(getThemeColor('red.1')).toBe(DEFAULT_THEME.colors.red[1]);
    expect(getThemeColor('red.1', 5)).toBe(DEFAULT_THEME.colors.red[1]);
    expect(getThemeColor('red.11', null, false)).toBe('red.11');
  });

  it('returns color with primary shade if shade is not specified', () => {
    expect(getThemeColor('orange')).toBe(DEFAULT_THEME.colors.orange[6]);
  });
});
