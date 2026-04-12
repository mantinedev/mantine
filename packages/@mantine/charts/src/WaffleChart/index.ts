import type {
  WaffleChartCell,
  WaffleChartFactory,
  WaffleChartProps,
  WaffleChartStylesNames,
} from './WaffleChart';

export { WaffleChart } from './WaffleChart';

export type { WaffleChartProps, WaffleChartStylesNames, WaffleChartFactory, WaffleChartCell };

export namespace WaffleChart {
  export type Props = WaffleChartProps;
  export type StylesNames = WaffleChartStylesNames;
  export type Factory = WaffleChartFactory;
  export type Cell = WaffleChartCell;
}
