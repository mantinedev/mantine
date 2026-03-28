import type { StackCssVariables, StackFactory, StackProps, StackStylesNames } from './Stack';

export { Stack } from './Stack';

export type { StackProps, StackStylesNames, StackCssVariables, StackFactory };

export namespace Stack {
  export type Props = StackProps;
  export type StylesNames = StackStylesNames;
  export type CssVariables = StackCssVariables;
  export type Factory = StackFactory;
}
