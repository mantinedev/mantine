import type { TooltipFactory, TooltipProps } from './Tooltip';
import type { TooltipCssVariables, TooltipStylesNames } from './Tooltip.types';
import type { TooltipFloatingProps } from './TooltipFloating/TooltipFloating';
import type { TooltipGroupContextValue, TooltipGroupProps } from './TooltipGroup/TooltipGroup';

export { Tooltip } from './Tooltip';
export { TooltipGroup, TooltipGroupContext } from './TooltipGroup/TooltipGroup';
export { TooltipFloating } from './TooltipFloating/TooltipFloating';

export type {
  TooltipProps,
  TooltipFactory,
  TooltipCssVariables,
  TooltipStylesNames,
  TooltipGroupProps,
  TooltipGroupContextValue,
  TooltipFloatingProps,
};

export namespace Tooltip {
  export type Props = TooltipProps;
  export type Factory = TooltipFactory;
  export type CssVariables = TooltipCssVariables;
  export type StylesNames = TooltipStylesNames;

  export namespace Group {
    export type Props = TooltipGroupProps;
    export type ContextValue = TooltipGroupContextValue;
  }

  export namespace Floating {
    export type Props = TooltipFloatingProps;
  }
}
