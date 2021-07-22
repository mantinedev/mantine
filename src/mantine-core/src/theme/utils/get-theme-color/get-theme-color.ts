import { MantineTheme } from '../../types';

export function getThemeColor({
  theme,
  color,
  shade,
}: {
  theme: MantineTheme;
  color: string;
  shade: number;
}) {
  const primaryShades = theme.colors[theme.primaryColor];
  return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
}
