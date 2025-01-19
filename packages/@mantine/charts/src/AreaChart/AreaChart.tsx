import { Fragment, useId, useState } from 'react';
import {
  Area,
  AreaProps,
  CartesianGrid,
  DotProps,
  Label,
  Legend,
  AreaChart as ReChartsAreaChart,
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
import { PointLabel } from '../PointLabel/PointLabel';
import type { BaseChartStylesNames, ChartSeries, GridChartBaseProps } from '../types';
import { AreaGradient } from './AreaGradient';
import { AreaSplit } from './AreaSplit';
import { getDefaultSplitOffset } from './get-split-offset';
import classes from '../grid-chart.module.css';

function valueToPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`;
}

export interface AreaChartSeries extends ChartSeries {
  strokeDasharray?: string | number;
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

export type AreaChartStylesNames =
  | 'area'
  | BaseChartStylesNames
  | ChartLegendStylesNames
  | ChartTooltipStylesNames;

export type AreaChartCSSVariables = {
  root: '--chart-text-color' | '--chart-grid-color';
};

export interface AreaChartProps
  extends BoxProps,
    GridChartBaseProps,
    StylesApiProps<AreaChartFactory>,
    ElementProps<'div'> {
  /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
  series: AreaChartSeries[];

  /** Controls how chart areas are positioned relative to each other, `'default'` by default */
  type?: AreaChartType;

  /** Determines whether the chart area should be represented with a gradient instead of the solid color, `false` by default */
  withGradient?: boolean;

  /** Type of the curve, `'monotone'` by default */
  curveType?: AreaChartCurveType;

  /** Determines whether dots should be displayed, `true` by default */
  withDots?: boolean;

  /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
  dotProps?: Omit<DotProps, 'ref'>;

  /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
  activeDotProps?: Omit<DotProps, 'ref'>;

  /** Stroke width for the chart areas, `2` by default */
  strokeWidth?: number;

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

  /** Additional components that are rendered inside recharts `AreaChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `Area` component */
  areaProps?:
    | ((series: AreaChartSeries) => Partial<Omit<AreaProps, 'ref'>>)
    | Partial<Omit<AreaProps, 'ref'>>;

  /** Determines whether each point should have associated label, `false` by default */
  withPointLabels?: boolean;
}

export type AreaChartFactory = Factory<{
  props: AreaChartProps;
  ref: HTMLDivElement;
  stylesNames: AreaChartStylesNames;
  vars: AreaChartCSSVariables;
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
  orientation: 'horizontal',
};

const varsResolver = createVarsResolver<AreaChartFactory>((theme, { textColor, gridColor }) => ({
  root: {
    '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
    '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
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
    orientation,
    referenceLines,
    dir,
    valueFormatter,
    children,
    areaProps,
    xAxisLabel,
    yAxisLabel,
    withRightYAxis,
    rightYAxisLabel,
    rightYAxisProps,
    withPointLabels,
    gridColor,
    textColor,
    ...others
  } = props;

  const theme = useMantineTheme();
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<AreaChartFactory>({
    classNames,
    styles,
    props,
  });

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
        yAxisId={item.yAxisId || 'left'}
        {...(typeof areaProps === 'function' ? areaProps(item) : areaProps)}
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
          strokeDasharray={item.strokeDasharray}
          yAxisId={item.yAxisId || 'left'}
          label={withPointLabels ? <PointLabel valueFormatter={valueFormatter} /> : undefined}
          {...(typeof areaProps === 'function' ? areaProps(item) : areaProps)}
        />
      </Fragment>
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

  const tickFormatter = type === 'percent' ? valueToPercent : valueFormatter;

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
      {...others}
    >
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsAreaChart
          data={data}
          stackOffset={type === 'percent' ? 'expand' : undefined}
          layout={orientation}
          margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
          }}
          {...areaChartProps}
        >
          {referenceLinesItems}
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

          <CartesianGrid
            strokeDasharray={strokeDasharray}
            vertical={gridAxis === 'y' || gridAxis === 'xy'}
            horizontal={gridAxis === 'x' || gridAxis === 'xy'}
            {...getStyles('grid')}
            {...gridProps}
          />

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

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={isAnimationActive}
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
                />
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
          {children}
        </ReChartsAreaChart>
      </ResponsiveContainer>
    </Box>
  );
});

AreaChart.classes = classes;
AreaChart.displayName = '@mantine/charts/AreaChart';
