import React, { Fragment, useId } from 'react';
import {
  Area,
  CartesianGrid,
  // Legend,
  AreaChart as ReChartsAreaChart,
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
  data: any[];

  categories: AreaChartCategory[];

  withGradient?: boolean;

  dataKey: string;
}

export type AreaChartFactory = Factory<{
  props: AreaChartProps;
  ref: HTMLDivElement;
  stylesNames: AreaChartStylesNames;
  vars: AreaChartCssVariables;
  variant: AreaChartVariant;
}>;

const defaultProps: Partial<AreaChartProps> = {};

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
    withGradient = true,
    dataKey,
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

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsAreaChart data={data}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} {...getStyles('grid')} />
          <XAxis
            // hide={!showXAxis}
            dataKey={dataKey}
            tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }}
            // ticks={startEndOnly ? [data[0][index], data[data.length - 1][index]] : undefined}
            stroke=""
            interval="preserveStartEnd"
            // axisLine={{ stroke: 'blue' }}
            minTickGap={5}
            {...getStyles('axis')}
          />
          <YAxis
            // hide={!showYAxis}
            axisLine={false}
            type="number"
            tickLine={false}
            // axisLine={{ stroke: 'blue' }}
            // domain={yAxisDomain as AxisDomain}
            tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }}
            {...getStyles('axis')}
            // tickFormatter={(value) => value.toString()}
            allowDecimals
          />

          <Tooltip
            isAnimationActive={false}
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
            position={{ y: 0 }}
          />

          {categories.map((category) => {
            const id = `${baseId}-${category.color.replace(/[^a-zA-Z0-9]/g, '')}`;
            const color = getThemeColor(category.color, theme);

            return (
              <Fragment key={category.name}>
                <defs>
                  <AreaGradient color={color} withGradient={withGradient} id={id} />
                </defs>
                <Area
                  {...getStyles('area')}
                  activeDot={{ fill: theme.white, stroke: color }}
                  dot={{ fill: color, fillOpacity: 1 }}
                  key={category.name}
                  name={category.name}
                  type="linear"
                  dataKey={category.name}
                  fill={`url(#${id})`}
                  strokeWidth={2}
                  stroke={color}
                  isAnimationActive={false}
                  animationDuration={0}
                  connectNulls
                />
              </Fragment>
            );
          })}
        </ReChartsAreaChart>
      </ResponsiveContainer>
    </Box>
  );
});

AreaChart.classes = classes;
AreaChart.displayName = '@mantine/core/AreaChart';
