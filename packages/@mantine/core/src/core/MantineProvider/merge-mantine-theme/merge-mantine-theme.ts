import { deepMerge } from '../../utils';
import type { MantineTheme, MantineThemeOverride } from '../theme.types';

export const INVALID_PRIMARY_COLOR_ERROR =
  '[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color';

export const INVALID_PRIMARY_SHADE_ERROR =
  '[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }';

function isValidPrimaryShade(shade: number) {
  if (shade < 0 || shade > 9) {
    return false;
  }

  return parseInt(shade.toString(), 10) === shade;
}

export function validateMantineTheme(theme: MantineTheme): asserts theme is MantineTheme {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }

  if (typeof theme.primaryShade === 'object') {
    if (
      !isValidPrimaryShade(theme.primaryShade.dark) ||
      !isValidPrimaryShade(theme.primaryShade.light)
    ) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }

  if (typeof theme.primaryShade === 'number' && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}

export function mergeMantineTheme(
  currentTheme: MantineTheme,
  themeOverride?: MantineThemeOverride
) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }

  const result = deepMerge(currentTheme, themeOverride);

  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }

  validateMantineTheme(result);
  return result;
}
