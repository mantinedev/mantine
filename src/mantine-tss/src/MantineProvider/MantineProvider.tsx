import React from 'react';
import { DEFAULT_THEME, MantineThemeOverride } from '@mantine/theme';
import { mergeTheme } from './merge-theme/merge-theme';
import { MantineThemeContext } from './theme-context';

interface MantineProviderProps {
  theme?: MantineThemeOverride;
  children: React.ReactNode;
}

export function MantineProvider({ theme, children }: MantineProviderProps) {
  return (
    <MantineThemeContext.Provider value={mergeTheme(DEFAULT_THEME, theme)}>
      {children}
    </MantineThemeContext.Provider>
  );
}
