import type { CSSProperties } from 'react';
import type { MantineSizes, MantineSize } from './MantineSize';
import type { Tuple } from './Tuple';
import type { DeepPartial } from './DeepPartial';

export type LoaderType = 'bars' | 'oval' | 'dots';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

export interface MantineTheme {
  loader: LoaderType;
  colorScheme: 'light' | 'dark';
  white: string;
  black: string;
  colors: Record<string, Tuple<string, 10>>;
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: string;

  fontSizes: MantineSizes;
  radius: MantineSizes;
  spacing: MantineSizes;
  breakpoints: MantineSizes;
  shadows: Record<MantineSize, string>;

  headings: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };
}

export type MantineThemeOverride = DeepPartial<MantineTheme>;
