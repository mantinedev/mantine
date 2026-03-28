import type {
  PieChartCell,
  PieChartCssVariables,
  PieChartFactory,
  PieChartProps,
  PieChartStylesNames,
} from './PieChart';

export { PieChart } from './PieChart';

export type {
  PieChartProps,
  PieChartStylesNames,
  PieChartCssVariables,
  PieChartFactory,
  PieChartCell,
};

export namespace PieChart {
  export type Props = PieChartProps;
  export type StylesNames = PieChartStylesNames;
  export type CssVariables = PieChartCssVariables;
  export type Factory = PieChartFactory;
  export type Cell = PieChartCell;
}
