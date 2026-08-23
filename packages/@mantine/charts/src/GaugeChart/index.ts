import type {
  GaugeChartCssVariables,
  GaugeChartFactory,
  GaugeChartProps,
  GaugeChartSection,
  GaugeChartStylesNames,
} from './GaugeChart';

export { GaugeChart } from './GaugeChart';

export type {
  GaugeChartProps,
  GaugeChartStylesNames,
  GaugeChartCssVariables,
  GaugeChartFactory,
  GaugeChartSection,
};

export namespace GaugeChart {
  export type Props = GaugeChartProps;
  export type StylesNames = GaugeChartStylesNames;
  export type CssVariables = GaugeChartCssVariables;
  export type Factory = GaugeChartFactory;
  export type Section = GaugeChartSection;
}
