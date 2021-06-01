import { createContext } from 'react';
import { createTheming } from 'react-jss';
import { DEFAULT_THEME } from '../default-theme';
import type { MantineTheme } from '../types';

const ThemeContext = createContext<MantineTheme>(DEFAULT_THEME);
export const theming = createTheming<MantineTheme>(ThemeContext);

export const { ThemeProvider, useTheme } = theming;
