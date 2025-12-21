import type {
  TextCssVariables,
  TextFactory,
  TextProps,
  TextStylesNames,
  TextVariant,
} from './Text';

export { Text } from './Text';

export type { TextProps, TextStylesNames, TextCssVariables, TextFactory, TextVariant };

export namespace Text {
  export type Props = TextProps;
  export type StylesNames = TextStylesNames;
  export type CssVariables = TextCssVariables;
  export type Factory = TextFactory;
  export type Variant = TextVariant;
}
