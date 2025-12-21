import type {
  ThemeIconCssVariables,
  ThemeIconFactory,
  ThemeIconProps,
  ThemeIconStylesNames,
  ThemeIconVariant,
} from './ThemeIcon';

export { ThemeIcon } from './ThemeIcon';

export type {
  ThemeIconProps,
  ThemeIconStylesNames,
  ThemeIconFactory,
  ThemeIconVariant,
  ThemeIconCssVariables,
};

export namespace ThemeIcon {
  export type Props = ThemeIconProps;
  export type StylesNames = ThemeIconStylesNames;
  export type Factory = ThemeIconFactory;
  export type Variant = ThemeIconVariant;
  export type CssVariables = ThemeIconCssVariables;
}
