import type { CSSProperties } from 'react';
import type OpenColor from 'open-color';

export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type MantineColor = Exclude<keyof OpenColor, 'white' | 'black'>;

type HeadingStyle = [number, number];

export interface MantineTheme {
  __mantine_theme: boolean;
  colors: typeof OpenColor;
  fontFamily: string;
  primaryColor: MantineColor;

  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  headings: {
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
  themeOverride?: MantineThemeOverride;
}
