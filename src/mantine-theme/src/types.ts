import type { CSSProperties } from 'react';
import type OpenColor from 'open-color';

export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type MantineColor = Exclude<keyof OpenColor, 'white' | 'black'>;

type HeadingStyle = readonly [number, number];

export interface MantineTheme {
  readonly __mantine_theme: boolean;
  readonly colors: typeof OpenColor;
  readonly fontFamily: string;
  readonly primaryColor: MantineColor;

  readonly fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  readonly radius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  readonly spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  readonly shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  readonly headings: {
    h1: HeadingStyle;
    h2: HeadingStyle;
    h3: HeadingStyle;
    h4: HeadingStyle;
    h5: HeadingStyle;
    h6: HeadingStyle;
  };
}

export type MantineThemeOverride = Partial<Omit<MantineTheme, '__mantine_theme'>>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  readonly themeOverride?: MantineThemeOverride;
}
