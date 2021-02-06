import OpenColor from 'open-color';

export interface MantineTheme {
  __mantine_theme: boolean;
  colors: typeof OpenColor;
  fontFamily: string;
}
