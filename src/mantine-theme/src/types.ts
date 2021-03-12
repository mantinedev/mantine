import type { CSSProperties } from 'react';
import type { DeepPartial, Tuple } from '@mantine/types';

export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MantineNumberSize = MantineSize | number;

type HeadingStyle = {
  readonly fontSize: CSSProperties['fontSize'];
  readonly lineHeight: CSSProperties['lineHeight'];
};

export type MantineSizes = Record<MantineSize, number>;

export interface MantineTheme {
  readonly white: string;
  readonly black: string;
  readonly colors: Record<string, Tuple<string, 10>>;
  readonly fontFamily: CSSProperties['fontFamily'];
  readonly fontFamilyMonospace: CSSProperties['fontFamily'];
  readonly primaryColor: string;

  readonly fontSizes: MantineSizes;
  readonly radius: MantineSizes;
  readonly spacing: MantineSizes;
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

export interface InternalMantineTheme extends MantineTheme {
  __mantine_theme: boolean;
}

export type MantineThemeOverride = DeepPartial<MantineTheme>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  readonly themeOverride?: MantineThemeOverride;
}
