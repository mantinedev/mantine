import { useContext } from 'react';
import { DEFAULT_THEME } from '../default-theme';
import { MantineThemeContext } from './theme-context';

export function useMantineTheme() {
  return useContext(MantineThemeContext) || DEFAULT_THEME;
}
