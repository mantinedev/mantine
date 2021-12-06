import type { CSSProperties } from 'react';
import type { MantineSizes, MantineSize, MantineNumberSize } from './MantineSize';
import type { Tuple } from './Tuple';
import type { DeepPartial } from './DeepPartial';
import { CSSObject } from '../../tss';

export type LoaderType = 'bars' | 'oval' | 'dots';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

interface MantineThemeFunctions {
  fontStyles(): CSSObject;
  focusStyles(): CSSObject;
  cover(offset?: number | string): CSSObject;
  themeColor(color: string, shade: number): string;
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: MantineNumberSize): string;
  largerThan(breakpoint: MantineNumberSize): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
}

export interface MantineTheme {
  loader: LoaderType;
  dateFormat: string;
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

  fn: MantineThemeFunctions;
  other: Record<string, any>;

  datesLocale: string;
}

export type MantineThemeBase = Omit<MantineTheme, 'fn'>;
export type MantineThemeOverride = DeepPartial<Omit<MantineThemeBase, 'fn' | 'other'>> & {
  other?: Record<string, any>;
};
