import type {
  AreaChartCurveType,
  AreaChartFactory,
  AreaChartProps,
  AreaChartSeries,
  AreaChartStylesNames,
  AreaChartType,
} from './AreaChart';

export { AreaChart } from './AreaChart';
export { getSplitOffset } from './get-split-offset';
export { AreaGradient } from './AreaGradient';

export type {
  AreaChartProps,
  AreaChartStylesNames,
  AreaChartFactory,
  AreaChartType,
  AreaChartSeries,
  AreaChartCurveType,
};

export namespace AreaChart {
  export type Props = AreaChartProps;
  export type StylesNames = AreaChartStylesNames;
  export type Factory = AreaChartFactory;
  export type Type = AreaChartType;
  export type Series = AreaChartSeries;
  export type CurveType = AreaChartCurveType;
}
