import type { MantineColor, MantineColorScheme, MantineTheme } from '../../theme.types';
import { isVirtualColor } from '../../MantineCssVariables/virtual-color/virtual-color';
import { getPrimaryShade } from '../get-primary-shade/get-primary-shade';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';

interface GetContrastColorInput {
  color: string | null | undefined;
  theme: MantineTheme;
  autoContrast?: boolean | undefined | null;
  colorScheme?: MantineColorScheme;
}

export function getContrastColor({
  color,
  theme,
  autoContrast,
  colorScheme,
}: GetContrastColorInput) {
  const _autoContrast = typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;

  if (!_autoContrast) {
    return 'var(--mantine-color-white)';
  }

  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme, colorScheme });
  return parsed.isLight ? 'var(--mantine-color-black)' : 'var(--mantine-color-white)';
}

export function getVirtualColorContrast(
  value: { light: MantineColor; dark: MantineColor },
  theme: MantineTheme,
  colorScheme: 'light' | 'dark'
) {
  return getContrastColor({
    color: colorScheme === 'dark' ? value.dark : value.light,
    theme,
    colorScheme,
    autoContrast: true,
  });
}

export function getPrimaryContrastColor(theme: MantineTheme, colorScheme: 'light' | 'dark') {
  const primaryColor = theme.colors[theme.primaryColor];

  if (isVirtualColor(primaryColor)) {
    if (!theme.autoContrast) {
      return 'var(--mantine-color-white)';
    }

    return getVirtualColorContrast(primaryColor, theme, colorScheme);
  }

  return getContrastColor({
    color: primaryColor[getPrimaryShade(theme, colorScheme)],
    theme,
    autoContrast: null,
  });
}
