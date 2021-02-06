import React from 'react';
import { MantineThemeOverride } from './types';
import { ThemeProvider } from './theme-context';
import { DEFAULT_THEME } from './default-theme';

interface MantineProviderProps {
  children: React.ReactNode;
  theme?: MantineThemeOverride;
}

export function MantineProvider({ children, theme }: MantineProviderProps) {
  return <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>{children}</ThemeProvider>;
}
