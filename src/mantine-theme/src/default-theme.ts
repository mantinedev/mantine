import OpenColor from 'open-color';
import { MantineTheme } from './types';

const {
  gray,
  red,
  pink,
  grape,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  yellow,
  orange,
} = OpenColor;

export const DEFAULT_THEME: MantineTheme = {
  __mantine_theme: true,
  white: '#fff',
  black: '#000',
  colors: { gray, red, pink, grape, violet, indigo, blue, cyan, teal, green, lime, yellow, orange },
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'blue',

  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2)',
    sm:
      '0 1px 3px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.03) 0px 2px 2px, rgba(0, 0, 0, 0.03) 0px 4px 4px, rgba(0, 0, 0, 0.03) 0px 8px 8px, rgba(0, 0, 0, 0.03) 0px 16px 16px',
    md:
      '0 1px 3px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    lg:
      '0 1px 3px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
    xl:
      '0 1px 3px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },

  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },

  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },

  headings: {
    h1: [38, 1.2],
    h2: [30, 1.3],
    h3: [24, 1.35],
    h4: [20, 1.4],
    h5: [16, 1.5],
    h6: [14, 1.5],
  },
};
