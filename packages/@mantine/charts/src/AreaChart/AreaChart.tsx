import React, { Fragment, useId } from 'react';
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
  createVarsResolver,
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
import classes from './AreaChart.module.css';

function valueToPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`;
}

export interface AreaChartSeries {
  name: string;
  color: MantineColor;
}

export type AreaChartType = 'default' | 'stacked' | 'percent';

export type AreaChartCurveType =
  | 'bump'
  | 'linear'
  | 'natural'
  | 'monotone'
  | 'step'
  | 'stepBefore'
  | 'stepAfter';

export type AreaChartStylesNames = 'root' | 'container' | 'grid' | 'axis' | 'area';

export type AreaChartCssVariables = {
  root: '--test';
};

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
  animationDuration?: number;

  /** Props passed down to the `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Props passed down to the `Tooltip` component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Determines whether chart legend should be displayed, `false` by default */
  withLegend?: boolean;
}

export type AreaChartFactory = Factory<{
  props: AreaChartProps;
  ref: HTMLDivElement;
  stylesNames: AreaChartStylesNames;
  vars: AreaChartCssVariables;
}>;

const defaultProps: Partial<AreaChartProps> = {
  withXAxis: true,
  withYAxis: true,
  withDots: true,
  strokeWidth: 2,
  animationDuration: 0,
  tickLine: 'y',
  strokeDasharray: '5 5',
  curveType: 'monotone',
  gridAxis: 'x',
  type: 'default',
};

const varsResolver = createVarsResolver<AreaChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

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
    animationDuration,
    type,
    legendProps,
    tooltipProps,
    withLegend,
    ...others
  } = props;

  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme('light');
  const baseId = useId();
  const withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
  const withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
  const isAnimationActive = (animationDuration || 0) > 0;
  const _withGradient = typeof withGradient === 'boolean' ? withGradient : type === 'default';
  const stacked = type === 'stacked' || type === 'percent';

  const getStyles = useStyles<AreaChartFactory>({
    name: 'AreaChart',
    classes: classes as any,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const dotsAreas = series.map((item) => {
    const color = getThemeColor(item.color, theme);
    return (
      <Area
        {...getStyles('area')}
        activeDot={{ fill: theme.white, stroke: color, strokeWidth: 2, r: 4, ...activeDotProps }}
        dot={{ fill: color, fillOpacity: 1, strokeWidth: 2, r: 4, ...dotProps }}
        key={item.name}
        name={item.name}
        type={curveType}
        dataKey={item.name}
        fill="none"
        strokeWidth={strokeWidth}
        stroke="none"
        isAnimationActive={false}
        connectNulls
        stackId={stacked ? 'stack-dots' : undefined}
      />
    );
  });

  const areas = series.map((item) => {
    const id = `${baseId}-${item.color.replace(/[^a-zA-Z0-9]/g, '')}`;
    const color = getThemeColor(item.color, theme);

    return (
      <Fragment key={item.name}>
        <defs>
          <AreaGradient color={color} withGradient={_withGradient} id={id} />
        </defs>
        <Area
          {...getStyles('area')}
          activeDot={false}
          dot={false}
          name={item.name}
          type={curveType}
          dataKey={item.name}
          fill={`url(#${id})`}
          strokeWidth={strokeWidth}
          stroke={color}
          isAnimationActive={false}
          connectNulls
          stackId={stacked ? 'stack' : undefined}
        />
      </Fragment>
    );
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsAreaChart data={data} stackOffset={type === 'percent' ? 'expand' : undefined}>
          {withLegend && (
            <Legend
              verticalAlign="top"
              content={(payload) => <ChartLegend payload={payload.payload} />}
              height={40}
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

          <Tooltip
            animationDuration={animationDuration}
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
            content={({ label, payload }) => <ChartTooltip label={label} payload={payload} />}
            {...tooltipProps}
          />

          {areas}
          {withDots && dotsAreas}
        </ReChartsAreaChart>
      </ResponsiveContainer>
    </Box>
  );
});

AreaChart.classes = classes;
AreaChart.displayName = '@mantine/charts/AreaChart';
