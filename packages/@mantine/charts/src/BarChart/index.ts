import type {
  BarChartCssVariables,
  BarChartFactory,
  BarChartProps,
  BarChartSeries,
  BarChartStylesNames,
  BarChartType,
} from './BarChart';

export { BarChart } from './BarChart';

export type {
  BarChartProps,
  BarChartCssVariables,
  BarChartFactory,
  BarChartSeries,
  BarChartStylesNames,
  BarChartType,
};

export namespace BarChart {
  export type Props = BarChartProps;
  export type CssVariables = BarChartCssVariables;
  export type Factory = BarChartFactory;
  export type Series = BarChartSeries;
  export type StylesNames = BarChartStylesNames;
  export type Type = BarChartType;
}
