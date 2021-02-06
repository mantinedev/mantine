import React from 'react';
import { ThemeProvider } from './theme-context';
import { DEFAULT_THEME } from './default-theme';

interface MantineProviderProps {
  children: React.ReactNode;
}

export function MantineProvider({ children }: MantineProviderProps) {
  return <ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>;
}
