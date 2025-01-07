import { useState } from 'react';
import {
  Bar,
  BarProps,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  LabelListProps,
  Legend,
  BarChart as ReChartsBarChart,
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
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip';
import type { BaseChartStylesNames, ChartSeries, GridChartBaseProps } from '../types';
import classes from '../grid-chart.module.css';

function valueToPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`;
}

export interface BarChartSeries extends ChartSeries {
  stackId?: string;
}

export type BarChartType = 'default' | 'stacked' | 'percent' | 'waterfall';

export type BarChartStylesNames =
  | 'bar'
  | BaseChartStylesNames
  | ChartLegendStylesNames
  | ChartTooltipStylesNames;

export type BarChartCssVariables = {
  root:
    | '--chart-text-color'
    | '--chart-grid-color'
    | '--chart-cursor-fill'
    | '--chart-bar-label-color';
};

export interface BarChartProps
  extends BoxProps,
    GridChartBaseProps,
    StylesApiProps<BarChartFactory>,
    ElementProps<'div'> {
  /** Data used to display chart. */
  data: Record<string, any>[];

  /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
  series: BarChartSeries[];

  /** Controls how bars are positioned relative to each other, `'default'` by default */
  type?: BarChartType;

  /** Controls fill opacity of all bars, `1` by default */
  fillOpacity?: number;

  /** Fill of hovered bar section, by default value is based on color scheme */
  cursorFill?: MantineColor;

  /** Props passed down to recharts `BarChart` component */
  barChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsBarChart>;

  /** Additional components that are rendered inside recharts `BarChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `Bar` component */
  barProps?:
    | ((series: BarChartSeries) => Partial<Omit<BarProps, 'ref'>>)
    | Partial<Omit<BarProps, 'ref'>>;

  /** Determines whether a label with bar value should be displayed on top of each bar, incompatible with `type="stacked"` and `type="percent"`, `false` by default */
  withBarValueLabel?: boolean;

  /** Props passed down to recharts `LabelList` component */
  valueLabelProps?:
    | ((series: BarChartSeries) => Partial<Omit<LabelListProps<Record<string, any>>, 'ref'>>)
    | Partial<LabelListProps<Record<string, any>>>;

  /** Sets minimum height of the bar in px, `0` by default */
  minBarSize?: number;

  /** Maximum bar width in px */
  maxBarWidth?: number;

  /** Controls color of the bar label, by default the value is determined by the chart orientation */
  barLabelColor?: MantineColor;

  /** A function to assign dynamic bar color based on its value */
  getBarColor?: (value: number, series: BarChartSeries) => MantineColor;
}

export type BarChartFactory = Factory<{
  props: BarChartProps;
  ref: HTMLDivElement;
  stylesNames: BarChartStylesNames;
  vars: BarChartCssVariables;
}>;

const defaultProps: Partial<BarChartProps> = {
  withXAxis: true,
  withYAxis: true,
  withTooltip: true,
  tooltipAnimationDuration: 0,
  fillOpacity: 1,
  tickLine: 'y',
  strokeDasharray: '5 5',
  gridAxis: 'x',
  type: 'default',
};

const varsResolver = createVarsResolver<BarChartFactory>(
  (theme, { textColor, gridColor, cursorFill, barLabelColor }) => ({
    root: {
      '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
      '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
      '--chart-cursor-fill': cursorFill ? getThemeColor(cursorFill, theme) : undefined,
      '--chart-bar-label-color': barLabelColor ? getThemeColor(barLabelColor, theme) : undefined,
    },
  })
);

function calculateCumulativeTotal(waterfallData: Record<string, any>[], dataKey: string) {
  let start: number = 0;
  let end: number = 0;
  return waterfallData.map((item) => {
    if (item.standalone) {
      for (const prop in item) {
        if (typeof item[prop] === 'number' && prop !== dataKey) {
          item[prop] = [0, item[prop]];
        }
      }
    } else {
      for (const prop in item) {
        if (typeof item[prop] === 'number' && prop !== dataKey) {
          end += item[prop];
          item[prop] = [start, end];
          start = end;
        }
      }
    }
    return item;
  });
}

function getBarFill(barProps: BarChartProps['barProps'], series: BarChartSeries) {
  if (typeof barProps === 'function') {
    return barProps(series).fill;
  }

  return barProps?.fill;
}

export const BarChart = factory<BarChartFactory>((_props, ref) => {
  const props = useProps('BarChart', defaultProps, _props);
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
    fillOpacity,
    barChartProps,
    type,
    orientation,
    dir,
    valueFormatter,
    children,
    barProps,
    xAxisLabel,
    yAxisLabel,
    withBarValueLabel,
    valueLabelProps,
    withRightYAxis,
    rightYAxisLabel,
    rightYAxisProps,
    minBarSize,
    maxBarWidth,
    mod,
    getBarColor,
    gridColor,
    textColor,
    ...others
  } = props;

  const theme = useMantineTheme();
  const withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
  const withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);
  const shouldHighlight = highlightedArea !== null;
  const stacked = type === 'stacked' || type === 'percent';
  const tickFormatter = type === 'percent' ? valueToPercent : valueFormatter;

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setHighlightedArea(null);
    onMouseLeave?.(event);
  };
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<BarChartFactory>({
    classNames,
    styles,
    props,
  });

  const inputData = type === 'waterfall' ? calculateCumulativeTotal(data, dataKey) : data;

  const getStyles = useStyles<BarChartFactory>({
    name: 'BarChart',
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

  const bars = series.map((item) => {
    const color = getThemeColor(item.color, theme);
    const dimmed = shouldHighlight && highlightedArea !== item.name;

    return (
      <Bar
        {...getStyles('bar')}
        key={item.name}
        name={item.name}
        dataKey={item.name}
        fill={color}
        stroke={color}
        isAnimationActive={false}
        fillOpacity={dimmed ? 0.1 : fillOpacity}
        strokeOpacity={dimmed ? 0.2 : 0}
        stackId={stacked ? 'stack' : item.stackId || undefined}
        yAxisId={item.yAxisId || 'left'}
        minPointSize={minBarSize}
        {...(typeof barProps === 'function' ? barProps(item) : barProps)}
      >
        {inputData.map((entry, index) => {
          const cellColor = entry.color
            ? getThemeColor(entry.color, theme)
            : typeof getBarColor === 'function'
              ? getThemeColor(getBarColor(entry[item.name], item), theme)
              : getBarFill(barProps, item) || color;

          return <Cell key={`cell-${index}`} fill={cellColor} />;
        })}
        {withBarValueLabel && (
          <LabelList
            position={orientation === 'vertical' ? 'right' : 'top'}
            fontSize={12}
            fill="var(--chart-bar-label-color, var(--mantine-color-dimmed))"
            formatter={tickFormatter}
            {...(typeof valueLabelProps === 'function' ? valueLabelProps(item) : valueLabelProps)}
          />
        )}
      </Bar>
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
    tickFormatter: orientation === 'vertical' ? undefined : tickFormatter,
    ...getStyles('axis'),
  };

  return (
    <Box
      ref={ref}
      {...getStyles('root')}
      onMouseLeave={handleMouseLeave}
      dir={dir || 'ltr'}
      mod={[{ orientation }, mod]}
      {...others}
    >
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsBarChart
          data={inputData}
          stackOffset={type === 'percent' ? 'expand' : undefined}
          layout={orientation}
          maxBarSize={maxBarWidth}
          margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
          }}
          {...barChartProps}
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
                  showColor={type !== 'waterfall'}
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
            tickFormatter={orientation === 'vertical' ? tickFormatter : undefined}
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
                fill: 'var(--chart-cursor-fill)',
              }}
              content={({ label, payload }) => (
                <ChartTooltip
                  label={label}
                  payload={payload}
                  type={type === 'waterfall' ? 'scatter' : undefined}
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

          {bars}
          {referenceLinesItems}
          {children}
        </ReChartsBarChart>
      </ResponsiveContainer>
    </Box>
  );
});

BarChart.displayName = '@mantine/charts/BarChart';
BarChart.classes = classes;
