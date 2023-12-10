import type { MantineTheme } from '../../theme.types';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';

interface GetContrastColorInput {
  color: string | null | undefined;
  theme: MantineTheme;
  autoContrast?: boolean | undefined;
}

export function getContrastColor({ color, theme, autoContrast = true }: GetContrastColorInput) {
  const _autoContrast = typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;

  if (!_autoContrast) {
    return 'var(--mantine-color-white)';
  }

  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? 'var(--mantine-color-black)' : 'var(--mantine-color-white)';
}
