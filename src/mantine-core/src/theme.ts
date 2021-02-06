import { createContext } from 'react';
import { createTheming } from 'react-jss';
import { MantineTheme } from '@mantine/types';

const ThemeContext = createContext({});
export const theming = createTheming(ThemeContext);

export const { ThemeProvider, useTheme } = theming;

export function useMantineTheme() {
  const theme = useTheme<MantineTheme>();

  if (!theme.__mantine_theme) {
    throw new Error('MantineProvider was not found in tree');
  }

  return theme;
}
