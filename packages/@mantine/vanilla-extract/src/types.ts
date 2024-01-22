import {
  MantineBreakpoint,
  MantineColor,
  MantineFontSize,
  MantineLineHeight,
  MantineRadius,
  MantineShadow,
  MantineSpacing,
} from '@mantine/core';

interface ColorValues {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  filled: string;
  filledHover: string;
  light: string;
  lightHover: string;
  lightColor: string;
  outline: string;
  outlineHover: string;
}

export type Colors = {
  [key in MantineColor]: ColorValues;
} & {
  primary: string;
  white: string;
  black: string;
  primaryColors: ColorValues;
  text: string;
  body: string;
  error: string;
  placeholder: string;
  anchor: string;
  default: string;
  defaultHover: string;
  defaultColor: string;
  defaultBorder: string;
  dimmed: string;
};

export type Breakpoints = {
  [key in MantineBreakpoint | (string & {})]: string;
};

export type Spacing = {
  [key in MantineSpacing | (string & {})]: string;
};

export type FontSizes = {
  [key in MantineFontSize | (string & {})]: string;
};

export type LineHeights = {
  [key in MantineLineHeight | (string & {})]: string;
};

export type Shadows = {
  [key in MantineShadow | (string & {})]: string;
};

export type Radius = {
  [key in MantineRadius | (string & {})]: string;
};

export type Heading = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};

export type Headings = {
  [key in 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']: Heading;
};

export interface MantineVars {
  scale: string;
  cursorType: string;
  webkitFontSmoothing: string;
  mozFontSmoothing: string;
  colors: Colors;
  lineHeight: string;
  fontFamily: string;
  fontFamilyMonospace: string;
  fontFamilyHeadings: string;
  headingFontWeight: string;
  radiusDefault: string;
  breakpoints: Breakpoints;
  spacing: Spacing;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  shadows: Shadows;
  radius: Radius;
  headings: Headings;

  rtlSelector: string;
  darkSelector: string;
  lightSelector: string;

  smallerThan: (breakpoint: MantineBreakpoint | (string & {}) | number) => string;
  largerThan: (breakpoint: MantineBreakpoint | (string & {}) | number) => string;
}
