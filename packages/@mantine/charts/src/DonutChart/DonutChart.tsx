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
import classes from './DonutChart.module.css';

export type DonutChartStylesNames = 'root';
export type DonutChartCssVariables = {
  root: '--test';
};

export interface DonutChartProps
  extends BoxProps,
    StylesApiProps<DonutChartFactory>,
    ElementProps<'div'> {}

export type DonutChartFactory = Factory<{
  props: DonutChartProps;
  ref: HTMLDivElement;
  stylesNames: DonutChartStylesNames;
  vars: DonutChartCssVariables;
}>;

const defaultProps: Partial<DonutChartProps> = {};

const varsResolver = createVarsResolver<DonutChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const DonutChart = factory<DonutChartFactory>((_props, ref) => {
  const props = useProps('DonutChart', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<DonutChartFactory>({
    name: 'DonutChart',
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

DonutChart.displayName = '@mantine/charts/DonutChart';
DonutChart.classes = classes;
