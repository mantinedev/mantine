import type {
  ButtonCssVariables,
  ButtonFactory,
  ButtonProps,
  ButtonSize,
  ButtonStylesNames,
  ButtonVariant,
} from './Button';
import type {
  ButtonGroupCssVariables,
  ButtonGroupFactory,
  ButtonGroupProps,
  ButtonGroupStylesNames,
} from './ButtonGroup/ButtonGroup';
import type {
  ButtonGroupSectionCssVariables,
  ButtonGroupSectionFactory,
  ButtonGroupSectionProps,
  ButtonGroupSectionStylesNames,
} from './ButtonGroupSection/ButtonGroupSection';

export { Button } from './Button';
export { ButtonGroup } from './ButtonGroup/ButtonGroup';
export { ButtonGroupSection } from './ButtonGroupSection/ButtonGroupSection';

export type {
  ButtonProps,
  ButtonStylesNames,
  ButtonFactory,
  ButtonCssVariables,
  ButtonVariant,
  ButtonSize,
  ButtonGroupProps,
  ButtonGroupCssVariables,
  ButtonGroupStylesNames,
  ButtonGroupFactory,
  ButtonGroupSectionProps,
  ButtonGroupSectionCssVariables,
  ButtonGroupSectionStylesNames,
  ButtonGroupSectionFactory,
};

export namespace Button {
  export type Props = ButtonProps;
  export type StylesNames = ButtonStylesNames;
  export type CssVariables = ButtonCssVariables;
  export type Factory = ButtonFactory;
  export type Variant = ButtonVariant;
  export type Size = ButtonSize;

  export namespace Group {
    export type Props = ButtonGroupProps;
    export type StylesNames = ButtonGroupStylesNames;
    export type CssVariables = ButtonGroupCssVariables;
    export type Factory = ButtonGroupFactory;
  }

  export namespace GroupSection {
    export type Props = ButtonGroupSectionProps;
    export type StylesNames = ButtonGroupSectionStylesNames;
    export type CssVariables = ButtonGroupSectionCssVariables;
    export type Factory = ButtonGroupSectionFactory;
  }
}
