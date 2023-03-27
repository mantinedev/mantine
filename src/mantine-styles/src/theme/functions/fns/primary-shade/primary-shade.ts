import type { MantineThemeBase } from '../../../types';

export function primaryShade(theme: MantineThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    if (typeof theme.primaryShade === 'number') {
      return theme.primaryShade;
    }

    return theme.primaryShade[colorScheme || theme.colorScheme];
  };
}
