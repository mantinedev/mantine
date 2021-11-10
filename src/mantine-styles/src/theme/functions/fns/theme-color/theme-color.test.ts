import { themeColor } from './theme-color';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/styles/theme-color', () => {
  it('returns correct shade of given color', () => {
    expect(themeColor(DEFAULT_THEME)('red', 3)).toBe(DEFAULT_THEME.colors.red[3]);
  });

  it('returns primary color shade if color was not provided', () => {
    expect(themeColor(DEFAULT_THEME)(null, 5)).toBe(
      DEFAULT_THEME.colors[DEFAULT_THEME.primaryColor][5]
    );
  });
});
