import { useState } from 'react';
import {
  Area,
  AreaProps,
  Bar,
  BarProps,
  CartesianGrid,
  DotProps,
  Label,
  LabelList,
  Legend,
  Line,
  LineProps,
  ComposedChart as ReChartsCompositeChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip';
import { PointLabel } from '../PointLabel/PointLabel';
import type { BaseChartStylesNames, ChartSeries, GridChartBaseProps } from '../types';
import classes from '../grid-chart.module.css';

export type CompositeChartCurveType =
  | 'bump'
  | 'linear'
  | 'natural'
  | 'monotone'
  | 'step'
  | 'stepBefore'
  | 'stepAfter';

export interface CompositeChartSeries extends ChartSeries {
  type: 'line' | 'area' | 'bar';
  strokeDasharray?: string | number;
}

export type CompositeChartStylesNames =
  | 'line'
  | 'area'
  | 'bar'
  | BaseChartStylesNames
  | ChartLegendStylesNames
  | ChartTooltipStylesNames;

export type CompositeChartCssVariables = {
  root: '--chart-text-color' | '--chart-grid-color';
};

export interface CompositeChartProps
  extends BoxProps,
    Omit<GridChartBaseProps, 'orientation'>,
    StylesApiProps<CompositeChartFactory>,
    ElementProps<'div'> {
  /** Data used to display chart */
  data: Record<string, any>[];

  /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
  series: CompositeChartSeries[];

  /** Type of the curve, `'monotone'` by default */
  curveType?: CompositeChartCurveType;

  /** Determines whether dots should be displayed, `true` by default */
  withDots?: boolean;

  /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
  dotProps?: Omit<DotProps, 'ref'>;

  /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
  activeDotProps?: Omit<DotProps, 'ref'>;

  /** Stroke width for the chart lines, `2` by default */
  strokeWidth?: number;

  /** Determines whether points with `null` values should be connected, `true` by default */
  connectNulls?: boolean;

  /** Additional components that are rendered inside recharts `AreaChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `Line` component */
  lineProps?:
    | ((series: CompositeChartSeries) => Partial<Omit<LineProps, 'ref'>>)
    | Partial<Omit<LineProps, 'ref'>>;

  /** Props passed down to recharts `Area` component */
  areaProps?:
    | ((series: CompositeChartSeries) => Partial<Omit<AreaProps, 'ref'>>)
    | Partial<Omit<AreaProps, 'ref'>>;

  /** Props passed down to recharts `Bar` component */
  barProps?:
    | ((series: CompositeChartSeries) => Partial<Omit<BarProps, 'ref'>>)
    | Partial<Omit<BarProps, 'ref'>>;

  /** Determines whether each point should have associated label, `false` by default */
  withPointLabels?: boolean;

  /** Determines whether a label with bar value should be displayed on top of each bar, incompatible with `type="stacked"` and `type="percent"`, `false` by default */
  withBarValueLabel?: boolean;

  /** Sets minimum height of the bar in px, `0` by default */
  minBarSize?: number;

  /** Maximum bar width in px */
  maxBarWidth?: number;

  /** Props passed down to recharts `AreaChart` component */
  composedChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsCompositeChart>;
}

export type CompositeChartFactory = Factory<{
  props: CompositeChartProps;
  ref: HTMLDivElement;
  stylesNames: CompositeChartStylesNames;
  vars: CompositeChartCssVariables;
}>;

const defaultProps: Partial<CompositeChartProps> = {
  withXAxis: true,
  withYAxis: true,
  withTooltip: true,
  tooltipAnimationDuration: 0,
  tickLine: 'y',
  strokeDasharray: '5 5',
  gridAxis: 'x',
  withDots: true,
  connectNulls: true,
  strokeWidth: 2,
  curveType: 'monotone',
};

const varsResolver = createVarsResolver<CompositeChartFactory>(
  (theme, { textColor, gridColor }) => ({
    root: {
      '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
      '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
    },
  })
);

export const CompositeChart = factory<CompositeChartFactory>((_props, ref) => {
  const props = useProps('CompositeChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    withLegend,
    legendProps,
    series,
    onMouseLeave,
    dataKey,
    withTooltip,
    withXAxis,
    withYAxis,
    gridAxis,
    tickLine,
    xAxisProps,
    yAxisProps,
    unit,
    tooltipAnimationDuration,
    strokeDasharray,
    gridProps,
    tooltipProps,
    referenceLines,
    withDots,
    dotProps,
    activeDotProps,
    strokeWidth,
    connectNulls,
    curveType,
    dir,
    valueFormatter,
    children,
    lineProps,
    xAxisLabel,
    yAxisLabel,
    withRightYAxis,
    rightYAxisLabel,
    rightYAxisProps,
    withPointLabels,
    areaProps,
    barProps,
    withBarValueLabel,
    minBarSize,
    maxBarWidth,
    composedChartProps,
    ...others
  } = props;

  const theme = useMantineTheme();
  const withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
  const withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);
  const shouldHighlight = highlightedArea !== null;
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setHighlightedArea(null);
    onMouseLeave?.(event);
  };
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CompositeChartFactory>({
    classNames,
    styles,
    props,
  });

  const getStyles = useStyles<CompositeChartFactory>({
    name: 'CompositeChart',
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

  const lines = series.map((item) => {
    const color = getThemeColor(item.color, theme);
    const dimmed = shouldHighlight && highlightedArea !== item.name;

    if (item.type === 'line') {
      return (
        <Line
          {...getStyles('line')}
          key={item.name}
          name={item.name}
          dataKey={item.name}
          dot={
            withDots
              ? {
                  fillOpacity: dimmed ? 0 : 1,
                  strokeOpacity: dimmed ? 0 : 1,
                  strokeWidth: 1,
                  fill: color,
                  stroke: color,
                  ...dotProps,
                }
              : false
          }
          activeDot={
            withDots
              ? { fill: 'var(--mantine-color-white)', stroke: color, ...activeDotProps }
              : false
          }
          fill={color}
          stroke={color}
          strokeWidth={strokeWidth}
          isAnimationActive={false}
          fillOpacity={dimmed ? 0 : 1}
          strokeOpacity={dimmed ? 0.5 : 1}
          connectNulls={connectNulls}
          type={curveType}
          strokeDasharray={item.strokeDasharray}
          yAxisId={item.yAxisId || 'left'}
          label={withPointLabels ? <PointLabel valueFormatter={valueFormatter} /> : undefined}
          {...(typeof lineProps === 'function' ? lineProps(item) : lineProps)}
        />
      );
    }

    if (item.type === 'area') {
      return (
        <Area
          {...getStyles('area')}
          key={item.name}
          name={item.name}
          type={curveType}
          dataKey={item.name}
          fill={color}
          strokeWidth={strokeWidth}
          stroke={color}
          isAnimationActive={false}
          connectNulls={connectNulls}
          dot={
            withDots
              ? {
                  fillOpacity: dimmed ? 0 : 1,
                  strokeOpacity: dimmed ? 0 : 1,
                  strokeWidth: 1,
                  fill: color,
                  stroke: color,
                  ...dotProps,
                }
              : false
          }
          activeDot={
            withDots
              ? {
                  fill: theme.white,
                  stroke: color,
                  strokeWidth: 2,
                  r: 4,
                  ...activeDotProps,
                }
              : false
          }
          fillOpacity={dimmed ? 0 : 0.2}
          strokeOpacity={dimmed ? 0.5 : 1}
          strokeDasharray={item.strokeDasharray}
          yAxisId={item.yAxisId || 'left'}
          label={withPointLabels ? <PointLabel valueFormatter={valueFormatter} /> : undefined}
          {...(typeof areaProps === 'function' ? areaProps(item) : areaProps)}
        />
      );
    }

    if (item.type === 'bar') {
      return (
        <Bar
          {...getStyles('bar')}
          key={item.name}
          name={item.name}
          dataKey={item.name}
          fill={color}
          stroke={color}
          isAnimationActive={false}
          fillOpacity={dimmed ? 0.1 : 1}
          strokeOpacity={dimmed ? 0.2 : 0}
          yAxisId={item.yAxisId || 'left'}
          minPointSize={minBarSize}
          {...(typeof barProps === 'function' ? barProps(item) : barProps)}
        >
          {withBarValueLabel && (
            <LabelList
              position="top"
              fontSize={12}
              fill="var(--chart-bar-label-color, var(--mantine-color-dimmed))"
              formatter={valueFormatter}
            />
          )}
        </Bar>
      );
    }

    return null;
  });

  const referenceLinesItems = referenceLines?.map((line, index) => {
    const color = getThemeColor(line.color, theme);
    return (
      <ReferenceLine
        key={index}
        stroke={line.color ? color : 'var(--chart-grid-color)'}
        strokeWidth={1}
        yAxisId={line.yAxisId || 'left'}
        {...line}
        label={{
          value: line.label,
          fill: line.color ? color : 'currentColor',
          fontSize: 12,
          position: line.labelPosition ?? 'insideBottomLeft',
        }}
        {...getStyles('referenceLine')}
      />
    );
  });

  const sharedYAxisProps = {
    axisLine: false,
    type: 'number' as const,
    tickLine: withYTickLine ? { stroke: 'currentColor' } : false,
    allowDecimals: true,
    unit,
    tickFormatter: valueFormatter,
    ...getStyles('axis'),
  };

  return (
    <Box
      ref={ref}
      {...getStyles('root')}
      onMouseLeave={handleMouseLeave}
      dir={dir || 'ltr'}
      {...others}
    >
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsCompositeChart
          data={data}
          maxBarSize={maxBarWidth}
          margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
          }}
          {...composedChartProps}
        >
          {withLegend && (
            <Legend
              verticalAlign="top"
              content={(payload) => (
                <ChartLegend
                  payload={payload.payload}
                  onHighlight={setHighlightedArea}
                  legendPosition={legendProps?.verticalAlign || 'top'}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  series={series}
                />
              )}
              {...legendProps}
            />
          )}

          <XAxis
            hide={!withXAxis}
            dataKey={dataKey}
            tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }}
            stroke=""
            interval="preserveStartEnd"
            tickLine={withXTickLine ? { stroke: 'currentColor' } : false}
            minTickGap={5}
            {...getStyles('axis')}
            {...xAxisProps}
          >
            {xAxisLabel && (
              <Label position="insideBottom" offset={-20} fontSize={12} {...getStyles('axisLabel')}>
                {xAxisLabel}
              </Label>
            )}
            {xAxisProps?.children}
          </XAxis>

          <YAxis
            yAxisId="left"
            orientation="left"
            tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }}
            hide={!withYAxis}
            {...sharedYAxisProps}
            {...yAxisProps}
          >
            {yAxisLabel && (
              <Label
                position="insideLeft"
                angle={-90}
                textAnchor="middle"
                fontSize={12}
                offset={-5}
                {...getStyles('axisLabel')}
              >
                {yAxisLabel}
              </Label>
            )}
            {yAxisProps?.children}
          </YAxis>

          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ transform: 'translate(10, 0)', fontSize: 12, fill: 'currentColor' }}
            hide={!withRightYAxis}
            {...sharedYAxisProps}
            {...rightYAxisProps}
          >
            {rightYAxisLabel && (
              <Label
                position="insideRight"
                angle={90}
                textAnchor="middle"
                fontSize={12}
                offset={-5}
                {...getStyles('axisLabel')}
              >
                {rightYAxisLabel}
              </Label>
            )}
            {yAxisProps?.children}
          </YAxis>

          <CartesianGrid
            strokeDasharray={strokeDasharray}
            vertical={gridAxis === 'y' || gridAxis === 'xy'}
            horizontal={gridAxis === 'x' || gridAxis === 'xy'}
            {...getStyles('grid')}
            {...gridProps}
          />

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={tooltipAnimationDuration !== 0}
              position={{ y: 0 }}
              cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
                strokeDasharray,
              }}
              content={({ label, payload }) => (
                <ChartTooltip
                  label={label}
                  payload={payload}
                  unit={unit}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  series={series}
                  valueFormatter={valueFormatter}
                />
              )}
              {...tooltipProps}
            />
          )}

          {lines}
          {referenceLinesItems}
          {children}
        </ReChartsCompositeChart>
      </ResponsiveContainer>
    </Box>
  );
});

CompositeChart.displayName = '@mantine/charts/CompositeChart';
CompositeChart.classes = classes;
