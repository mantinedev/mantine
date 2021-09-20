import { useContext } from 'react';
import { DEFAULT_THEME } from '@mantine/tss';
import { MantineThemeContext } from './theme-context';

export function useMantineTheme() {
  return useContext(MantineThemeContext) || DEFAULT_THEME;
}
