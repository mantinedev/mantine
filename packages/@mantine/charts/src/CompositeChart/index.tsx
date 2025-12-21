import type {
  CompositeChartCssVariables,
  CompositeChartCurveType,
  CompositeChartFactory,
  CompositeChartProps,
  CompositeChartSeries,
  CompositeChartStylesNames,
} from './CompositeChart';

export { CompositeChart } from './CompositeChart';

export type {
  CompositeChartProps,
  CompositeChartStylesNames,
  CompositeChartCssVariables,
  CompositeChartFactory,
  CompositeChartSeries,
  CompositeChartCurveType,
};

export namespace CompositeChart {
  export type Props = CompositeChartProps;
  export type StylesNames = CompositeChartStylesNames;
  export type CssVariables = CompositeChartCssVariables;
  export type Factory = CompositeChartFactory;
  export type Series = CompositeChartSeries;
  export type CurveType = CompositeChartCurveType;
}
