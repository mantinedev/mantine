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
import classes from './DonutChart.module.css';

export interface DonutChartCell {
  name: string;
  value: number;
  color: MantineColor;
}

export type DonutChartStylesNames = 'root' | 'label';
export type DonutChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-labels-color' | '--chart-size';
};

export interface DonutChartProps
  extends BoxProps,
    StylesApiProps<DonutChartFactory>,
    ElementProps<'div'> {
  /** Data used to render chart */
  data: DonutChartCell[];

  /** Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Pie` component */
  pieProps?: Partial<Omit<PieProps, 'ref'>>;

  /** Controls color of the segments stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels, by default depends on color scheme */
  labelColor?: MantineColor;

  /** Controls padding between segments, `0` by default */
  paddingAngle?: number;

  /** Determines whether each segment should have associated label, `false` by default */
  withLabels?: boolean;

  /** Determines whether segments labels should have lines that connect the segment with the label, `true` by default */
  withLabelsLine?: boolean;

  /** Controls thickness of the chart segments, `20` by default */
  thickness?: number;

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

  /** Chart label, displayed in the center of the chart */
  chartLabel?: string | number;

  /** Additional elements rendered inside `PieChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `PieChart` component */
  pieChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsPieChart>;

  /** Type of labels to display, `'value'` by default */
  labelsType?: 'value' | 'percent';

  /** A function to format values inside the tooltip */
  valueFormatter?: (value: number) => string;
}

export type DonutChartFactory = Factory<{
  props: DonutChartProps;
  ref: HTMLDivElement;
  stylesNames: DonutChartStylesNames;
  vars: DonutChartCssVariables;
}>;

const defaultProps: Partial<DonutChartProps> = {
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
};

const varsResolver = createVarsResolver<DonutChartFactory>(
  (theme, { strokeColor, labelColor, withLabels, size }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-labels-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-size': withLabels ? rem(size! + 80) : rem(size!),
    },
  })
);

const getLabelValue = (
  labelsType: DonutChartProps['labelsType'],
  value: number,
  percent: number,
  valueFormatter?: DonutChartProps['valueFormatter']
) => {
  if (labelsType === 'percent') {
    return `${(percent * 100).toFixed(0)}%`;
  }

  if (typeof valueFormatter === 'function') {
    return valueFormatter(value);
  }

  return value;
};

const getLabel =
  (labelsType: 'value' | 'percent', valueFormatter?: DonutChartProps['valueFormatter']): PieLabel =>
  ({ x, y, cx, cy, percent, value }) => (
    <text
      x={x}
      y={y}
      cx={cx}
      cy={cy}
      textAnchor={x > cx ? 'start' : 'end'}
      fill="var(--chart-labels-color, var(--mantine-color-dimmed))"
      fontFamily="var(--mantine-font-family)"
      fontSize={12}
    >
      <tspan x={x}>{getLabelValue(labelsType, value, percent, valueFormatter)}</tspan>
    </text>
  );

export const DonutChart = factory<DonutChartFactory>((_props, ref) => {
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
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<DonutChartFactory>({
    name: 'DonutChart',
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DonutChartFactory>({
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
            innerRadius={size! / 2 - thickness!}
            outerRadius={size! / 2}
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
          >
            {cells}
          </Pie>

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

DonutChart.displayName = '@mantine/charts/DonutChart';
DonutChart.classes = classes;
