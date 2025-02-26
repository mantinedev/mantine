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
  data: Record<string, any>[];
  series: BarChartSeries[];
  type?: BarChartType;
  fillOpacity?: number;
  cursorFill?: MantineColor;
  barChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsBarChart>;
  children?: React.ReactNode;
  barProps?:
    | ((series: BarChartSeries) => Partial<Omit<BarProps, 'ref'>>)
    | Partial<Omit<BarProps, 'ref'>>;
  withBarValueLabel?: boolean;
  valueLabelProps?:
    | ((series: BarChartSeries) => Partial<Omit<LabelListProps<Record<string, any>>, 'ref'>>)
    | Partial<LabelListProps<Record<string, any>>>;
  minBarSize?: number;
  maxBarWidth?: number;
  barLabelColor?: MantineColor;
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
    tickMargin: 10, // Added tickMargin to prevent overlap
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
            bottom: xAxisLabel ? 40 : undefined, // Increased margin to accommodate rotated labels
            left: yAxisLabel ? 20 : undefined, // Adjusted for better spacing
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
            dataKey={dataKey}
            tick={{ fontSize: 12, fill: 'currentColor' }}
            tickLine={withXTickLine}
            axisLine={withXTickLine}
            hide={!withXAxis}
            tickMargin={10} // Added to increase space between ticks and labels
            angle={-45} // Default rotation to prevent overlap
            textAnchor="end" // Align rotated labels properly
            interval="preserveStart" // Reduce tick density to avoid overlap
            {...xAxisProps} // Allow override via props
          >
            {xAxisLabel && (
              <Label
                position="insideBottom"
                textAnchor="middle"
                fontSize={12}
                offset={0}
                dy={30} // Increased offset to avoid overlap with rotated labels
                {...getStyles('axisLabel')}
              >
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
                textAnchor="middle" // Centered y-axis label by default
                fontSize={12}
                offset={0} // Adjusted offset for better positioning
                dx={-20} // Fine-tuned to avoid overlap with ticks
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
                textAnchor="middle" // Centered right y-axis label
                fontSize={12}
                offset={0}
                dx={20}
                {...getStyles('axisLabel')}
              >
                {rightYAxisLabel}
              </Label>
            )}
            {rightYAxisProps?.children}
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
