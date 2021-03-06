import { InternalMantineTheme, MantineThemeOverride } from '../../types';

export function mergeTheme(
  currentTheme: InternalMantineTheme,
  themeOverride?: MantineThemeOverride
): InternalMantineTheme {
  if (!themeOverride) {
    return currentTheme;
  }

  return Object.keys(currentTheme).reduce((acc, key) => {
    acc[key] =
      typeof themeOverride[key] === 'object'
        ? { ...currentTheme[key], ...themeOverride[key] }
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as InternalMantineTheme);
}
