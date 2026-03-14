import type {
  RadioCssVariables,
  RadioFactory,
  RadioProps,
  RadioStylesNames,
  RadioVariant,
} from './Radio';
import type {
  RadioCardContextValue,
  RadioCardCssVariables,
  RadioCardFactory,
  RadioCardProps,
  RadioCardStylesNames,
} from './RadioCard/RadioCard';
import type {
  RadioGroupContextValue,
  RadioGroupFactory,
  RadioGroupProps,
  RadioGroupStylesNames,
} from './RadioGroup/RadioGroup';
import type { RadioIconProps } from './RadioIcon';
import type {
  RadioIndicatorCssVariables,
  RadioIndicatorFactory,
  RadioIndicatorProps,
  RadioIndicatorStylesNames,
  RadioIndicatorVariant,
} from './RadioIndicator/RadioIndicator';

export { Radio } from './Radio';
export { RadioGroup, RadioGroupContext } from './RadioGroup/RadioGroup';
export { RadioIcon } from './RadioIcon';
export { RadioCard, RadioCardContext } from './RadioCard/RadioCard';
export { RadioIndicator } from './RadioIndicator/RadioIndicator';

export type {
  RadioProps,
  RadioStylesNames,
  RadioFactory,
  RadioCssVariables,
  RadioVariant,
  RadioIconProps,
  RadioGroupProps,
  RadioGroupStylesNames,
  RadioGroupFactory,
  RadioGroupContextValue,
  RadioCardProps,
  RadioCardStylesNames,
  RadioCardFactory,
  RadioCardCssVariables,
  RadioCardContextValue,
  RadioIndicatorProps,
  RadioIndicatorStylesNames,
  RadioIndicatorFactory,
  RadioIndicatorCssVariables,
  RadioIndicatorVariant,
};

export namespace Radio {
  export type Props = RadioProps;
  export type StylesNames = RadioStylesNames;
  export type Factory = RadioFactory;
  export type Variant = RadioVariant;

  export namespace Group {
    export type Props = RadioGroupProps;
    export type StylesNames = RadioGroupStylesNames;
    export type Factory = RadioGroupFactory;
    export type ContextValue = RadioGroupContextValue;
  }

  export namespace Card {
    export type Props = RadioCardProps;
    export type StylesNames = RadioCardStylesNames;
    export type Factory = RadioCardFactory;
    export type CssVariables = RadioCardCssVariables;
    export type ContextValue = RadioCardContextValue;
  }

  export namespace Indicator {
    export type Props = RadioIndicatorProps;
    export type StylesNames = RadioIndicatorStylesNames;
    export type Factory = RadioIndicatorFactory;
    export type CssVariables = RadioIndicatorCssVariables;
    export type Variant = RadioIndicatorVariant;
  }
}
