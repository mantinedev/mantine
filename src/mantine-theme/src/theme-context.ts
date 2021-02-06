import { createContext } from 'react';
import { createTheming } from 'react-jss';

const ThemeContext = createContext({});
export const theming = createTheming(ThemeContext);

export const { ThemeProvider, useTheme } = theming;
