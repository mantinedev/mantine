import { useTheme } from '../MantineProvider/theme-context';
import { MantineTheme, MantineThemeOverride } from '../types';
import { mergeTheme } from '../utils/merge-theme';

export function useMantineTheme(themeOverride?: MantineThemeOverride) {
  const theme = useTheme<MantineTheme>();

  if (!theme.__mantine_theme) {
    throw new Error('MantineProvider was not found in tree');
  }

  return mergeTheme(theme, themeOverride);
}
