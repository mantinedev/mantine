import type { KbdCssVariables, KbdFactory, KbdProps, KbdStylesNames } from './Kbd';

export { Kbd } from './Kbd';

export type { KbdProps, KbdStylesNames, KbdCssVariables, KbdFactory };

export namespace Kbd {
  export type Props = KbdProps;
  export type StylesNames = KbdStylesNames;
  export type CssVariables = KbdCssVariables;
  export type Factory = KbdFactory;
}
