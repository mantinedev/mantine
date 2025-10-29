import { useState } from 'react';
import {
  Legend,
  LegendProps,
  PolarAngleAxis,
  PolarAngleAxisProps,
  PolarGrid,
  PolarGridProps,
  PolarRadiusAxis,
  PolarRadiusAxisProps,
  Radar,
  RadarProps,
  RadarChart as ReChartsRadarChart,
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
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip';
import { MantineChartDotProps } from '../types';
import classes from './RadarChart.module.css';

export interface RadarChartSeries {
  name: string;
  color: MantineColor;
  strokeColor?: MantineColor;
  opacity?: number;
  label?: string;
}

export type RadarChartStylesNames =
  | 'root'
  | 'container'
  | ChartTooltipStylesNames
  | ChartLegendStylesNames;
export type RadarChartCssVariables = {
  root: '--chart-grid-color' | '--chart-text-color';
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

  /** Controls color of the grid lines. By default, color depends on the color scheme. */
  gridColor?: MantineColor;

  /** Controls color of all text elements. By default, color depends on the color scheme. */
  textColor?: MantineColor;

  /** Determines whether PolarGrid component should be displayed @default `true`. */
  withPolarGrid?: boolean;

  /** Determines whether PolarAngleAxis component should be displayed @default `true` */
  withPolarAngleAxis?: boolean;

  /** Determines whether PolarRadiusAxisProps component should be displayed @default `false` */
  withPolarRadiusAxis?: boolean;

  /** Determines whether Tooltip component should be displayed @default `false` */
  withTooltip?: boolean;

  /** Props passed down to recharts Radar component */
  radarProps?:
    | ((series: RadarChartSeries) => Partial<Omit<RadarProps, 'ref'>>)
    | Partial<Omit<RadarProps, 'ref'>>;

  /** Props passed down to recharts RadarChart component */
  radarChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsRadarChart>;

  /** Props passed down to recharts PolarGrid component */
  polarGridProps?: Omit<PolarGridProps, 'ref'>;

  /** Props passed down to recharts PolarAngleAxis component */
  polarAngleAxisProps?: Omit<PolarAngleAxisProps, 'ref'>;

  /** Props passed down to recharts PolarRadiusAxis component */
  polarRadiusAxisProps?: Omit<PolarRadiusAxisProps, 'ref'>;

  /** Props passed down to recharts Legend component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Props passed down to recharts Tooltip component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Tooltip position animation duration in ms @default `0` */
  tooltipAnimationDuration?: number;

  /** Determines whether the legend should be displayed @default `false` */
  withLegend?: boolean;

  /** Determines whether dots should be displayed @default `false` */
  withDots?: boolean;

  /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
  dotProps?: MantineChartDotProps;

  /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
  activeDotProps?: MantineChartDotProps;

  /** Additional components that are rendered inside recharts `RadarChart` component */
  children?: React.ReactNode;
}

export type RadarChartFactory = Factory<{
  props: RadarChartProps;
  ref: HTMLDivElement;
  stylesNames: RadarChartStylesNames;
  vars: RadarChartCssVariables;
}>;

const defaultProps = {
  withPolarGrid: true,
  withPolarAngleAxis: true,
  withPolarRadiusAxis: false,
  withTooltip: false,
  withDots: false,
  tooltipAnimationDuration: 0,
} satisfies Partial<RadarChartProps>;

const varsResolver = createVarsResolver<RadarChartFactory>((theme, { gridColor, textColor }) => ({
  root: {
    '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
    '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
  },
}));

export const RadarChart = factory<RadarChartFactory>((_props, ref) => {
  const props = useProps('RadarChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    series,
    dataKey,
    gridColor,
    textColor,
    radarProps,
    radarChartProps,
    polarGridProps,
    polarAngleAxisProps,
    polarRadiusAxisProps,
    tooltipProps,
    withPolarGrid,
    withPolarAngleAxis,
    withPolarRadiusAxis,
    withTooltip,
    tooltipAnimationDuration,
    children,
    withLegend,
    withDots,
    dotProps,
    activeDotProps,
    legendProps,
    attributes,
    ...others
  } = props;

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
    attributes,
    vars,
    varsResolver,
  });

  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<RadarChartFactory>({
    classNames,
    styles,
    props,
  });

  const radars = series.map((item, index) => (
    <Radar
      key={index}
      name={item.name}
      dataKey={item.name}
      stroke={getThemeColor(item.strokeColor || item.color, theme)}
      fill={getThemeColor(item.color, theme)}
      fillOpacity={
        highlightedArea
          ? highlightedArea === item.name
            ? item.opacity || 0.4
            : 0.05
          : item.opacity || 0.4
      }
      dot={
        withDots
          ? {
              fillOpacity: 1,
              strokeOpacity: 0,
              strokeWidth: 1,
              fill: getThemeColor(item.color, theme),
              stroke: getThemeColor(item.color, theme),
              ...dotProps,
            }
          : false
      }
      activeDot={
        withDots
          ? {
              fill: getThemeColor(item.color, theme),
              stroke: getThemeColor(item.color, theme),
              ...activeDotProps,
            }
          : false
      }
      strokeOpacity={highlightedArea ? (highlightedArea === item.name ? 1 : 0.1) : 1}
      isAnimationActive={false}
      {...(typeof radarProps === 'function' ? radarProps(item) : radarProps)}
    />
  ));

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsRadarChart data={data} {...radarChartProps}>
          {withPolarGrid && <PolarGrid stroke="var(--chart-grid-color)" {...polarGridProps} />}
          {withPolarAngleAxis && <PolarAngleAxis dataKey={dataKey} {...polarAngleAxisProps} />}
          {withPolarRadiusAxis && (
            <PolarRadiusAxis stroke="var(--chart-grid-color)" {...polarRadiusAxisProps} />
          )}
          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={tooltipAnimationDuration !== 0}
              cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
              }}
              content={({ label, payload, labelFormatter }) => (
                <ChartTooltip
                  label={labelFormatter && payload ? labelFormatter(label, payload) : label}
                  payload={payload}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  series={series}
                  attributes={attributes}
                />
              )}
              {...tooltipProps}
            />
          )}
          {radars}
          {withLegend && (
            <Legend
              verticalAlign="bottom"
              content={(payload) => (
                <ChartLegend
                  payload={payload.payload}
                  onHighlight={setHighlightedArea}
                  legendPosition={legendProps?.verticalAlign || 'bottom'}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  series={series}
                  centered
                  attributes={attributes}
                />
              )}
              {...legendProps}
            />
          )}

          {children}
        </ReChartsRadarChart>
      </ResponsiveContainer>
    </Box>
  );
});

RadarChart.displayName = '@mantine/charts/RadarChart';
RadarChart.classes = classes;
