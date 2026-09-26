import type {
  WaffleChartCell,
  WaffleChartCssVariables,
  WaffleChartFactory,
  WaffleChartProps,
  WaffleChartStylesNames,
} from './WaffleChart';

export { WaffleChart } from './WaffleChart';

export type {
  WaffleChartProps,
  WaffleChartStylesNames,
  WaffleChartCssVariables,
  WaffleChartFactory,
  WaffleChartCell,
};

export namespace WaffleChart {
  export type Props = WaffleChartProps;
  export type StylesNames = WaffleChartStylesNames;
  export type CssVariables = WaffleChartCssVariables;
  export type Factory = WaffleChartFactory;
  export type Cell = WaffleChartCell;
}
