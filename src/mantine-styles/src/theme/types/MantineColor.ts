import { Tuple } from './Tuple';

export type DefaultMantineColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | (string & {});

export type MantineThemeColorsOverride = Record<string, any>;

export type MantineThemeColors = MantineThemeColorsOverride extends {
  colors: Record<string, Tuple<string, 10>>;
}
  ? MantineThemeColorsOverride['colors']
  : Record<DefaultMantineColor, Tuple<string, 10>>;

export type MantineColor = keyof MantineThemeColors;
