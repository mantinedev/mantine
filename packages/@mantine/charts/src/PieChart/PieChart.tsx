import {
  Cell,
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
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';
import classes from './PieChart.module.css';

export interface PieChartCell {
  name: string;
  value: number;
  color: MantineColor;
}

export type PieChartStylesNames = 'root';
export type PieChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-labels-color' | '--chart-size';
};

export interface PieChartProps
  extends BoxProps,
    StylesApiProps<PieChartFactory>,
    ElementProps<'div'> {
  /** Data used to render chart */
  data: PieChartCell[];

  /** Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Pie` component */
  pieProps?: Omit<PieProps, 'ref'>;

  /** Controls color of the segments stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels, white by default */
  labelColor?: MantineColor;

  /** Controls padding between segments, `0` by default */
  paddingAngle?: number;

  /** Determines whether each segment should have associated label, `false` by default */
  withLabels?: boolean;

  /** Determines whether segments labels should have lines that connect the segment with the label, `true` by default */
  withLabelsLine?: boolean;

  /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. `80` by default */
  size?: number;

  /** Controls width of segments stroke, `1` by default */
  strokeWidth?: number;

  /** Controls angle at which chart starts, `0` by default. Set to `180` to render the chart as semicircle. */
  startAngle?: number;

  /** Controls angle at which charts ends, `360` by default. Set to `0` to render the chart as semicircle. */
  endAngle?: number;

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. `'all'` by default. */
  tooltipDataSource?: 'segment' | 'all';

  /** Additional elements rendered inside `PieChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `PieChart` component */
  pieChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsPieChart>;

  /** Controls labels position relative to the segment, `'outside'` by default */
  labelsPosition?: 'inside' | 'outside';

  /** Type of labels to display, `'value'` by default */
  labelsType?: 'value' | 'percent';

  /** A function to format values inside the tooltip */
  valueFormatter?: (value: number) => string;
}

export type PieChartFactory = Factory<{
  props: PieChartProps;
  ref: HTMLDivElement;
  stylesNames: PieChartStylesNames;
  vars: PieChartCssVariables;
}>;

const defaultProps: Partial<PieChartProps> = {
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
};

const varsResolver = createVarsResolver<PieChartFactory>(
  (theme, { strokeColor, labelColor, withLabels, size, labelsPosition }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-labels-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-size': withLabels && labelsPosition === 'outside' ? rem(size! + 80) : rem(size!),
    },
  })
);

const getInsideLabel =
  (labelsType: 'value' | 'percent', valueFormatter?: PieChartProps['valueFormatter']): PieLabel =>
  ({ cx, cy, midAngle, innerRadius, outerRadius, value, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className={classes.label}
      >
        {labelsType === 'percent'
          ? `${(percent * 100).toFixed(0)}%`
          : typeof valueFormatter === 'function'
            ? valueFormatter(value)
            : value}
      </text>
    );
  };

export const PieChart = factory<PieChartFactory>((_props, ref) => {
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
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<PieChartFactory>({
    name: 'PieChart',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PieChartFactory>({
    classNames,
    styles,
    props,
  });

  const cells = data.map((item, index) => (
    <Cell
      key={index}
      fill={getThemeColor(item.color, theme)}
      stroke="var(--chart-stroke-color, var(--mantine-color-body))"
      strokeWidth={strokeWidth}
    />
  ));

  return (
    <Box ref={ref} size={size} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <ReChartsPieChart {...pieChartProps}>
          <Pie
            data={data}
            innerRadius={0}
            outerRadius={size! / 2}
            dataKey="value"
            isAnimationActive={false}
            paddingAngle={paddingAngle}
            startAngle={startAngle}
            endAngle={endAngle}
            label={
              withLabels
                ? labelsPosition === 'inside'
                  ? getInsideLabel(labelsType || 'value', valueFormatter)
                  : labelsType === 'percent'
                    ? ({ percent, x, y, cx, cy }) => (
                        <text
                          x={x}
                          y={y}
                          cx={cx}
                          cy={cy}
                          textAnchor={x > cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          fill="var(--chart-labels-color, var(--mantine-color-dimmed))"
                          fontFamily="var(--mantine-font-family)"
                          fontSize={12}
                        >
                          <tspan x={x}>{`${(percent * 100).toFixed(0)}%`}</tspan>
                        </text>
                      )
                    : {
                        fill: 'var(--chart-labels-color, var(--mantine-color-dimmed))',
                        fontSize: 12,
                        fontFamily: 'var(--mantine-font-family)',
                      }
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
          >
            {cells}
          </Pie>

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
                  segmentId={tooltipDataSource === 'segment' ? payload?.[0]?.name : undefined}
                  valueFormatter={valueFormatter}
                />
              )}
              {...tooltipProps}
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
