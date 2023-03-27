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
  | 'teal'
  | (string & {});

export type MantineThemeColorsOverride = {};

export type MantineThemeColors = MantineThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultMantineColor, Tuple<string, 10>>;

export type MantineColor = keyof MantineThemeColors;
