import { useState } from 'react';
import {
  CartesianGrid,
  DotProps,
  Label,
  Legend,
  Line,
  LineProps,
  LineChart as ReChartsLineChart,
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
  MantineColor,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useId } from '@mantine/hooks';
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip';
import { PointLabel } from '../PointLabel/PointLabel';
import type { BaseChartStylesNames, ChartSeries, GridChartBaseProps } from '../types';
import classes from '../grid-chart.module.css';

export type LineChartType = 'default' | 'gradient';

export interface LineChartGradientStop {
  offset: number;
  color: MantineColor;
}

export type LineChartCurveType =
  | 'bump'
  | 'linear'
  | 'natural'
  | 'monotone'
  | 'step'
  | 'stepBefore'
  | 'stepAfter';

export interface LineChartSeries extends ChartSeries {
  strokeDasharray?: string | number;
}

export type LineChartStylesNames =
  | 'line'
  | BaseChartStylesNames
  | ChartLegendStylesNames
  | ChartTooltipStylesNames;

export type LineChartCssVariables = {
  root: '--chart-text-color' | '--chart-grid-color';
};

export interface LineChartProps
  extends BoxProps,
    GridChartBaseProps,
    StylesApiProps<LineChartFactory>,
    ElementProps<'div'> {
  /** Data used to display chart */
  data: Record<string, any>[];

  /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
  series: LineChartSeries[];

  /** Controls styles of the line, `'default'` by default */
  type?: LineChartType;

  /** Data used to generate gradient stops, `[{ offset: 0, color: 'red' }, { offset: 100, color: 'blue' }]` by default */
  gradientStops?: LineChartGradientStop[];

  /** Type of the curve, `'monotone'` by default */
  curveType?: LineChartCurveType;

  /** Controls fill opacity of all lines, `1` by default */
  fillOpacity?: number;

  /** Determines whether dots should be displayed, `true` by default */
  withDots?: boolean;

  /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
  dotProps?: Omit<DotProps, 'ref'>;

  /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
  activeDotProps?: Omit<DotProps, 'ref'>;

  /** Stroke width for the chart lines, `2` by default */
  strokeWidth?: number;

  /** Props passed down to recharts `LineChart` component */
  lineChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsLineChart>;

  /** Determines whether points with `null` values should be connected, `true` by default */
  connectNulls?: boolean;

  /** Additional components that are rendered inside recharts `LineChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `Line` component */
  lineProps?:
    | ((series: LineChartSeries) => Partial<Omit<LineProps, 'ref'>>)
    | Partial<Omit<LineProps, 'ref'>>;

  /** Determines whether each point should have associated label, `false` by default */
  withPointLabels?: boolean;
}

export type LineChartFactory = Factory<{
  props: LineChartProps;
  ref: HTMLDivElement;
  stylesNames: LineChartStylesNames;
  vars: LineChartCssVariables;
}>;

const defaultProps: Partial<LineChartProps> = {
  withXAxis: true,
  withYAxis: true,
  withTooltip: true,
  tooltipAnimationDuration: 0,
  fillOpacity: 1,
  tickLine: 'y',
  strokeDasharray: '5 5',
  gridAxis: 'x',
  withDots: true,
  connectNulls: true,
  strokeWidth: 2,
  curveType: 'monotone',
  gradientStops: [
    { offset: 0, color: 'red' },
    { offset: 100, color: 'blue' },
  ],
};

const varsResolver = createVarsResolver<LineChartFactory>((theme, { textColor, gridColor }) => ({
  root: {
    '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
    '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
  },
}));

export const LineChart = factory<LineChartFactory>((_props, ref) => {
  const props = useProps('LineChart', defaultProps, _props);
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
    lineChartProps,
    connectNulls,
    fillOpacity,
    curveType,
    orientation,
    dir,
    valueFormatter,
    children,
    lineProps,
    xAxisLabel,
    yAxisLabel,
    type,
    gradientStops,
    withRightYAxis,
    rightYAxisLabel,
    rightYAxisProps,
    withPointLabels,
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
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<LineChartFactory>({
    classNames,
    styles,
    props,
  });

  const getStyles = useStyles<LineChartFactory>({
    name: 'LineChart',
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

  const id = useId();
  const gradientId = `line-chart-gradient-${id}`;
  const stops = gradientStops?.map((stop) => (
    <stop
      key={stop.color}
      offset={`${stop.offset}%`}
      stopColor={getThemeColor(stop.color, theme)}
    />
  ));

  const lines = series.map((item) => {
    const color = getThemeColor(item.color, theme);
    const dimmed = shouldHighlight && highlightedArea !== item.name;

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
                fill: type === 'gradient' ? 'var(--mantine-color-gray-7)' : color,
                stroke: type === 'gradient' ? 'white' : color,
                ...dotProps,
              }
            : false
        }
        activeDot={
          withDots
            ? {
                fill: type === 'gradient' ? 'var(--mantine-color-gray-7)' : color,
                stroke: type === 'gradient' ? 'white' : color,
                ...activeDotProps,
              }
            : false
        }
        fill={color}
        stroke={type === 'gradient' ? `url(#${gradientId})` : color}
        strokeWidth={strokeWidth}
        isAnimationActive={false}
        fillOpacity={dimmed ? 0 : fillOpacity}
        strokeOpacity={dimmed ? 0.5 : fillOpacity}
        connectNulls={connectNulls}
        type={curveType}
        strokeDasharray={item.strokeDasharray}
        yAxisId={item.yAxisId || 'left'}
        label={withPointLabels ? <PointLabel valueFormatter={valueFormatter} /> : undefined}
        {...(typeof lineProps === 'function' ? lineProps(item) : lineProps)}
      />
    );
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
    ...(orientation === 'vertical'
      ? { dataKey, type: 'category' as const }
      : { type: 'number' as const }),
    tickLine: withYTickLine ? { stroke: 'currentColor' } : false,
    allowDecimals: true,
    unit,
    tickFormatter: orientation === 'vertical' ? undefined : valueFormatter,
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
        <ReChartsLineChart
          data={data}
          layout={orientation}
          margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
          }}
          {...lineChartProps}
        >
          {type === 'gradient' && (
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                {stops}
              </linearGradient>
            </defs>
          )}

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
                  showColor={type !== 'gradient'}
                />
              )}
              {...legendProps}
            />
          )}

          <XAxis
            hide={!withXAxis}
            {...(orientation === 'vertical' ? { type: 'number' } : { dataKey })}
            tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }}
            stroke=""
            interval="preserveStartEnd"
            tickLine={withXTickLine ? { stroke: 'currentColor' } : false}
            minTickGap={5}
            tickFormatter={orientation === 'vertical' ? valueFormatter : undefined}
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
              position={orientation === 'vertical' ? {} : { y: 0 }}
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
                  showColor={type !== 'gradient'}
                />
              )}
              {...tooltipProps}
            />
          )}

          {lines}
          {referenceLinesItems}
          {children}
        </ReChartsLineChart>
      </ResponsiveContainer>
    </Box>
  );
});

LineChart.displayName = '@mantine/charts/LineChart';
LineChart.classes = classes;
