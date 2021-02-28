import { useTheme } from '../MantineProvider/theme-context';
import { InternalMantineTheme, MantineThemeOverride, MantineTheme } from '../types';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { DEFAULT_THEME } from '../default-theme';

export function useMantineTheme(themeOverride?: MantineThemeOverride): MantineTheme {
  const internalTheme = { ...useTheme<InternalMantineTheme>() };

  if (!internalTheme.__mantine_theme) {
    return DEFAULT_THEME;
  }

  const theme = mergeTheme(internalTheme, themeOverride);
  delete theme.__mantine_theme;

  return theme;
}
