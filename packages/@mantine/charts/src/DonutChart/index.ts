import type {
  DonutChartCell,
  DonutChartCssVariables,
  DonutChartFactory,
  DonutChartProps,
  DonutChartStylesNames,
} from './DonutChart';

export { DonutChart } from './DonutChart';

export type {
  DonutChartProps,
  DonutChartStylesNames,
  DonutChartFactory,
  DonutChartCssVariables,
  DonutChartCell,
};

export namespace DonutChart {
  export type Props = DonutChartProps;
  export type StylesNames = DonutChartStylesNames;
  export type Factory = DonutChartFactory;
  export type CssVariables = DonutChartCssVariables;
  export type Cell = DonutChartCell;
}
