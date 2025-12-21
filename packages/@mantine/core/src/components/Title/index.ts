import type {
  TitleCssVariables,
  TitleFactory,
  TitleOrder,
  TitleProps,
  TitleSize,
  TitleStylesNames,
} from './Title';

export { Title } from './Title';

export type {
  TitleProps,
  TitleOrder,
  TitleSize,
  TitleStylesNames,
  TitleCssVariables,
  TitleFactory,
};

export namespace Title {
  export type Props = TitleProps;
  export type Order = TitleOrder;
  export type Size = TitleSize;
  export type StylesNames = TitleStylesNames;
  export type CssVariables = TitleCssVariables;
  export type Factory = TitleFactory;
}
