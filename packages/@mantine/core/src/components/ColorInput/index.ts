import type {
  ColorInputCssVariables,
  ColorInputFactory,
  ColorInputProps,
  ColorInputStylesNames,
} from './ColorInput';

export { ColorInput } from './ColorInput';

export type { ColorInputProps, ColorInputStylesNames, ColorInputCssVariables, ColorInputFactory };

export namespace ColorInput {
  export type Props = ColorInputProps;
  export type StylesNames = ColorInputStylesNames;
  export type CssVariables = ColorInputCssVariables;
  export type Factory = ColorInputFactory;
}
