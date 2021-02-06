import { useTheme } from './theme-context';
import { MantineTheme } from './types';

export function useMantineTheme() {
  const theme = useTheme<MantineTheme>();

  if (!theme.__mantine_theme) {
    throw new Error('MantineThemeProvider was not found in tree');
  }

  return theme;
}
