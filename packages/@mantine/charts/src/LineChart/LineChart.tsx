import React, { useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
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
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip';
import type { BaseChartStylesNames, ChartSeries, GridChartBaseProps } from '../types';
import classes from './LineChart.module.css';

export interface LineChartSeries extends ChartSeries {}

export type LineChartStylesNames =
  | 'line'
  | BaseChartStylesNames
  | ChartLegendStylesNames
  | ChartTooltipStylesNames;

export type LineChartCssVariables = {
  root: '--line-chart-text-color' | '--line-chart-grid-color';
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

  /** Controls fill opacity of all lines, `0.2` by default */
  fillOpacity?: number;
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
  fillOpacity: 0.2,
  tickLine: 'y',
  strokeDasharray: '5 5',
  gridAxis: 'x',
};

const varsResolver = createVarsResolver<LineChartFactory>((theme, { textColor, gridColor }) => ({
  root: {
    '--line-chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
    '--line-chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
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

  const lines = series.map((item) => {
    const color = getThemeColor(item.color, theme);
    const dimmed = shouldHighlight && highlightedArea !== item.name;

    return (
      <Line
        {...getStyles('line')}
        key={item.name}
        name={item.name}
        dataKey={item.name}
        fill={color}
        stroke={color}
        isAnimationActive={false}
        fillOpacity={dimmed ? 0 : 1}
        strokeOpacity={dimmed ? 0.5 : 1}
      />
    );
  });

  const referenceLinesItems = referenceLines?.map((line, index) => {
    const color = getThemeColor(line.color, theme);
    return (
      <ReferenceLine
        key={index}
        stroke={line.color ? color : 'var(--line-chart-grid-color)'}
        strokeWidth={1}
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

  return (
    <Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsLineChart data={data}>
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
                />
              )}
              height={44}
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
          />

          <YAxis
            hide={!withYAxis}
            axisLine={false}
            type="number"
            tickLine={withYTickLine ? { stroke: 'currentColor' } : false}
            tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }}
            allowDecimals
            unit={unit}
            {...getStyles('axis')}
            {...yAxisProps}
          />

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
                stroke: 'var(--line-chart-grid-color)',
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
                />
              )}
              {...tooltipProps}
            />
          )}

          {lines}
          {referenceLinesItems}
        </ReChartsLineChart>
      </ResponsiveContainer>
    </Box>
  );
});

LineChart.displayName = '@mantine/charts/LineChart';
LineChart.classes = classes;
