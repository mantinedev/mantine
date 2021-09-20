import { MantineTheme } from '../../types';

interface GetThemeColor {
  theme: MantineTheme;
  color: string;
  shade: number;
}

export function getThemeColor({ theme, color, shade }: GetThemeColor) {
  const primaryShades = theme.colors[theme.primaryColor];
  return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
}
