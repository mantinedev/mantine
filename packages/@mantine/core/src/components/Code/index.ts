import type { CodeCssVariables, CodeFactory, CodeProps, CodeStylesNames } from './Code';

export { Code } from './Code';

export type { CodeProps, CodeCssVariables, CodeFactory, CodeStylesNames };

export namespace Code {
  export type Props = CodeProps;
  export type CssVariables = CodeCssVariables;
  export type Factory = CodeFactory;
  export type StylesNames = CodeStylesNames;
}
