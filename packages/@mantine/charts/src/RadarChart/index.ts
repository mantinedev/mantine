import type {
  RadarChartCssVariables,
  RadarChartFactory,
  RadarChartProps,
  RadarChartSeries,
  RadarChartStylesNames,
} from './RadarChart';

export { RadarChart } from './RadarChart';

export type {
  RadarChartProps,
  RadarChartStylesNames,
  RadarChartCssVariables,
  RadarChartFactory,
  RadarChartSeries,
};

export namespace RadarChart {
  export type Props = RadarChartProps;
  export type StylesNames = RadarChartStylesNames;
  export type CssVariables = RadarChartCssVariables;
  export type Factory = RadarChartFactory;
  export type Series = RadarChartSeries;
}
