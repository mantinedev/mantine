import React, { createContext, useContext, useState } from 'react';
import { DEFAULT_THEME } from './default-theme';
import { MantineThemeOverride, ColorScheme } from './types';
import { mergeTheme } from './utils/merge-theme/merge-theme';

const ColorSchemeContext = createContext<{
  colorScheme: ColorScheme;
  toggleColorScheme(colorScheme?: ColorScheme): void;
}>(null);

const MantineThemeContext = createContext(DEFAULT_THEME);

export function useMantineTheme() {
  return useContext(MantineThemeContext) || DEFAULT_THEME;
}

export function useMantineColorScheme() {
  const ctx = useContext(ColorSchemeContext);

  if (!ctx) {
    throw new Error(
      'useMantineColorScheme hook was called outside of theme context, make sure to wrap your app in MantineProvider'
    );
  }

  return ctx;
}

interface MantineProviderProps {
  theme?: MantineThemeOverride;
  children: React.ReactNode;
}

export function MantineProvider({ theme, children }: MantineProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(theme?.colorScheme || 'light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme((current) => {
      if (value === 'light' || value === 'dark') {
        return value;
      }
      return current === 'light' ? 'dark' : 'light';
    });

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      <MantineThemeContext.Provider
        value={{
          ...mergeTheme(DEFAULT_THEME, theme),
          colorScheme: theme?.colorScheme || colorScheme,
        }}
      >
        {children}
      </MantineThemeContext.Provider>
    </ColorSchemeContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
