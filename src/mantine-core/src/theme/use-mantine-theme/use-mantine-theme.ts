import { useTheme } from '../MantineProvider/theme-context';
import { InternalMantineTheme, MantineThemeOverride, MantineTheme } from '../types';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { DEFAULT_THEME } from '../default-theme';

export function useMantineTheme(themeOverride?: MantineThemeOverride): MantineTheme {
  const internalTheme = { ...useTheme<InternalMantineTheme>() };
  let mergedTheme = null;

  if (!internalTheme.__mantine_theme) {
    mergedTheme = mergeTheme({ __mantine_theme: true, ...DEFAULT_THEME }, themeOverride);
  } else {
    mergedTheme = mergeTheme(internalTheme, themeOverride);
  }

  delete mergedTheme.__mantine_theme;

  return mergedTheme;
}
