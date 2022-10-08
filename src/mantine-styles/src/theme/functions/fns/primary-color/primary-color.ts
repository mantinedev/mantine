import { primaryShade } from '../primary-shade/primary-shade';
import type { MantineThemeBase } from '../../../types';

export function primaryColor(theme: MantineThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    const shade = primaryShade(theme)(colorScheme);
    return theme.colors[theme.primaryColor][shade];
  };
}
