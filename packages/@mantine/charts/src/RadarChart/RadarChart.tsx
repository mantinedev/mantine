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
import classes from './RadarChart.module.css';

export type RadarChartStylesNames = 'root';
export type RadarChartCssVariables = {
  root: '--test';
};

export interface RadarChartProps
  extends BoxProps,
    StylesApiProps<RadarChartFactory>,
    ElementProps<'div'> {
  data: Record<string, any>[];
}

export type RadarChartFactory = Factory<{
  props: RadarChartProps;
  ref: HTMLDivElement;
  stylesNames: RadarChartStylesNames;
  vars: RadarChartCssVariables;
}>;

const defaultProps: Partial<RadarChartProps> = {};

const varsResolver = createVarsResolver<RadarChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const RadarChart = factory<RadarChartFactory>((_props, ref) => {
  const props = useProps('RadarChart', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<RadarChartFactory>({
    name: 'RadarChart',
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

RadarChart.displayName = '@mantine/charts/RadarChart';
RadarChart.classes = classes;
