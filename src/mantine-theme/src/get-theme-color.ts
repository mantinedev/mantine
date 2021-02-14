import { MantineTheme } from './types';

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
  const shades = color in theme.colors ? theme.colors[color] : primaryShades;
  return shades[shade] || primaryShades[shade];
}
