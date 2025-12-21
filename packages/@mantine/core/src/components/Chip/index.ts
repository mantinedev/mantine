import type {
  ChipCssVariables,
  ChipFactory,
  ChipProps,
  ChipStylesNames,
  ChipVariant,
} from './Chip';
import type { ChipGroupContextValue, ChipGroupProps } from './ChipGroup/ChipGroup';

export { Chip } from './Chip';
export { ChipGroup, ChipGroupContext } from './ChipGroup/ChipGroup';

export type {
  ChipProps,
  ChipStylesNames,
  ChipCssVariables,
  ChipFactory,
  ChipVariant,
  ChipGroupProps,
  ChipGroupContextValue,
};

export namespace Chip {
  export type Props = ChipProps;
  export type StylesNames = ChipStylesNames;
  export type CssVariables = ChipCssVariables;
  export type Factory = ChipFactory;
  export type Variant = ChipVariant;

  export namespace Group {
    export type Props<
      Multiple extends boolean = false,
      Value extends string = string,
    > = ChipGroupProps<Multiple, Value>;

    export type ContextValue<Value extends string = string> = ChipGroupContextValue<Value>;
  }
}
