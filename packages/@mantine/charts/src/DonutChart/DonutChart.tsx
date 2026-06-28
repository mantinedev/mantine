import { useState } from 'react';
import {
  Legend,
  LegendProps,
  Pie,
  PieLabel,
  PieProps,
  PieChart as ReChartsPieChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip/ChartTooltip';
import { getPieChartData } from '../utils';
import classes from './DonutChart.module.css';

export interface DonutChartCell {
  name: string;
  value: number;
  color: MantineColor;
}

export type DonutChartStylesNames =
  | 'root'
  | 'label'
  | ChartTooltipStylesNames
  | ChartLegendStylesNames;
export type DonutChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-labels-color' | '--chart-size';
};

export interface DonutChartProps
  extends BoxProps, StylesApiProps<DonutChartFactory>, ElementProps<'div'> {
  /** Data used to render chart */
  data: DonutChartCell[];

  /** Determines whether the tooltip should be displayed when one of the section is hovered @default true */
  withTooltip?: boolean;

  /** Determines whether the legend should be displayed @default false */
  withLegend?: boolean;

  /** Props passed down to recharts `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Tooltip animation duration in ms @default 0 */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Pie` component */
  pieProps?: Partial<Omit<PieProps, 'ref'>>;

  /** Controls color of the segments stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels, by default depends on color scheme */
  labelColor?: MantineColor;

  /** Controls padding between segments @default 0 */
  paddingAngle?: number;

  /** Determines whether each segment should have associated label @default false */
  withLabels?: boolean;

  /** Determines whether segments labels should have lines that connect the segment with the label @default true */
  withLabelsLine?: boolean;

  /** Controls thickness of the chart segments @default 20 */
  thickness?: number;

  /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. @default 160 */
  size?: number;

  /** Controls width of segments stroke @default 1 */
  strokeWidth?: number;

  /** Controls angle at which chart starts. Set to `180` to render the chart as semicircle. @default 0 */
  startAngle?: number;

  /** Controls angle at which charts ends. Set to `0` to render the chart as semicircle. @default 360 */
  endAngle?: number;

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. @default 'all' */
  tooltipDataSource?: 'segment' | 'all';

  /** Chart label, displayed in the center of the chart */
  chartLabel?: string | number;

  /** Additional elements rendered inside `PieChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `PieChart` component */
  pieChartProps?: React.ComponentProps<typeof ReChartsPieChart>;

  /** Type of labels to display, `'value'` by default */
  labelsType?: 'value' | 'percent' | 'name';

  /** A function to format values inside the tooltip */
  valueFormatter?: (value: number) => string;

  /** Props passed down to each segment of the chart */
  cellProps?:
    | ((series: DonutChartCell) => Partial<Omit<React.SVGProps<SVGElement>, 'ref'>>)
    | Partial<Omit<React.SVGProps<SVGElement>, 'ref'>>;
}

export type DonutChartFactory = Factory<{
  props: DonutChartProps;
  ref: HTMLDivElement;
  stylesNames: DonutChartStylesNames;
  vars: DonutChartCssVariables;
}>;

const defaultProps = {
  withTooltip: true,
  withLabelsLine: true,
  paddingAngle: 0,
  thickness: 20,
  size: 160,
  strokeWidth: 1,
  startAngle: 0,
  endAngle: 360,
  labelsType: 'value',
  tooltipDataSource: 'all',
} satisfies Partial<DonutChartProps>;

const varsResolver = createVarsResolver<DonutChartFactory>(
  (theme, { strokeColor, labelColor, withLabels, withLegend, size }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-labels-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-size': rem(size! + (withLabels ? 80 : 0) + (withLegend ? 80 : 0)),
    },
  })
);

const getLabelValue = (
  labelsType: DonutChartProps['labelsType'],
  value: number | undefined,
  percent: number | undefined,
  name: string | undefined,
  valueFormatter?: DonutChartProps['valueFormatter']
) => {
  if (labelsType === 'name') {
    return name;
  }

  if (labelsType === 'percent') {
    return `${((percent || 0) * 100).toFixed(0)}%`;
  }

  if (typeof valueFormatter === 'function') {
    return valueFormatter(value || 0);
  }

  return value;
};

const getLabel =
  (
    labelsType: 'value' | 'percent' | 'name',
    valueFormatter?: DonutChartProps['valueFormatter']
  ): PieLabel =>
  ({ x, y, cx, cy, percent, value, name }) => (
    <text
      x={x}
      y={y}
      cx={cx}
      cy={cy}
      textAnchor={x > Number(cx) ? 'start' : 'end'}
      fill="var(--chart-labels-color, var(--mantine-color-dimmed))"
      fontFamily="var(--mantine-font-family)"
      fontSize={12}
    >
      <tspan x={x}>
        {getLabelValue(labelsType, Number(value), Number(percent), name as string, valueFormatter)}
      </tspan>
    </text>
  );

export const DonutChart = factory<DonutChartFactory>((_props) => {
  const props = useProps('DonutChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    withTooltip,
    withLegend,
    legendProps,
    tooltipAnimationDuration,
    tooltipProps,
    pieProps,
    paddingAngle,
    withLabels,
    withLabelsLine,
    size,
    thickness,
    strokeWidth,
    startAngle,
    endAngle,
    tooltipDataSource,
    chartLabel,
    children,
    pieChartProps,
    valueFormatter,
    strokeColor,
    labelsType,
    attributes,
    cellProps,
    ...others
  } = props;

  const theme = useMantineTheme();
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const getStyles = useStyles<DonutChartFactory>({
    name: 'DonutChart',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DonutChartFactory>({
    classNames,
    styles,
    props,
  });

  const pieData = getPieChartData({ data, theme, strokeWidth, highlightedIndex, cellProps });

  return (
    <Box size={size} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <ReChartsPieChart {...pieChartProps}>
          <Pie
            data={pieData as any}
            innerRadius={size / 2 - thickness}
            outerRadius={size / 2}
            dataKey="value"
            isAnimationActive={false}
            paddingAngle={paddingAngle}
            startAngle={startAngle}
            endAngle={endAngle}
            label={withLabels ? getLabel(labelsType || 'value', valueFormatter) : false}
            labelLine={
              withLabelsLine
                ? {
                    stroke: 'var(--chart-label-color, var(--mantine-color-dimmed))',
                    strokeWidth: 1,
                  }
                : false
            }
            {...pieProps}
          />

          {chartLabel && (
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              {...getStyles('label')}
            >
              {chartLabel}
            </text>
          )}

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={({ payload }) => (
                <ChartTooltip
                  payload={data}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  type="radial"
                  segmentId={
                    tooltipDataSource === 'segment'
                      ? (payload?.[0]?.payload?.__segmentIndex as number)
                      : undefined
                  }
                  valueFormatter={valueFormatter}
                  attributes={attributes}
                />
              )}
              {...tooltipProps}
            />
          )}

          {withLegend && (
            <Legend
              verticalAlign="bottom"
              content={(payload) => (
                <ChartLegend
                  payload={payload.payload?.map((item) => ({
                    ...item,
                    dataKey: (item.payload as any)?.name,
                    highlightKey: (item.payload as any)?.__segmentIndex,
                  }))}
                  onHighlight={(value) =>
                    setHighlightedIndex(typeof value === 'number' ? value : null)
                  }
                  legendPosition={legendProps?.verticalAlign || 'bottom'}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  centered
                  attributes={attributes}
                />
              )}
              {...legendProps}
            />
          )}

          {children}
        </ReChartsPieChart>
      </ResponsiveContainer>
    </Box>
  );
});

DonutChart.displayName = '@mantine/charts/DonutChart';
DonutChart.classes = classes;
DonutChart.varsResolver = varsResolver;

export namespace DonutChart {
  export type Props = DonutChartProps;
  export type StylesNames = DonutChartStylesNames;
  export type Factory = DonutChartFactory;
  export type CssVariables = DonutChartCssVariables;
  export type Cell = DonutChartCell;
}
