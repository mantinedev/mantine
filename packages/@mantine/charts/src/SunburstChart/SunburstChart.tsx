import { useMemo } from 'react';
import {
  ResponsiveContainer,
  SunburstChart as RechartsSunburstChart,
  SunburstChartProps as RechartsSunburstChartProps,
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
  MantineTheme,
  parseThemeColor,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip/ChartTooltip';
import classes from './SunburstChart.module.css';

export interface SunburstChartData {
  name: string;
  value?: number;
  color?: MantineColor;
  children?: SunburstChartData[];
  [key: string]: unknown;
}

export type SunburstChartStylesNames = 'root' | ChartTooltipStylesNames;
export type SunburstChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-size';
};

export interface SunburstChartProps
  extends BoxProps, StylesApiProps<SunburstChartFactory>, ElementProps<'div'> {
  /** Data used to render chart */
  data: SunburstChartData[];

  /** Key in data object for the value @default 'value' */
  dataKey?: string;

  /** Determines whether the tooltip should be displayed when a node is hovered @default true */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms @default 0 */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `SunburstChart` component */
  sunburstChartProps?: Partial<Omit<RechartsSunburstChartProps, 'ref' | 'data' | 'dataKey'>>;

  /** Controls color of the sectors stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls chart width and height @default 300 */
  size?: number;

  /** Controls the radius of the inner circle at the center of the chart @default 50 */
  innerRadius?: number;

  /** Gap between sectors and rings in px @default 1 */
  gap?: number;

  /** Angle in degrees from which the chart should start @default 0 */
  startAngle?: number;

  /** Angle in degrees at which the chart should end @default 360 */
  endAngle?: number;

  /** Determines whether value labels are displayed inside each sector @default false */
  withLabels?: boolean;

  /** A function to format values inside the tooltip and labels */
  valueFormatter?: (value: number) => string;

  /** Additional elements rendered inside `SunburstChart` component */
  children?: React.ReactNode;
}

export type SunburstChartFactory = Factory<{
  props: SunburstChartProps;
  ref: HTMLDivElement;
  stylesNames: SunburstChartStylesNames;
  vars: SunburstChartCssVariables;
}>;

const defaultProps = {
  dataKey: 'value',
  withTooltip: true,
  tooltipAnimationDuration: 0,
  size: 300,
  innerRadius: 50,
  gap: 1,
  startAngle: 0,
  endAngle: 360,
} satisfies Partial<SunburstChartProps>;

const varsResolver = createVarsResolver<SunburstChartFactory>((theme, { strokeColor, size }) => ({
  root: {
    '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
    '--chart-size': rem(size),
  },
}));

function resolveData(
  data: SunburstChartData[],
  theme: MantineTheme,
  dataKey: string,
  parentFill?: string
): { resolved: any[]; total: number } {
  let total = 0;

  const resolved = data.map((item) => {
    const resolvedColor = item.color
      ? parseThemeColor({ color: item.color, theme }).value
      : parentFill;
    const fill = resolvedColor || undefined;

    const result: any = {
      ...item,
      fill,
    };

    if (item.children) {
      const child = resolveData(item.children, theme, dataKey, fill);
      result.children = child.resolved;
      if (result[dataKey] == null) {
        result[dataKey] = child.total;
      }
      total += child.total;
    } else {
      total += Number(item[dataKey]) || 0;
    }

    return result;
  });

  return { resolved, total };
}

export const SunburstChart = factory<SunburstChartFactory>((_props) => {
  const props = useProps('SunburstChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    dataKey,
    withTooltip,
    tooltipAnimationDuration,
    tooltipProps,
    sunburstChartProps,
    strokeColor,
    size,
    innerRadius,
    gap,
    startAngle,
    endAngle,
    withLabels,
    valueFormatter,
    children,
    attributes,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<SunburstChartFactory>({
    name: 'SunburstChart',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<SunburstChartFactory>({
    classNames,
    styles,
    props,
  });

  const rootData = useMemo(() => {
    const { resolved, total } = resolveData(data, theme, dataKey!);
    return {
      name: 'root',
      [dataKey!]: total,
      children: resolved,
    };
  }, [data, theme, dataKey]);

  return (
    <Box size={size} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <RechartsSunburstChart
          data={rootData as any}
          dataKey={dataKey as any}
          innerRadius={innerRadius}
          padding={gap}
          ringPadding={0}
          startAngle={startAngle}
          endAngle={endAngle}
          stroke="var(--chart-stroke-color, var(--mantine-color-body))"
          textOptions={
            withLabels
              ? {
                  fontWeight: 'bold',
                  fontSize: '.65rem',
                  paintOrder: 'stroke fill',
                  stroke: 'var(--chart-stroke-color, var(--mantine-color-body))',
                  strokeWidth: 1,
                  fill: 'var(--mantine-color-bright)',
                  pointerEvents: 'none',
                }
              : { display: 'none' }
          }
          {...sunburstChartProps}
        >
          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={({ payload }) => (
                <ChartTooltip
                  payload={
                    payload?.map((item) => ({
                      name: item.name as string,
                      value: item.value as number,
                      color: (item.payload as any)?.fill || 'var(--mantine-color-blue-6)',
                    })) || []
                  }
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  type="radial"
                  valueFormatter={valueFormatter}
                  attributes={attributes}
                />
              )}
              {...tooltipProps}
            />
          )}

          {children}
        </RechartsSunburstChart>
      </ResponsiveContainer>
    </Box>
  );
});

SunburstChart.displayName = '@mantine/charts/SunburstChart';
SunburstChart.classes = classes;
SunburstChart.varsResolver = varsResolver;
