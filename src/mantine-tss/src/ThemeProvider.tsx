import React, { createContext, useContext } from 'react';

export interface Theme {
  primaryColor: string;
}

const defaultTheme: Theme = {
  primaryColor: 'silver',
};

const ThemeContext = createContext<Theme>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  return ctx || defaultTheme;
}

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
