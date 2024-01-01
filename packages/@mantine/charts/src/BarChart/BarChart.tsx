import React, { useState } from 'react';
import {
  Bar,
  CartesianGrid,
  CartesianGridProps,
  Legend,
  LegendProps,
  BarChart as ReChartsBarChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
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
import { ChartLegend } from '../ChartLegend';
import { ChartTooltip } from '../ChartTooltip';
import classes from './BarChart.module.css';

export interface BarChartSeries {
  name: string;
  color: MantineColor;
}

export type BarChartStylesNames = 'root' | 'container' | 'axis' | 'bar' | 'grid';
export type BarChartCssVariables = {
  root: '--test';
};

export interface BarChartProps
  extends BoxProps,
    StylesApiProps<BarChartFactory>,
    ElementProps<'div'> {
  /** Data used to display chart */
  data: Record<string, any>[];

  /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
  series: BarChartSeries[];

  /** Key of the `data` object for x-axis values */
  dataKey: string;

  /** Determines whether chart legend should be displayed, `false` by default */
  withLegend?: boolean;

  /** Props passed down to the `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Color of the text displayed inside the chart, `'dimmed'` by default */
  textColor?: MantineColor;

  /** Color of the grid and cursor lines, by default depends on color scheme */
  gridColor?: MantineColor;

  /** Determines whether chart tooltip should be displayed, `true` by default */
  withTooltip?: boolean;

  /** Controls fill opacity of all bars, `0.2` by default */
  fillOpacity?: number;

  /** Specifies which axis should have tick line, `'y'` by default */
  tickLine?: 'x' | 'y' | 'xy' | 'none';

  /** Specifies which lines should be displayed in the grid, `'x'` by default */
  gridAxis?: 'x' | 'y' | 'xy' | 'none';

  /** Unit displayed next to each tick in y-axis */
  unit?: string;

  /** Tooltip position animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to the `Tooltip` component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Determines whether x-axis should be hidden, `true` by default */
  withXAxis?: boolean;

  /** Determines whether y-axis should be hidden, `true` by default */
  withYAxis?: boolean;

  /** Props passed down to the `XAxis` recharts component */
  xAxisProps?: Omit<XAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component */
  yAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Props passed down to the `CartesianGrid` component */
  gridProps?: Omit<CartesianGridProps, 'ref'>;

  /** Dash array for the grid lines, `'5 5'` by default */
  strokeDasharray?: string | number;
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
  fillOpacity: 0.2,
  tickLine: 'y',
  strokeDasharray: '5 5',
  gridAxis: 'x',
};

const varsResolver = createVarsResolver<BarChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

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
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<BarChartFactory>({
    classNames,
    styles,
    props,
  });

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
        fillOpacity={dimmed ? 0 : 1}
        strokeOpacity={dimmed ? 0.5 : 1}
      />
    );
  });

  return (
    <Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsBarChart data={data}>
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
                stroke: 'var(--area-chart-grid-color)',
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

          {bars}
        </ReChartsBarChart>
      </ResponsiveContainer>
    </Box>
  );
});

BarChart.displayName = '@mantine/charts/BarChart';
BarChart.classes = classes;
