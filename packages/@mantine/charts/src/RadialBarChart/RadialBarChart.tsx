import { RadialBar, RadialBarChart as ReChartsRadialBarChart, ResponsiveContainer } from 'recharts';
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
import classes from './RadialBarChart.module.css';

export type RadialBarChartStylesNames = 'root';
export type RadialBarChartCssVariables = {
  root: '--test';
};

export interface RadialBarChartProps
  extends BoxProps,
    StylesApiProps<RadialBarChartFactory>,
    ElementProps<'div'> {
  data: Record<string, any>[];
}

export type RadialBarChartFactory = Factory<{
  props: RadialBarChartProps;
  ref: HTMLDivElement;
  stylesNames: RadialBarChartStylesNames;
  vars: RadialBarChartCssVariables;
}>;

const defaultProps: Partial<RadialBarChartProps> = {};

const varsResolver = createVarsResolver<RadialBarChartFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const RadialBarChart = factory<RadialBarChartFactory>((_props, ref) => {
  const props = useProps('RadialBarChart', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, data, ...others } = props;

  const getStyles = useStyles<RadialBarChartFactory>({
    name: 'RadialBarChart',
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

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <ReChartsRadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="uv" />
        </ReChartsRadialBarChart>
      </ResponsiveContainer>
    </Box>
  );
});

RadialBarChart.displayName = '@mantine/core/RadialBarChart';
RadialBarChart.classes = classes;
