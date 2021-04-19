import { createContext } from 'react';

export type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextProps {
  colorScheme: ColorScheme;
  onChange: (colorScheme: ColorScheme) => void;
}

export const ColorSchemeContext = createContext<ColorSchemeContextProps>(null);
