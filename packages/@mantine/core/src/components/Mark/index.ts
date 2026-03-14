import type { MarkCssVariables, MarkFactory, MarkProps, MarkStylesNames } from './Mark';

export { Mark } from './Mark';

export type { MarkProps, MarkStylesNames, MarkCssVariables, MarkFactory };

export namespace Mark {
  export type Props = MarkProps;
  export type StylesNames = MarkStylesNames;
  export type CssVariables = MarkCssVariables;
  export type Factory = MarkFactory;
}
