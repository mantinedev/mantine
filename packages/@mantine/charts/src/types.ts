import type {
  CartesianGridProps,
  LabelProps,
  LegendProps,
  ReferenceLineProps,
  TooltipProps,
  XAxisProps,
  YAxisProps,
} from 'recharts';
import type { MantineColor } from '@mantine/core';

export interface ChartReferenceLineProps extends Omit<ReferenceLineProps, 'ref' | 'label'> {
  color?: MantineColor;
  label?: string;
  labelPosition?: LabelProps['position'];
}

export interface ChartSeries {
  name: string;
  color?: MantineColor;
  label?: string;
  yAxisId?: string;
}

export type BaseChartStylesNames =
  | 'root'
  | 'container'
  | 'axis'
  | 'grid'
  | 'referenceLine'
  | 'axisLabel';

export type ChartData = Record<string, any>[];

export interface GridChartBaseProps {
  /** Data used to display chart */
  data: ChartData;

  /** Key of the `data` object for x-axis values */
  dataKey: string;

  /** Reference lines that should be displayed on the chart */
  referenceLines?: ChartReferenceLineProps[];

  /** Determines whether x-axis should be displayed, `true` by default */
  withXAxis?: boolean;

  /** Determines whether y-axis should be displayed, `true` by default */
  withYAxis?: boolean;

  /** Props passed down to the `XAxis` recharts component */
  xAxisProps?: Omit<XAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component */
  yAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component rendered on the right side */
  rightYAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Props passed down to the `CartesianGrid` component */
  gridProps?: Omit<CartesianGridProps, 'ref'>;

  /** Specifies which axis should have tick line, `'y'` by default */
  tickLine?: 'x' | 'y' | 'xy' | 'none';

  /** Dash array for the grid lines and cursor, `'5 5'` by default */
  strokeDasharray?: string | number;

  /** Specifies which lines should be displayed in the grid, `'x'` by default */
  gridAxis?: 'x' | 'y' | 'xy' | 'none';

  /** Unit displayed next to each tick in y-axis */
  unit?: string;

  /** Tooltip position animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to the `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Props passed down to the `Tooltip` component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Determines whether chart legend should be displayed, `false` by default */
  withLegend?: boolean;

  /** Determines whether chart tooltip should be displayed, `true` by default */
  withTooltip?: boolean;

  /** Color of the text displayed inside the chart, `'dimmed'` by default */
  textColor?: MantineColor;

  /** Color of the grid and cursor lines, by default depends on color scheme */
  gridColor?: MantineColor;

  /** Chart orientation, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';

  /** A function to format values on Y axis and inside the tooltip */
  valueFormatter?: (value: number) => string;

  /** A label to display below the x-axis */
  xAxisLabel?: string;

  /** A label to display next to the y-axis */
  yAxisLabel?: string;

  /** A label to display next to the right y-axis */
  rightYAxisLabel?: string;

  /** Determines whether additional y-axis should be displayed on the right side of the chart, `false` by default */
  withRightYAxis?: boolean;
}
