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
  rem,
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
  root: '--chart-stroke-color' | '--chart-label-color' | '--chart-height';
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

  /** Controls color of the cells stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels, by default depends on color scheme */
  labelColor?: MantineColor;

  /** Controls padding between cells, `0` by default */
  paddingAngle?: number;

  /** Determines whether each cell should have associated label, `false` by default */
  withLabels?: boolean;

  /** Determines whether cells labels should have lines that connect the cell with the label, `true` by default */
  withLabelsLine?: boolean;

  /** Controls thickness of the chart cells, `20` by default */
  thickness?: number;

  /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. `80` by default */
  size?: number;

  /** Controls width of cells stroke, `1` by default */
  strokeWidth?: number;
}

export type DonutChartFactory = Factory<{
  props: DonutChartProps;
  ref: HTMLDivElement;
  stylesNames: DonutChartStylesNames;
  vars: DonutChartCssVariables;
}>;

const defaultProps: Partial<DonutChartProps> = {
  withTooltip: true,
  withLabelsLine: true,
  paddingAngle: 0,
  thickness: 20,
  size: 160,
  strokeWidth: 1,
};

const varsResolver = createVarsResolver<DonutChartFactory>(
  (theme, { strokeColor, labelColor, withLabels, size }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-label-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-height': withLabels ? rem(size! + 40) : rem(size!),
    },
  })
);

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
    paddingAngle,
    withLabels,
    withLabelsLine,
    size,
    thickness,
    strokeWidth,
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
      strokeWidth={strokeWidth}
    />
  ));

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={size! / 2 - thickness!}
            outerRadius={size! / 2}
            dataKey="value"
            isAnimationActive={false}
            paddingAngle={paddingAngle}
            label={
              withLabels
                ? {
                    fill: 'var(--chart-label-color, var(--mantine-color-dimmed))',
                    fontSize: 12,
                    fontFamily: 'var(--mantine-font-family)',
                  }
                : false
            }
            labelLine={
              withLabelsLine
                ? { stroke: 'var(--chart-label-color, var(--mantine-color-dimmed))' }
                : false
            }
            {...pieProps}
          >
            {cells}
          </Pie>

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={() => (
                <ChartTooltip
                  payload={data}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  type="radial"
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
