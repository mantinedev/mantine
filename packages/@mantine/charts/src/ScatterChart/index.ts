import type {
  ScatterChartCssVariables,
  ScatterChartFactory,
  ScatterChartProps,
  ScatterChartSeries,
  ScatterChartStylesNames,
} from './ScatterChart';

export { ScatterChart } from './ScatterChart';

export type {
  ScatterChartProps,
  ScatterChartStylesNames,
  ScatterChartCssVariables,
  ScatterChartFactory,
  ScatterChartSeries,
};

export namespace ScatterChart {
  export type Props = ScatterChartProps;
  export type StylesNames = ScatterChartStylesNames;
  export type CssVariables = ScatterChartCssVariables;
  export type Factory = ScatterChartFactory;
  export type Series = ScatterChartSeries;
}
