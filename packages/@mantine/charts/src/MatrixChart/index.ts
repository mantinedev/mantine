import type { MatrixChartFactory, MatrixChartProps, MatrixChartStylesNames } from './MatrixChart';

export { MatrixChart } from './MatrixChart';

export type {
  MatrixChartProps,
  MatrixChartStylesNames,
  MatrixChartFactory,
  MatrixChartCell,
  MatrixChartData,
} from './MatrixChart';

export namespace MatrixChart {
  export type Props = MatrixChartProps;
  export type StylesNames = MatrixChartStylesNames;
  export type Factory = MatrixChartFactory;
}
