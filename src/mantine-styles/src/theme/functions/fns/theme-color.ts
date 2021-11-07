import type { MantineThemeBase } from '../../types';

export function themeColor(theme: MantineThemeBase) {
  return (color: string, shade: number) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
  };
}
