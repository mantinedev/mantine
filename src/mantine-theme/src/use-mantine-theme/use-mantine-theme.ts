import { useTheme } from '../MantineProvider/theme-context';
import { InternalMantineTheme, MantineThemeOverride, MantineTheme } from '../types';
import { mergeTheme } from '../utils/merge-theme/merge-theme';

export function useMantineTheme(themeOverride?: MantineThemeOverride): MantineTheme {
  const theme = useTheme<InternalMantineTheme>();

  if (!theme.__mantine_theme) {
    throw new Error('MantineProvider was not found in tree');
  }

  return mergeTheme(theme, themeOverride);
}
