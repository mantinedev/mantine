import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './ScatterChart.module.css';

export type ScatterChartStylesNames = 'root';
export type ScatterChartVariant = string;
export type ScatterChartCssVariables = {
  root: '--test';
};

export interface ScatterChartProps extends BoxProps, StylesApiProps<ScatterChartFactory>, ElementProps<'div'> {}

export type ScatterChartFactory = Factory<{
  props: ScatterChartProps;
  ref: HTMLDivElement;
  stylesNames: ScatterChartStylesNames;
  vars: ScatterChartCssVariables;
  variant: ScatterChartVariant;
}>;

const defaultProps: Partial<ScatterChartProps> = {};

const varsResolver = createVarsResolver<ScatterChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const ScatterChart = factory<ScatterChartFactory>((_props, ref) => {
  const props = useProps('ScatterChart', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<ScatterChartFactory>({
    name: 'ScatterChart',
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

ScatterChart.displayName = '@mantine/charts/ScatterChart';
ScatterChart.classes = classes;
