import type { DialogCssVariables, DialogFactory, DialogProps, DialogStylesNames } from './Dialog';

export { Dialog } from './Dialog';

export type { DialogProps, DialogStylesNames, DialogCssVariables, DialogFactory };

export namespace Dialog {
  export type Props = DialogProps;
  export type StylesNames = DialogStylesNames;
  export type CssVariables = DialogCssVariables;
  export type Factory = DialogFactory;
}
