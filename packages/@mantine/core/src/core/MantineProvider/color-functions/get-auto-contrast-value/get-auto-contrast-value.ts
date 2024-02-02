import type { MantineTheme } from '../../theme.types';

export function getAutoContrastValue(autoContrast: boolean | undefined, theme: MantineTheme) {
  return typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;
}
