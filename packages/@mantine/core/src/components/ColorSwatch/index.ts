import type {
  ColorSwatchCssVariables,
  ColorSwatchFactory,
  ColorSwatchProps,
  ColorSwatchStylesNames,
} from './ColorSwatch';

export { ColorSwatch } from './ColorSwatch';

export type {
  ColorSwatchProps,
  ColorSwatchCssVariables,
  ColorSwatchFactory,
  ColorSwatchStylesNames,
};

export namespace ColorSwatch {
  export type Props = ColorSwatchProps;
  export type CssVariables = ColorSwatchCssVariables;
  export type Factory = ColorSwatchFactory;
  export type StylesNames = ColorSwatchStylesNames;
}
