import { useId, useMemo } from 'react';
import { Area, AreaProps, AreaChart as ReChartsAreaChart, ResponsiveContainer } from 'recharts';
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

export interface SparklineTrendColors {
  positive: MantineColor;
  negative: MantineColor;
  neutral?: MantineColor;
}

export type SparklineStylesNames = 'root';
export type SparklineCssVariables = {
  root: '--chart-color';
};

export interface SparklineProps
  extends BoxProps,
    StylesApiProps<SparklineFactory>,
    ElementProps<'div'> {
  /** Data used to render the chart */
  data: (number | null)[];

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Determines whether the chart fill should be a gradient, `true` by default */
  withGradient?: boolean;

  /** Controls fill opacity of the area, `0.6` by default */
  fillOpacity?: number;

  /** Type of the curve, `'linear'` by default */
  curveType?: AreaChartCurveType;

  /** Area stroke width, `2` by default */
  strokeWidth?: number;

  /** If set, `color` prop is ignored and chart color is determined by the difference between first and last value. */
  trendColors?: SparklineTrendColors;

  /** Determines whether null values should be connected with other values, `true` by default */
  connectNulls?: boolean;

  /** Props passed down to the underlying recharts `Area` component */
  areaProps?: Omit<AreaProps, 'data' | 'dataKey' | 'ref'>;
}

export type SparklineFactory = Factory<{
  props: SparklineProps;
  ref: HTMLDivElement;
  stylesNames: SparklineStylesNames;
  vars: SparklineCssVariables;
}>;

const defaultProps: Partial<SparklineProps> = {
  withGradient: true,
  connectNulls: true,
  fillOpacity: 0.6,
  strokeWidth: 2,
  curveType: 'linear',
};

function getTrendColor(data: (number | null)[], trendColors: SparklineTrendColors) {
  const first = data[0];
  const last = data[data.length - 1];

  if (first === null || last === null) {
    return trendColors.neutral || trendColors.positive;
  }

  if (first < last) {
    return trendColors.positive;
  }

  if (first > last) {
    return trendColors.negative;
  }

  return trendColors.neutral || trendColors.positive;
}

const varsResolver = createVarsResolver<SparklineFactory>(
  (theme, { color, data, trendColors }) => ({
    root: {
      '--chart-color': trendColors
        ? getThemeColor(getTrendColor(data, trendColors), theme)
        : color
          ? getThemeColor(color, theme)
          : undefined,
    },
  })
);

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
    trendColors,
    connectNulls,
    areaProps,
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
    <Box ref={ref} {...getStyles('root')} {...others} dir="ltr">
      <ResponsiveContainer>
        <ReChartsAreaChart data={mappedData}>
          <Area
            dataKey="value"
            type={curveType}
            fill={`url(#${id})`}
            stroke="var(--chart-color, var(--mantine-color-blue-filled))"
            isAnimationActive={false}
            connectNulls={connectNulls}
            strokeWidth={strokeWidth}
            fillOpacity={1}
            {...areaProps}
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
