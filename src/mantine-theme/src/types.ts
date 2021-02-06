import type { CSSProperties } from 'react';
import type OpenColor from 'open-color';

export type MantineColor = Exclude<keyof OpenColor, 'white' | 'black'>;

export interface MantineTheme {
  __mantine_theme: boolean;
  colors: typeof OpenColor;
  fontFamily: string;
  primaryColor: MantineColor;
}

export type MantineThemeOverride = Partial<Omit<MantineTheme, '__mantine_theme'>>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  themeOverride?: MantineThemeOverride;
}
