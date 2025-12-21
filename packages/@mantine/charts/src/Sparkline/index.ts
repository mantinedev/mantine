import type {
  SparklineCssVariables,
  SparklineFactory,
  SparklineProps,
  SparklineStylesNames,
} from './Sparkline';

export { Sparkline } from './Sparkline';

export type { SparklineProps, SparklineStylesNames, SparklineCssVariables, SparklineFactory };

export namespace Sparkline {
  export type Props = SparklineProps;
  export type StylesNames = SparklineStylesNames;
  export type CssVariables = SparklineCssVariables;
  export type Factory = SparklineFactory;
}
