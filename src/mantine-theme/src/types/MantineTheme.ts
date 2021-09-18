import type { CSSProperties } from 'react';
import type { MantineSizes, MantineSize } from './MantineSize';
import type { MantineColor } from './MantineColor';
import type { Tuple } from './Tuple';
import type { DeepPartial } from './DeepPartial';

export type LoaderType = 'bars' | 'oval' | 'dots';

export interface HeadingStyle {
  readonly fontSize: CSSProperties['fontSize'];
  readonly lineHeight: CSSProperties['lineHeight'];
}

export interface MantineTheme {
  readonly loader: LoaderType;
  readonly colorScheme: 'light' | 'dark';
  readonly white: string;
  readonly black: string;
  readonly colors: Record<MantineColor, Tuple<string, 10>>;
  readonly fontFamily: CSSProperties['fontFamily'];
  readonly lineHeight: CSSProperties['lineHeight'];
  readonly transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  readonly fontFamilyMonospace: CSSProperties['fontFamily'];
  readonly primaryColor: string;

  readonly fontSizes: MantineSizes;
  readonly radius: MantineSizes;
  readonly spacing: MantineSizes;
  readonly breakpoints: MantineSizes;
  readonly shadows: Record<MantineSize, string>;

  readonly headings: {
    readonly fontFamily: CSSProperties['fontFamily'];
    readonly fontWeight: CSSProperties['fontWeight'];
    readonly sizes: {
      readonly h1: HeadingStyle;
      readonly h2: HeadingStyle;
      readonly h3: HeadingStyle;
      readonly h4: HeadingStyle;
      readonly h5: HeadingStyle;
      readonly h6: HeadingStyle;
    };
  };
}

export type MantineThemeOverride = DeepPartial<MantineTheme>;
