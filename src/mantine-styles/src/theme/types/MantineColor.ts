import { Tuple } from './Tuple';

export type BaseDefaultColors =
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
  | 'teal';

export type DefaultMantineColor = BaseDefaultColors | (string & {});

export type MantineThemeColorsOverride = {};

export type MantineThemeColors = MantineThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultMantineColor, Tuple<string, 10>>;

type RemoveGenericColorString<T> = T extends BaseDefaultColors ? T : never;
export type MantineColor =
  | `${RemoveGenericColorString<keyof MantineThemeColors>}.${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | keyof MantineThemeColors
  | (string & {});
