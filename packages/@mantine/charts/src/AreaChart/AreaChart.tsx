import React, { Fragment, useId } from 'react';
import {
  Area,
  CartesianGrid,
  CartesianGridProps,
  AreaChart as ReChartsAreaChart,
  ResponsiveContainer,
  Tooltip,
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
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';
import { AreaGradient } from './AreaGradient';
import classes from './AreaChart.module.css';

interface AreaChartCategory {
  name: string;
  color: MantineColor;
}

export type AreaChartStylesNames = 'root' | 'container' | 'grid' | 'axis' | 'area' | 'cursor';
export type AreaChartVariant = string;
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
  categories: AreaChartCategory[];

  /** Key of the `data` object for x-axis values */
  dataKey: string;

  /** Determines whether the chart area should be represented with a gradient instead of the solid color, `false` by default */
  withGradient?: boolean;

  /** Determines whether x-axis should be hidden, `true` by default */
  withXAxis?: boolean;

  /** Determines whether y-axis should be hidden, `true` by default */
  withYAxis?: boolean;

  /** Props passed down to the `XAxis` recharts component */
  xAxisProps?: XAxisProps;

  /** Props passed down to the `YAxis` recharts component */
  yAxisProps?: YAxisProps;

  /** Type of the curve, `'monotone'` by default */
  curveType?: 'bump' | 'linear' | 'natural' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter';

  /** Props passed down to the `CartesianGrid` component */
  gridProps?: Omit<CartesianGridProps, 'ref'>;

  /** Determines whether the chart areas should stack on top of each other, `false` by default */
  stacked?: boolean;

  /** Determines whether dots should be displayed, `true` by default */
  withDots?: boolean;
}

export type AreaChartFactory = Factory<{
  props: AreaChartProps;
  ref: HTMLDivElement;
  stylesNames: AreaChartStylesNames;
  vars: AreaChartCssVariables;
  variant: AreaChartVariant;
}>;

const defaultProps: Partial<AreaChartProps> = {
  withXAxis: true,
  withYAxis: true,
  withDots: true,
  curveType: 'monotone',
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
    categories,
    withGradient,
    dataKey,
    withXAxis,
    withYAxis,
    curveType,
    stacked,
    gridProps,
    withDots,
    ...others
  } = props;

  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme('light');
  const baseId = useId();

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

  const dotsAreas = categories.map((category) => (
    <Area
      {...getStyles('area')}
      activeDot={false}
      dot={false}
      key={category.name}
      name={category.name}
      type={curveType}
      dataKey={category.name}
      fill="none"
      strokeWidth={2}
      stroke="none"
      isAnimationActive={false}
      animationDuration={0}
      connectNulls
      stackId={stacked ? 'stack-dots' : undefined}
    />
  ));

  const areas = categories.map((category) => {
    const id = `${baseId}-${category.color.replace(/[^a-zA-Z0-9]/g, '')}`;
    const color = getThemeColor(category.color, theme);

    return (
      <Fragment key={category.name}>
        <defs>
          <AreaGradient color={color} withGradient={withGradient} id={id} />
        </defs>
        <Area
          {...getStyles('area')}
          activeDot={{ fill: theme.white, stroke: color, strokeWidth: 2 }}
          dot={{ fill: color, fillOpacity: 1 }}
          key={category.name}
          name={category.name}
          type={curveType}
          dataKey={category.name}
          fill={`url(#${id})`}
          strokeWidth={2}
          stroke={color}
          isAnimationActive={false}
          animationDuration={0}
          connectNulls
          stackId={stacked ? 'stack' : undefined}
        />
      </Fragment>
    );
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsAreaChart data={data}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            {...getStyles('grid')}
            {...gridProps}
          />
          <XAxis
            hide={!withXAxis}
            dataKey={dataKey}
            tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }}
            stroke=""
            interval="preserveStartEnd"
            minTickGap={5}
            {...getStyles('axis')}
          />
          <YAxis
            hide={!withYAxis}
            axisLine={false}
            type="number"
            tickLine={false}
            tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }}
            {...getStyles('axis')}
            allowDecimals
          />

          <Tooltip
            isAnimationActive={false}
            position={{ y: 0 }}
            cursor={{
              stroke:
                computedColorScheme === 'light'
                  ? theme.colors.gray[3]
                  : rgba(theme.colors.dark[3], 0.6),
              strokeWidth: 1,
              strokeDasharray: '4 4',
            }}
            content={({ label, payload }) => (
              <ChartTooltip label={label} payload={payload as any[]} />
            )}
          />

          {areas}
          {withDots && dotsAreas}
        </ReChartsAreaChart>
      </ResponsiveContainer>
    </Box>
  );
});

AreaChart.classes = classes;
AreaChart.displayName = '@mantine/core/AreaChart';
