import type {
  IndicatorCssVariables,
  IndicatorFactory,
  IndicatorPositionVariables,
  IndicatorProps,
  IndicatorStylesNames,
} from './Indicator';

export { Indicator } from './Indicator';

export type {
  IndicatorProps,
  IndicatorStylesNames,
  IndicatorCssVariables,
  IndicatorFactory,
  IndicatorPositionVariables,
};

export namespace Indicator {
  export type Props = IndicatorProps;
  export type StylesNames = IndicatorStylesNames;
  export type CssVariables = IndicatorCssVariables;
  export type Factory = IndicatorFactory;
}
