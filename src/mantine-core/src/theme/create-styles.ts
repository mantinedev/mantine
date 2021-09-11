import { createUseStyles } from 'react-jss';
import { JssStyle } from 'jss';
import { MantineTheme } from './types';
import { theming } from './MantineProvider/theme-context';

type Func<P, T, R> = T extends undefined ? (data: P) => R : (data: P & { theme: T }) => R;

export type Styles<
  Name extends string | number | symbol = string,
  Props = unknown,
  Theme = undefined
> = Record<
  Name,
  | JssStyle<Props, Theme>
  | string
  | Func<Props, Theme, JssStyle<undefined, undefined> | string | null | undefined>
>;
export type Classes<Name extends string | number | symbol = string> = Record<Name, string>;

export function createStyles<C extends string = string, Props = unknown>(
  styles: Styles<C, Props, MantineTheme> | ((theme: MantineTheme) => Styles<C, Props, undefined>)
): (data?: Props & { theme?: MantineTheme }) => Classes<C> {
  return createUseStyles(styles, { theming });
}
