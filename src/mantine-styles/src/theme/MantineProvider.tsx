import React, { createContext, useContext } from 'react';
import { DEFAULT_THEME } from './default-theme';
import { MantineThemeOverride } from './types';
import { mergeTheme } from './utils/merge-theme/merge-theme';

const MantineThemeContext = createContext(DEFAULT_THEME);

export function useMantineTheme() {
  return useContext(MantineThemeContext) || DEFAULT_THEME;
}

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

MantineProvider.displayName = '@mantine/core/MantineProvider';
