import type {
  GaugeChartFactory,
  GaugeChartProps,
  GaugeChartSection,
  GaugeChartStylesNames,
} from './GaugeChart';

export { GaugeChart } from './GaugeChart';

export type { GaugeChartProps, GaugeChartStylesNames, GaugeChartFactory, GaugeChartSection };

export namespace GaugeChart {
  export type Props = GaugeChartProps;
  export type StylesNames = GaugeChartStylesNames;
  export type Factory = GaugeChartFactory;
  export type Section = GaugeChartSection;
}
