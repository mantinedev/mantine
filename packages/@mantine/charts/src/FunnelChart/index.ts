import type {
  FunnelChartCell,
  FunnelChartCssVariables,
  FunnelChartFactory,
  FunnelChartProps,
  FunnelChartStylesNames,
} from './FunnelChart';

export { FunnelChart } from './FunnelChart';

export type {
  FunnelChartProps,
  FunnelChartStylesNames,
  FunnelChartFactory,
  FunnelChartCssVariables,
  FunnelChartCell,
};

export namespace FunnelChart {
  export type Props = FunnelChartProps;
  export type StylesNames = FunnelChartStylesNames;
  export type Factory = FunnelChartFactory;
  export type CssVariables = FunnelChartCssVariables;
  export type Cell = FunnelChartCell;
}
