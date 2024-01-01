import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './BarChart.module.css';

export interface BarChartSeries {
  name: string;
  color: MantineColor;
}

export type BarChartStylesNames = 'root';
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
}

export type BarChartFactory = Factory<{
  props: BarChartProps;
  ref: HTMLDivElement;
  stylesNames: BarChartStylesNames;
  vars: BarChartCssVariables;
}>;

const defaultProps: Partial<BarChartProps> = {};

const varsResolver = createVarsResolver<BarChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const BarChart = factory<BarChartFactory>((_props, ref) => {
  const props = useProps('BarChart', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

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

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

BarChart.displayName = '@mantine/charts/BarChart';
BarChart.classes = classes;
