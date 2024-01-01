import React, { Fragment, useId, useState } from 'react';
import {
  Area,
  CartesianGrid,
  CartesianGridProps,
  DotProps,
  Legend,
  LegendProps,
  AreaChart as ReChartsAreaChart,
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
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  rgba,
  StylesApiProps,
  useComputedColorScheme,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { ChartLegend } from '../ChartLegend';
import { ChartTooltip } from '../ChartTooltip';
import { AreaGradient } from './AreaGradient';
import { AreaSplit } from './AreaSplit';
import { getDefaultSplitOffset } from './get-split-offset';
import classes from './AreaChart.module.css';

function valueToPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`;
}

export interface AreaChartSeries {
  name: string;
  color: MantineColor;
}

export type AreaChartType = 'default' | 'stacked' | 'percent' | 'split';

export type AreaChartCurveType =
  | 'bump'
  | 'linear'
  | 'natural'
  | 'monotone'
  | 'step'
  | 'stepBefore'
  | 'stepAfter';

export type AreaChartStylesNames = 'root' | 'container' | 'grid' | 'axis' | 'area';

export interface AreaChartProps
  extends BoxProps,
    StylesApiProps<AreaChartFactory>,
    ElementProps<'div'> {
  /** Data used to display chart */
  data: Record<string, any>[];

  /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
  series: AreaChartSeries[];

  /** Key of the `data` object for x-axis values */
  dataKey: string;

  /** Controls how chart areas are positioned relative to each other, `'default'` by default */
  type?: AreaChartType;

  /** Determines whether the chart area should be represented with a gradient instead of the solid color, `false` by default */
  withGradient?: boolean;

  /** Determines whether x-axis should be hidden, `true` by default */
  withXAxis?: boolean;

  /** Determines whether y-axis should be hidden, `true` by default */
  withYAxis?: boolean;

  /** Props passed down to the `XAxis` recharts component */
  xAxisProps?: Omit<XAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component */
  yAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Type of the curve, `'monotone'` by default */
  curveType?: AreaChartCurveType;

  /** Props passed down to the `CartesianGrid` component */
  gridProps?: Omit<CartesianGridProps, 'ref'>;

  /** Determines whether dots should be displayed, `true` by default */
  withDots?: boolean;

  /** Specifies which axis should have tick line, `'y'` by default */
  tickLine?: 'x' | 'y' | 'xy' | 'none';

  /** Dash array for the grid lines, `'5 5'` by default */
  strokeDasharray?: string | number;

  /** Specifies which lines should be displayed in the grid, `'x'` by default */
  gridAxis?: 'x' | 'y' | 'xy' | 'none';

  /** Unit displayed next to each tick in y-axis */
  unit?: string;

  /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
  dotProps?: Omit<DotProps, 'ref'>;

  /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
  activeDotProps?: Omit<DotProps, 'ref'>;

  /** Stroke width for the chart areas, `2` by default */
  strokeWidth?: number;

  /** Tooltip position animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to the `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Props passed down to the `Tooltip` component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Determines whether chart legend should be displayed, `false` by default */
  withLegend?: boolean;

  /** Determines whether chart tooltip should be displayed, `true` by default */
  withTooltip?: boolean;

  /** Props passed down to recharts `AreaChart` component */
  areaChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsAreaChart>;

  /** Controls fill opacity of all areas, `0.2` by default */
  fillOpacity?: number;

  /** A tuple of colors used when `type="split"` is set, ignored in all other cases. A tuple may include theme colors reference or any valid CSS colors `['green.7', 'red.7']` by default. */
  splitColors?: [MantineColor, MantineColor];

  /** Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function. */
  splitOffset?: number;

  /** Determines whether points with `null` values should be connected, `true` by default */
  connectNulls?: boolean;
}

export type AreaChartFactory = Factory<{
  props: AreaChartProps;
  ref: HTMLDivElement;
  stylesNames: AreaChartStylesNames;
}>;

const defaultProps: Partial<AreaChartProps> = {
  withXAxis: true,
  withYAxis: true,
  withDots: true,
  withTooltip: true,
  connectNulls: true,
  strokeWidth: 2,
  tooltipAnimationDuration: 0,
  fillOpacity: 0.2,
  tickLine: 'y',
  strokeDasharray: '5 5',
  curveType: 'monotone',
  gridAxis: 'x',
  type: 'default',
  splitColors: ['green.7', 'red.7'],
};

export const AreaChart = factory<AreaChartFactory>((_props, ref) => {
  const props = useProps('AreaChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    series,
    withGradient,
    dataKey,
    withXAxis,
    withYAxis,
    curveType,
    gridProps,
    withDots,
    tickLine,
    strokeDasharray,
    gridAxis,
    unit,
    yAxisProps,
    xAxisProps,
    dotProps,
    activeDotProps,
    strokeWidth,
    tooltipAnimationDuration,
    type,
    legendProps,
    tooltipProps,
    withLegend,
    withTooltip,
    areaChartProps,
    fillOpacity,
    splitColors,
    splitOffset,
    connectNulls,
    onMouseLeave,
    ...others
  } = props;

  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme('light');
  const baseId = useId();
  const splitId = `${baseId}-split`;
  const withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
  const withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
  const isAnimationActive = (tooltipAnimationDuration || 0) > 0;
  const _withGradient = typeof withGradient === 'boolean' ? withGradient : type === 'default';
  const stacked = type === 'stacked' || type === 'percent';
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);
  const shouldHighlight = highlightedArea !== null;
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setHighlightedArea(null);
    onMouseLeave?.(event);
  };

  const getStyles = useStyles<AreaChartFactory>({
    name: 'AreaChart',
    classes: classes as any,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const dotsAreas = series.map((item) => {
    const color = getThemeColor(item.color, theme);
    const dimmed = shouldHighlight && highlightedArea !== item.name;
    return (
      <Area
        {...getStyles('area')}
        activeDot={{ fill: theme.white, stroke: color, strokeWidth: 2, r: 4, ...activeDotProps }}
        dot={{ fill: color, fillOpacity: dimmed ? 0 : 1, strokeWidth: 2, r: 4, ...dotProps }}
        key={item.name}
        name={item.name}
        type={curveType}
        dataKey={item.name}
        fill="none"
        strokeWidth={strokeWidth}
        stroke="none"
        isAnimationActive={false}
        connectNulls={connectNulls}
        stackId={stacked ? 'stack-dots' : undefined}
      />
    );
  });

  const areas = series.map((item) => {
    const id = `${baseId}-${item.color.replace(/[^a-zA-Z0-9]/g, '')}`;
    const color = getThemeColor(item.color, theme);
    const dimmed = shouldHighlight && highlightedArea !== item.name;

    return (
      <Fragment key={item.name}>
        <defs>
          <AreaGradient
            color={color}
            withGradient={_withGradient}
            id={id}
            fillOpacity={fillOpacity}
          />
        </defs>
        <Area
          {...getStyles('area')}
          activeDot={false}
          dot={false}
          name={item.name}
          type={curveType}
          dataKey={item.name}
          fill={type === 'split' ? `url(#${splitId})` : `url(#${id})`}
          strokeWidth={strokeWidth}
          stroke={color}
          isAnimationActive={false}
          connectNulls={connectNulls}
          stackId={stacked ? 'stack' : undefined}
          fillOpacity={dimmed ? 0 : 1}
          strokeOpacity={dimmed ? 0.5 : 1}
        />
      </Fragment>
    );
  });

  return (
    <Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsAreaChart
          data={data}
          stackOffset={type === 'percent' ? 'expand' : undefined}
          {...areaChartProps}
        >
          {withLegend && (
            <Legend
              verticalAlign="top"
              content={(payload) => (
                <ChartLegend
                  payload={payload.payload}
                  onHighlight={setHighlightedArea}
                  legendPosition={legendProps?.verticalAlign || 'top'}
                />
              )}
              height={44}
              {...legendProps}
            />
          )}

          <CartesianGrid
            strokeDasharray={strokeDasharray}
            vertical={gridAxis === 'y' || gridAxis === 'xy'}
            horizontal={gridAxis === 'x' || gridAxis === 'xy'}
            {...getStyles('grid')}
            {...gridProps}
          />

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
            tickFormatter={type === 'percent' ? valueToPercent : undefined}
            {...getStyles('axis')}
            {...yAxisProps}
          />

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={isAnimationActive}
              position={{ y: 0 }}
              cursor={{
                stroke:
                  computedColorScheme === 'light'
                    ? theme.colors.gray[3]
                    : rgba(theme.colors.dark[3], 0.6),
                strokeWidth: 1,
                strokeDasharray,
              }}
              content={({ label, payload }) => (
                <ChartTooltip label={label} payload={payload} unit={unit} />
              )}
              {...tooltipProps}
            />
          )}

          {type === 'split' && (
            <defs>
              <AreaSplit
                colors={splitColors!}
                id={splitId}
                offset={splitOffset ?? getDefaultSplitOffset({ data: data!, series })}
                fillOpacity={fillOpacity}
              />
            </defs>
          )}

          {areas}
          {withDots && dotsAreas}
        </ReChartsAreaChart>
      </ResponsiveContainer>
    </Box>
  );
});

AreaChart.classes = classes;
AreaChart.displayName = '@mantine/charts/AreaChart';
