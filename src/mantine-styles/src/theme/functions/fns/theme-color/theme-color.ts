import type { MantineThemeBase } from '../../../types';

export function themeColor(theme: MantineThemeBase) {
  return (color: string, shade: number, primaryFallback: boolean = true) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors
      ? theme.colors[color][shade]
      : primaryFallback
      ? primaryShades[shade]
      : color;
  };
}
