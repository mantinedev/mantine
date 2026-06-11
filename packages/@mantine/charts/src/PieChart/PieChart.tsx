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
import classes from './PieChart.module.css';

export interface PieChartCell {
  key?: string | number;
  name: string;
  value: number;
  color: MantineColor;
}

export type PieChartStylesNames = 'root' | ChartTooltipStylesNames | ChartLegendStylesNames;
export type PieChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-labels-color' | '--chart-size';
};

export interface PieChartProps
  extends BoxProps, StylesApiProps<PieChartFactory>, ElementProps<'div'> {
  /** Data used to render chart */
  data: PieChartCell[];

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

  /** Controls text color of all labels, white by default */
  labelColor?: MantineColor;

  /** Controls padding between segments @default 0 */
  paddingAngle?: number;

  /** Determines whether each segment should have associated label @default false */
  withLabels?: boolean;

  /** Determines whether segments labels should have lines that connect the segment with the label @default true */
  withLabelsLine?: boolean;

  /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. @default 80 */
  size?: number;

  /** Controls width of segments stroke @default 1 */
  strokeWidth?: number;

  /** Controls angle at which chart starts. Set to `180` to render the chart as semicircle. @default 0 */
  startAngle?: number;

  /** Controls angle at which charts ends. Set to `0` to render the chart as semicircle. @default 360 */
  endAngle?: number;

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. @default 'all' */
  tooltipDataSource?: 'segment' | 'all';

  /** Additional elements rendered inside `PieChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `PieChart` component */
  pieChartProps?: React.ComponentProps<typeof ReChartsPieChart>;

  /** Controls labels position relative to the segment @default 'outside' */
  labelsPosition?: 'inside' | 'outside';

  /** Type of labels to display @default 'value' */
  labelsType?: 'value' | 'percent' | 'name';

  /** A function to format values inside the tooltip */
  valueFormatter?: (value: number) => string;

  /** Props passed down to each segment of the chart */
  cellProps?:
    | ((series: PieChartCell) => Partial<Omit<React.SVGProps<SVGElement>, 'ref'>>)
    | Partial<Omit<React.SVGProps<SVGElement>, 'ref'>>;
}

export type PieChartFactory = Factory<{
  props: PieChartProps;
  ref: HTMLDivElement;
  stylesNames: PieChartStylesNames;
  vars: PieChartCssVariables;
}>;

const defaultProps = {
  withTooltip: false,
  withLabelsLine: true,
  paddingAngle: 0,
  size: 160,
  strokeWidth: 1,
  startAngle: 0,
  endAngle: 360,
  tooltipDataSource: 'all',
  labelsPosition: 'outside',
  labelsType: 'value',
} satisfies Partial<PieChartProps>;

const varsResolver = createVarsResolver<PieChartFactory>(
  (theme, { strokeColor, labelColor, withLabels, withLegend, size, labelsPosition }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-labels-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-size': rem(
        size! + (withLabels && labelsPosition === 'outside' ? 80 : 0) + (withLegend ? 80 : 0)
      ),
    },
  })
);

const getLabelValue = (
  labelsType: PieChartProps['labelsType'],
  value: number | undefined,
  percent: number | undefined,
  name: string | undefined,
  valueFormatter?: PieChartProps['valueFormatter']
) => {
  if (labelsType === 'name') {
    return name;
  }

  if (labelsType === 'percent' && typeof percent === 'number') {
    return `${(percent * 100).toFixed(0)}%`;
  }

  if (typeof valueFormatter === 'function' && typeof value === 'number') {
    return valueFormatter(value);
  }

  return value;
};

const getInsideLabel =
  (
    labelsType: 'value' | 'percent' | 'name',
    valueFormatter?: PieChartProps['valueFormatter']
  ): PieLabel =>
  ({ cx, cy, midAngle, innerRadius, outerRadius, value, percent, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
    const x = Number(cx) + radius * Math.cos(-(midAngle || 0) * RADIAN);
    const y = Number(cy) + radius * Math.sin(-(midAngle || 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > Number(cx) ? 'start' : 'end'}
        dominantBaseline="central"
        className={classes.label}
      >
        {getLabelValue(labelsType, Number(value), Number(percent), name as string, valueFormatter)}
      </text>
    );
  };

const getOutsideLabel =
  (
    labelsType: 'value' | 'percent' | 'name',
    valueFormatter?: PieChartProps['valueFormatter']
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

export const PieChart = factory<PieChartFactory>((_props) => {
  const props = useProps('PieChart', defaultProps, _props);
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
    strokeWidth,
    startAngle,
    endAngle,
    tooltipDataSource,
    children,
    pieChartProps,
    labelsPosition,
    valueFormatter,
    labelsType,
    strokeColor,
    attributes,
    cellProps,
    ...others
  } = props;

  const theme = useMantineTheme();
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);

  const getStyles = useStyles<PieChartFactory>({
    name: 'PieChart',
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PieChartFactory>({
    classNames,
    styles,
    props,
  });

  const pieData = data.map((item) => ({
    ...item,
    fill: getThemeColor(item.color, theme),
    stroke: 'var(--chart-stroke-color, var(--mantine-color-body))',
    strokeWidth,
    fillOpacity: highlightedArea ? (highlightedArea === item.name ? 1 : 0.2) : 1,
    ...(typeof cellProps === 'function' ? cellProps(item) : cellProps),
  }));

  return (
    <Box size={size} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <ReChartsPieChart {...pieChartProps}>
          <Pie
            data={pieData as any}
            innerRadius={0}
            outerRadius={size / 2}
            dataKey="value"
            isAnimationActive={false}
            paddingAngle={paddingAngle}
            startAngle={startAngle}
            endAngle={endAngle}
            label={
              withLabels
                ? labelsPosition === 'inside'
                  ? getInsideLabel(labelsType || 'value', valueFormatter)
                  : getOutsideLabel(labelsType || 'value', valueFormatter)
                : false
            }
            labelLine={
              withLabelsLine && labelsPosition === 'outside'
                ? {
                    stroke: 'var(--chart-label-color, var(--mantine-color-dimmed))',
                    strokeWidth: 1,
                  }
                : false
            }
            {...pieProps}
          />

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
                    tooltipDataSource === 'segment' ? (payload?.[0]?.name as string) : undefined
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
                  }))}
                  onHighlight={setHighlightedArea}
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

PieChart.displayName = '@mantine/charts/PieChart';
PieChart.classes = classes;
PieChart.varsResolver = varsResolver;

export namespace PieChart {
  export type Props = PieChartProps;
  export type StylesNames = PieChartStylesNames;
  export type CssVariables = PieChartCssVariables;
  export type Factory = PieChartFactory;
  export type Cell = PieChartCell;
}
