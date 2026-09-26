import {
  BrushProps,
  CartesianGridProps,
  DotProps,
  LabelProps,
  LegendProps,
  ReferenceAreaProps,
  ReferenceDotProps,
  ReferenceLineProps,
  TooltipProps,
  XAxisProps,
  YAxisProps,
} from 'recharts';
import { MantineColor } from '@mantine/core';

export interface ChartReferenceLineProps extends Omit<ReferenceLineProps, 'ref' | 'label'> {
  color?: MantineColor;
  label?: string | Omit<LabelProps, 'ref'>;
  labelPosition?: LabelProps['position'];
}

export interface ChartReferenceAreaProps extends Omit<ReferenceAreaProps, 'ref' | 'label'> {
  color?: MantineColor;
  label?: string | Omit<LabelProps, 'ref'>;
  labelPosition?: LabelProps['position'];
}

export interface ChartReferenceDotProps extends Omit<ReferenceDotProps, 'ref' | 'label'> {
  color?: MantineColor;
  label?: string | Omit<LabelProps, 'ref'>;
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
  | 'referenceArea'
  | 'referenceDot'
  | 'axisLabel'
  | 'brush';

export type ChartData = Record<string, any>[];

export interface GridChartBaseProps {
  /** Data used to display chart @category appearance */
  data: ChartData;

  /** Key of the `data` object for x-axis values @category appearance */
  dataKey: string;

  /** Reference lines that should be displayed on the chart @category appearance */
  referenceLines?: ChartReferenceLineProps[];

  /** Reference areas that should be displayed on the chart @category appearance */
  referenceAreas?: ChartReferenceAreaProps[];

  /** Reference dots that should be displayed on the chart @category appearance */
  referenceDots?: ChartReferenceDotProps[];

  /** Determines whether x-axis should be displayed, `true` by default @category appearance */
  withXAxis?: boolean;

  /** Determines whether y-axis should be displayed, `true` by default @category appearance */
  withYAxis?: boolean;

  /** Props passed down to the `XAxis` recharts component */
  xAxisProps?: Omit<XAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component */
  yAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component rendered on the right side */
  rightYAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Props passed down to the `CartesianGrid` component */
  gridProps?: Omit<CartesianGridProps, 'ref'>;

  /** Specifies which axis should have tick line, `'y'` by default @category appearance */
  tickLine?: 'x' | 'y' | 'xy' | 'none';

  /** Dash array for the grid lines and cursor, `'5 5'` by default @category appearance */
  strokeDasharray?: string | number;

  /** Specifies which lines should be displayed in the grid, `'x'` by default @category appearance */
  gridAxis?: 'x' | 'y' | 'xy' | 'none';

  /** Unit displayed next to each tick in y-axis @category appearance */
  unit?: string;

  /** Tooltip position animation duration in ms, `0` by default @category appearance */
  tooltipAnimationDuration?: number;

  /** Props passed down to the `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Props passed down to the `Tooltip` component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Determines whether chart legend should be displayed, `false` by default @category appearance */
  withLegend?: boolean;

  /** Determines whether chart tooltip should be displayed, `true` by default @category appearance */
  withTooltip?: boolean;

  /** Color of the text displayed inside the chart, `'dimmed'` by default @category appearance */
  textColor?: MantineColor;

  /** Color of the grid and cursor lines, by default depends on color scheme @category appearance */
  gridColor?: MantineColor;

  /** Chart orientation, `'horizontal'` by default @category appearance */
  orientation?: 'horizontal' | 'vertical';

  /** A function to format values on Y axis and inside the tooltip @category appearance */
  valueFormatter?: (value: number) => string;

  /** A label to display below the x-axis @category appearance */
  xAxisLabel?: string;

  /** A label to display next to the y-axis @category appearance */
  yAxisLabel?: string;

  /** A label to display next to the right y-axis @category appearance */
  rightYAxisLabel?: string;

  /** Determines whether additional y-axis should be displayed on the right side of the chart, `false` by default @category appearance */
  withRightYAxis?: boolean;

  /** Determines whether the chart should be keyboard-navigable with the recharts accessibility layer, `true` by default @category accessibility */
  accessibilityLayer?: boolean;

  /** Determines whether a brush (range selector) should be displayed under the chart, `false` by default @category appearance */
  withBrush?: boolean;

  /** Props passed down to the `Brush` component */
  brushProps?: Omit<BrushProps, 'ref'>;
}

export type MantineChartDotProps = Omit<DotProps, 'ref'> & { strokeWidth?: number };
