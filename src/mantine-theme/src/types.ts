import type { CSSProperties } from 'react';
import type OpenColor from 'open-color';

export interface MantineTheme {
  __mantine_theme: boolean;
  colors: typeof OpenColor;
  fontFamily: string;
}

export type MantineThemeOverride = Partial<Omit<MantineTheme, '__mantine_theme'>>;

export type MantineColor = Exclude<keyof OpenColor, 'white' | 'black'>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  themeOverride?: MantineThemeOverride;
}
