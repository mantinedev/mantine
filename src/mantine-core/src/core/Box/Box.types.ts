import type { MantineTheme } from '../MantineProvider';

type MantineStyle = React.CSSProperties | ((theme: MantineTheme) => React.CSSProperties);
export type MantineStyleProp = MantineStyle | MantineStyle[] | MantineStyleProp[] | undefined;

export type CssVariable = `--${string}`;

export type CssVariables<Variable extends string = CssVariable> = Partial<Record<Variable, string>>;

export type CssVars<Variable extends string = CssVariable> =
  | CssVariables<Variable>
  | ((theme: MantineTheme) => CssVariables<Variable>)
  | CssVars<Variable>[];

export type CssVarsProp<Variable extends string = CssVariable> =
  | CssVars<Variable>
  | CssVars<Variable>[];
