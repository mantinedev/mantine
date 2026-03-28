import type {
  CheckboxCssVariables,
  CheckboxFactory,
  CheckboxIconComponent,
  CheckboxProps,
  CheckboxStylesNames,
  CheckboxVariant,
} from './Checkbox';
import type {
  CheckboxCardCssVariables,
  CheckboxCardFactory,
  CheckboxCardProps,
  CheckboxCardStylesNames,
} from './CheckboxCard/CheckboxCard';
import type {
  CheckboxGroupFactory,
  CheckboxGroupProps,
  CheckboxGroupStylesNames,
} from './CheckboxGroup/CheckboxGroup';
import type {
  CheckboxIndicatorCssVariables,
  CheckboxIndicatorFactory,
  CheckboxIndicatorProps,
  CheckboxIndicatorStylesNames,
  CheckboxIndicatorVariant,
} from './CheckboxIndicator/CheckboxIndicator';
import type { CheckboxIconProps, CheckIconProps } from './CheckIcon';

export { Checkbox } from './Checkbox';
export { CheckboxGroup, CheckboxGroupContext } from './CheckboxGroup/CheckboxGroup';
export { CheckIcon } from './CheckIcon';
export { CheckboxIndicator } from './CheckboxIndicator/CheckboxIndicator';
export { CheckboxCard, CheckboxCardContext } from './CheckboxCard/CheckboxCard';

export type {
  CheckboxProps,
  CheckboxStylesNames,
  CheckboxCssVariables,
  CheckboxFactory,
  CheckboxVariant,
  CheckboxIconComponent,
  CheckboxGroupProps,
  CheckboxGroupStylesNames,
  CheckboxGroupFactory,
  CheckboxIndicatorProps,
  CheckboxIndicatorStylesNames,
  CheckboxIndicatorCssVariables,
  CheckboxIndicatorFactory,
  CheckboxIndicatorVariant,
  CheckboxCardProps,
  CheckboxCardStylesNames,
  CheckboxCardCssVariables,
  CheckboxCardFactory,
  CheckboxIconProps,
  CheckIconProps,
};

export namespace Checkbox {
  export type Props = CheckboxProps;
  export type StylesNames = CheckboxStylesNames;
  export type CssVariables = CheckboxCssVariables;
  export type Factory = CheckboxFactory;
  export type Variant = CheckboxVariant;
  export type IconComponent = CheckboxIconComponent;

  export namespace Group {
    export type Props = CheckboxGroupProps;
    export type StylesNames = CheckboxGroupStylesNames;
    export type Factory = CheckboxGroupFactory;
  }

  export namespace Indicator {
    export type Props = CheckboxIndicatorProps;
    export type StylesNames = CheckboxIndicatorStylesNames;
    export type CssVariables = CheckboxIndicatorCssVariables;
    export type Factory = CheckboxIndicatorFactory;
    export type Variant = CheckboxIndicatorVariant;
  }

  export namespace Card {
    export type Props = CheckboxCardProps;
    export type StylesNames = CheckboxCardStylesNames;
    export type CssVariables = CheckboxCardCssVariables;
    export type Factory = CheckboxCardFactory;
  }
}
