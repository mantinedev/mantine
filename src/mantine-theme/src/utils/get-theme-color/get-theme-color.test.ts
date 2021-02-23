import { getThemeColor } from './get-theme-color';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/theme/get-theme-color', () => {
  it('returns correct shade of given color', () => {
    expect(getThemeColor({ theme: DEFAULT_THEME, color: 'red', shade: 3 })).toBe(
      DEFAULT_THEME.colors.red[3]
    );
  });

  it('returns primary color shade if color was not provided', () => {
    expect(getThemeColor({ theme: DEFAULT_THEME, color: null, shade: 3 })).toBe(
      DEFAULT_THEME.colors[DEFAULT_THEME.primaryColor][3]
    );
  });
});
