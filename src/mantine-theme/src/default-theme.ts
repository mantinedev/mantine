import OpenColor from 'open-color';
import { MantineTheme } from './types';

export const DEFAULT_THEME: MantineTheme = {
  __mantine_theme: true,
  colors: OpenColor,
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'blue',
  headings: {
    h1: [38, 1.2],
    h2: [30, 1.3],
    h3: [24, 1.35],
    h4: [20, 1.4],
    h5: [16, 1.5],
    h6: [14, 1.5],
  },
};
