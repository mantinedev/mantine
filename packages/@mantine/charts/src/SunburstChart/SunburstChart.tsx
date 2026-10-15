import { useMemo, useState } from 'react';
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
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip/ChartTooltip';
import { getSunburstGeometry } from './get-sunburst-geometry';
import { getSunburstLabels } from './get-sunburst-labels';
import { getSunburstRechartsDataKey, resolveSunburstData } from './resolve-sunburst-data';
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
  /** Data used to render chart @category appearance */
  data: SunburstChartData[];

  /** Key in data object for the value @default 'value' @category appearance */
  dataKey?: string;

  /** Determines whether the tooltip should be displayed when a node is hovered @default true @category appearance */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms @default 0 @category appearance */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `SunburstChart` component */
  sunburstChartProps?: Partial<
    Omit<
      RechartsSunburstChartProps,
      'ref' | 'data' | 'dataKey' | 'startAngle' | 'endAngle' | 'innerRadius' | 'textOptions'
    >
  >;

  /** Controls color of the sectors stroke, by default depends on color scheme @category appearance */
  strokeColor?: MantineColor;

  /** Controls chart width and height @default 300 @category appearance */
  size?: number;

  /** Controls the radius of the inner circle at the center of the chart @default 50 @category appearance */
  innerRadius?: number;

  /** Gap between sectors and rings in px @default 1 @category appearance */
  gap?: number;

  /** Angle in degrees from which the chart should start @default 0 @category appearance */
  startAngle?: number;

  /** Angle in degrees at which the chart should end @default startAngle + 360 @category appearance */
  endAngle?: number;

  /** Determines whether value labels are displayed inside each sector @default false @category appearance */
  withLabels?: boolean;

  /** A function to format values inside the tooltip and labels @category appearance */
  valueFormatter?: (value: number) => string;

  /** Additional elements rendered inside `SunburstChart` component @category appearance */
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
} satisfies Partial<SunburstChartProps>;

const varsResolver = createVarsResolver<SunburstChartFactory>((theme, { strokeColor, size }) => ({
  root: {
    '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
    '--chart-size': rem(size),
  },
}));

const CHART_STROKE = 'var(--chart-stroke-color, var(--mantine-color-body))';
const LABEL_FONT_SIZE_PX = 10.4;

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

  const [containerSize, setContainerSize] = useState<{ width: number; height: number } | null>(
    null
  );

  const resolved = useMemo(
    () => resolveSunburstData(data, theme, dataKey!),
    [data, theme, dataKey]
  );

  const width = containerSize?.width ?? size!;
  const height = containerSize?.height ?? size!;
  const ringPadding = sunburstChartProps?.ringPadding ?? 0;
  const { thickness, rechartsOuterRadius } = getSunburstGeometry({
    width,
    height,
    innerRadius: innerRadius!,
    outerRadius: sunburstChartProps?.outerRadius,
    ringPadding,
    depth: resolved.depth,
  });
  const angleSpan = (endAngle ?? startAngle! + 360) - startAngle!;

  const labels = withLabels
    ? getSunburstLabels({
        root: resolved.root,
        cx: sunburstChartProps?.cx ?? width / 2,
        cy: sunburstChartProps?.cy ?? height / 2,
        innerRadius: innerRadius!,
        thickness,
        ringPadding,
        startAngle: startAngle!,
        angleSpan,
        fontSize: LABEL_FONT_SIZE_PX,
        valueFormatter,
      })
    : [];

  return (
    <Box
      size={size}
      role={others['aria-label'] || others['aria-labelledby'] ? 'img' : undefined}
      {...getStyles('root')}
      {...others}
    >
      <ResponsiveContainer
        onResize={(nextWidth, nextHeight) => {
          const next = { width: Math.round(nextWidth), height: Math.round(nextHeight) };
          setContainerSize((current) =>
            current?.width === next.width && current?.height === next.height ? current : next
          );
        }}
      >
        <RechartsSunburstChart
          data={resolved.root as any}
          dataKey={getSunburstRechartsDataKey(dataKey!)}
          padding={gap}
          ringPadding={0}
          stroke={CHART_STROKE}
          {...sunburstChartProps}
          innerRadius={innerRadius}
          startAngle={startAngle}
          endAngle={angleSpan}
          outerRadius={rechartsOuterRadius}
          textOptions={{ display: 'none' }}
        >
          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={!!tooltipAnimationDuration}
              content={({ payload }) => (
                <ChartTooltip
                  payload={
                    payload?.map((item) => ({
                      name: item.name as string,
                      value: item.value as number,
                      color: (item.payload as any)?.fill,
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

          {labels.length > 0 && (
            <g pointerEvents="none">
              {labels.map((label) => (
                <text
                  key={label.key}
                  data-sunburst-label
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={LABEL_FONT_SIZE_PX}
                  fontWeight="bold"
                  paintOrder="stroke fill"
                  stroke={CHART_STROKE}
                  strokeWidth={1}
                  fill="var(--mantine-color-bright)"
                >
                  {label.text}
                </text>
              ))}
            </g>
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
