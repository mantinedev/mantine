import type { MantineTheme } from '../../theme.types';
import { getPrimaryShade } from '../get-primary-shade/get-primary-shade';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';

interface GetContrastColorInput {
  color: string | null | undefined;
  theme: MantineTheme;
  autoContrast?: boolean | undefined | null;
}

export function getContrastColor({ color, theme, autoContrast }: GetContrastColorInput) {
  const _autoContrast = typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;

  if (!_autoContrast) {
    return 'var(--mantine-color-white)';
  }

  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? 'var(--mantine-color-black)' : 'var(--mantine-color-white)';
}

export function getPrimaryContrastColor(theme: MantineTheme, colorScheme: 'light' | 'dark') {
  return getContrastColor({
    color: theme.colors[theme.primaryColor][getPrimaryShade(theme, colorScheme)],
    theme,
    autoContrast: null,
  });
}
