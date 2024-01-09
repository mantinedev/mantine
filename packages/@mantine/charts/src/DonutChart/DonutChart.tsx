import React from 'react';
import {
  Cell,
  Pie,
  PieChart,
  PieProps,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
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
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';
import classes from './DonutChart.module.css';

interface DonutChartCell {
  name: string;
  value: number;
  color: MantineColor;
}

export type DonutChartStylesNames = 'root';
export type DonutChartCssVariables = {
  root: '--chart-stroke-color';
};

export interface DonutChartProps
  extends BoxProps,
    StylesApiProps<DonutChartFactory>,
    ElementProps<'div'> {
  /** Data used to render chart */
  data: DonutChartCell[];

  /** Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Pie` component */
  pieProps?: Omit<PieProps, 'ref'>;
}

export type DonutChartFactory = Factory<{
  props: DonutChartProps;
  ref: HTMLDivElement;
  stylesNames: DonutChartStylesNames;
  vars: DonutChartCssVariables;
}>;

const defaultProps: Partial<DonutChartProps> = {
  withTooltip: true,
};

const varsResolver = createVarsResolver<DonutChartFactory>(() => ({
  root: {
    '--chart-stroke-color': undefined,
  },
}));

export const DonutChart = factory<DonutChartFactory>((_props, ref) => {
  const props = useProps('DonutChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    withTooltip,
    tooltipAnimationDuration,
    tooltipProps,
    pieProps,
    ...others
  } = props;

  const theme = useMantineTheme();

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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DonutChartFactory>({
    classNames,
    styles,
    props,
  });

  const cells = data.map((item, index) => (
    <Cell
      key={index}
      fill={getThemeColor(item.color, theme)}
      stroke="var(--chart-stroke-color, var(--mantine-color-body))"
    />
  ));

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            isAnimationActive={false}
            label={{
              fill: 'var(--mantine-color-dimmed)',
              fontSize: 12,
              fontFamily: 'var(--mantine-font-family)',
            }}
            labelLine={{ stroke: 'var(--mantine-color-dimmed)' }}
            {...pieProps}
          >
            {cells}
          </Pie>

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={({ label, payload }) => (
                <ChartTooltip
                  label={label}
                  payload={payload}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                />
              )}
              {...tooltipProps}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
});

DonutChart.displayName = '@mantine/charts/DonutChart';
DonutChart.classes = classes;
