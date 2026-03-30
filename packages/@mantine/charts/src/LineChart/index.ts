import type {
  LineChartCssVariables,
  LineChartCurveType,
  LineChartFactory,
  LineChartProps,
  LineChartSeries,
  LineChartStylesNames,
} from './LineChart';

export { LineChart } from './LineChart';

export type {
  LineChartProps,
  LineChartCssVariables,
  LineChartFactory,
  LineChartSeries,
  LineChartStylesNames,
  LineChartCurveType,
};

export namespace LineChart {
  export type Props = LineChartProps;
  export type CssVariables = LineChartCssVariables;
  export type Factory = LineChartFactory;
  export type Series = LineChartSeries;
  export type StylesNames = LineChartStylesNames;
  export type CurveType = LineChartCurveType;
}
