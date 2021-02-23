import type { CSSProperties } from 'react';
import type { DeepPartial } from '@mantine/types';

export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MantineNumberSize = MantineSize | number;

type HeadingStyle = readonly [number, number];

export type MantineColorsList = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type MantineSizes = Record<MantineSize, number>;

export interface MantineTheme {
  readonly white: string;
  readonly black: string;
  readonly colors: Record<string, string[]>;
  readonly fontFamily: string;
  readonly primaryColor: string;

  readonly fontSizes: MantineSizes;
  readonly radius: MantineSizes;
  readonly spacing: MantineSizes;
  readonly shadows: Record<MantineSize, string>;

  readonly headings: {
    h1: HeadingStyle;
    h2: HeadingStyle;
    h3: HeadingStyle;
    h4: HeadingStyle;
    h5: HeadingStyle;
    h6: HeadingStyle;
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
