import type {
  AlertCssVariables,
  AlertFactory,
  AlertProps,
  AlertStylesNames,
  AlertVariant,
} from './Alert';

export { Alert } from './Alert';

export type { AlertProps, AlertStylesNames, AlertCssVariables, AlertFactory, AlertVariant };

export namespace Alert {
  export type Props = AlertProps;
  export type StylesNames = AlertStylesNames;
  export type CssVariables = AlertCssVariables;
  export type Factory = AlertFactory;
}
