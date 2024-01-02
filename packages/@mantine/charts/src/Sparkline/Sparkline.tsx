import React, { useId, useMemo } from 'react';
import { Area, AreaChart as ReChartsAreaChart, ResponsiveContainer } from 'recharts';
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
  useProps,
  useStyles,
} from '@mantine/core';
import { AreaChartCurveType, AreaGradient } from '../AreaChart';

const classes = {};

export type SparklineStylesNames = 'root';
export type SparklineCssVariables = {
  root: '--chart-color';
};

export interface SparklineProps
  extends BoxProps,
    StylesApiProps<SparklineFactory>,
    ElementProps<'div'> {
  /** Data used to render the chart */
  data: number[];

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Determines whether the chart fill should be a gradient, `true` by default */
  withGradient?: boolean;

  /** Controls fill opacity of the area, `0.6` by default */
  fillOpacity?: number;

  /** Type of the curve, `'monotone'` by default */
  curveType?: AreaChartCurveType;

  /** Area stroke width, `2` by default */
  strokeWidth?: number;
}

export type SparklineFactory = Factory<{
  props: SparklineProps;
  ref: HTMLDivElement;
  stylesNames: SparklineStylesNames;
  vars: SparklineCssVariables;
}>;

const defaultProps: Partial<SparklineProps> = {
  withGradient: true,
  fillOpacity: 0.6,
  strokeWidth: 2,
};

const varsResolver = createVarsResolver<SparklineFactory>((theme, { color }) => ({
  root: {
    '--chart-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const Sparkline = factory<SparklineFactory>((_props, ref) => {
  const props = useProps('Sparkline', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    withGradient,
    fillOpacity,
    curveType,
    strokeWidth,
    ...others
  } = props;

  const getStyles = useStyles<SparklineFactory>({
    name: 'Sparkline',
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
  const mappedData = useMemo(() => data.map((value, index) => ({ value, index })), [data]);

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <ReChartsAreaChart data={mappedData}>
          <Area
            dataKey="value"
            type={curveType}
            fill={`url(#${id})`}
            stroke="var(--chart-color, var(--mantine-color-blue-filled))"
            isAnimationActive={false}
            connectNulls
            strokeWidth={strokeWidth}
          />

          <defs>
            <AreaGradient
              id={id}
              color="var(--chart-color, var(--mantine-color-blue-filled))"
              fillOpacity={fillOpacity}
              withGradient={withGradient}
            />
          </defs>
        </ReChartsAreaChart>
      </ResponsiveContainer>
    </Box>
  );
});

Sparkline.displayName = '@mantine/charts/Sparkline';
Sparkline.classes = classes;
