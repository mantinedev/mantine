import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as ReChartsRadarChart,
  ResponsiveContainer,
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
  useStyles,
} from '@mantine/core';
import classes from './RadarChart.module.css';

export interface RadarChartSeries {
  name: string;
  color: MantineColor;
  strokeColor?: MantineColor;
  opacity?: number;
}

export type RadarChartStylesNames = 'root';
export type RadarChartCssVariables = {
  root: '--test';
};

export interface RadarChartProps
  extends BoxProps,
    StylesApiProps<RadarChartFactory>,
    ElementProps<'div'> {
  /** Data used in the chart */
  data: Record<string, any>[];

  /** Determines which data should be consumed from the `data` array. */
  series: RadarChartSeries[];

  /** Key of the `data` object for axis values */
  dataKey: string;
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
  const { classNames, className, style, styles, unstyled, vars, data, series, dataKey, ...others } =
    props;
  const theme = useMantineTheme();

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

  const radars = series.map((item, index) => (
    <Radar
      key={index}
      name={item.name}
      dataKey={item.name}
      stroke={getThemeColor(item.strokeColor || item.color, theme)}
      fill={getThemeColor(item.color, theme)}
      fillOpacity={item.opacity || 0.4}
      isAnimationActive={false}
    />
  ));

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer width="100%" height="100%">
        <ReChartsRadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={dataKey} />
          <PolarRadiusAxis stroke="red" />
          {radars}
        </ReChartsRadarChart>
      </ResponsiveContainer>
    </Box>
  );
});

RadarChart.displayName = '@mantine/charts/RadarChart';
RadarChart.classes = classes;
