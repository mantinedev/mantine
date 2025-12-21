import type {
  __CloseButtonProps,
  CloseButtonCssVariables,
  CloseButtonFactory,
  CloseButtonProps,
  CloseButtonStylesNames,
  CloseButtonVariant,
} from './CloseButton';
import type { CloseIconProps } from './CloseIcon';

export { CloseIcon } from './CloseIcon';
export { CloseButton } from './CloseButton';

export type {
  CloseButtonProps,
  CloseButtonStylesNames,
  CloseButtonFactory,
  CloseButtonVariant,
  CloseButtonCssVariables,
  __CloseButtonProps,
  CloseIconProps,
};

export namespace CloseButton {
  export type Props = CloseButtonProps;
  export type StylesNames = CloseButtonStylesNames;
  export type Factory = CloseButtonFactory;
  export type Variant = CloseButtonVariant;
  export type CssVariables = CloseButtonCssVariables;
}
