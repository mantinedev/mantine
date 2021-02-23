import React from 'react';
import { MantineThemeOverride } from '../types';
import { DEFAULT_THEME } from '../default-theme';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { ThemeProvider } from './theme-context';

interface MantineProviderProps {
  children: React.ReactNode;
  theme?: MantineThemeOverride;
}

export function MantineProvider({ children, theme }: MantineProviderProps) {
  return (
    <ThemeProvider theme={mergeTheme({ __mantine_theme: true, ...DEFAULT_THEME }, theme)}>
      {children}
    </ThemeProvider>
  );
}

MantineProvider.displayName = '@mantine/Provider';
