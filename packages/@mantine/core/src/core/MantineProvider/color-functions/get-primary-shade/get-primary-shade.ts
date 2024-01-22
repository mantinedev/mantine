import type { MantineColorScheme, MantineTheme } from '../../theme.types';

export function getPrimaryShade(theme: MantineTheme, colorScheme: MantineColorScheme) {
  if (typeof theme.primaryShade === 'number') {
    return theme.primaryShade;
  }

  if (colorScheme === 'dark') {
    return theme.primaryShade.dark;
  }

  return theme.primaryShade.light;
}
