import { useState } from 'react';
import {
  Legend,
  LegendProps,
  RadialBar,
  RadialBarProps,
  RadialBarChart as ReChartsRadialBarChart,
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
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartLegend } from '../ChartLegend';
import classes from './RadialBarChart.module.css';

export type RadialBarChartStylesNames = 'root';
export type RadialBarChartCssVariables = {
  root: '--chart-empty-background';
};

export interface RadialBarChartProps
  extends BoxProps,
    StylesApiProps<RadialBarChartFactory>,
    ElementProps<'div'> {
  /** Chart data */
  data: Record<string, any>[];

  /** Key from data object to use as data key */
  dataKey: string;

  /** Size of bars in px, `20` by default */
  barSize?: number;

  /** Determines whether empty bars area should be visible, `true` by default */
  withBackground?: boolean;

  /** Determines whether labels should be displayed, `false` by default */
  withLabels?: boolean;

  /** Determines whether the legend should be displayed, `false` by default */
  withLegend?: boolean;

  /** Color of the empty background, by default depends on the color scheme */
  emptyBackgroundColor?: string;

  /** Props passed down to recharts RadialBar component */
  radialBarProps?: Omit<RadialBarProps, 'ref'>;

  /** Props passed down to recharts RadarChartChart component */
  radialBarChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsRadialBarChart>;

  /** Props passed down to recharts Legend component */
  legendProps?: Omit<LegendProps, 'ref'>;
}

export type RadialBarChartFactory = Factory<{
  props: RadialBarChartProps;
  ref: HTMLDivElement;
  stylesNames: RadialBarChartStylesNames;
  vars: RadialBarChartCssVariables;
}>;

const defaultProps: Partial<RadialBarChartProps> = {
  barSize: 20,
  withBackground: true,
};

const varsResolver = createVarsResolver<RadialBarChartFactory>(
  (theme, { emptyBackgroundColor }) => ({
    root: {
      '--chart-empty-background': emptyBackgroundColor
        ? getThemeColor(emptyBackgroundColor, theme)
        : undefined,
    },
  })
);

export const RadialBarChart = factory<RadialBarChartFactory>((_props, ref) => {
  const props = useProps('RadialBarChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    barSize,
    withBackground,
    dataKey,
    radialBarProps,
    radialBarChartProps,
    withLabels,
    withLegend,
    legendProps,
    ...others
  } = props;
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);

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

  const theme = useMantineTheme();
  const dataWithResolvedColor = data.map(({ color, ...item }) => {
    const resolvedColor = getThemeColor(color, theme);

    return {
      ...item,
      fill: resolvedColor,
      fillOpacity: highlightedArea
        ? highlightedArea === item.name
          ? item.opacity || 1
          : 0.05
        : item.opacity || 1,
    };
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<RadialBarChartFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <ReChartsRadialBarChart
          innerRadius="10%"
          outerRadius="100%"
          barSize={barSize}
          data={dataWithResolvedColor}
          {...radialBarChartProps}
        >
          <RadialBar
            label={
              withLabels
                ? {
                    position: 'insideStart',
                    fill: 'var(--mantine-color-white)',
                    fontSize: 12,
                  }
                : undefined
            }
            background={withBackground ? { fill: 'var(--chart-empty-background)' } : undefined}
            dataKey={dataKey}
            isAnimationActive={false}
            {...radialBarProps}
          />

          {withLegend && (
            <Legend
              verticalAlign="bottom"
              content={(payload) => (
                <ChartLegend
                  payload={payload.payload?.map((item) => ({
                    ...item,
                    dataKey: (item.payload as any)?.name,
                  }))}
                  onHighlight={setHighlightedArea}
                  legendPosition={legendProps?.verticalAlign || 'bottom'}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  centered
                />
              )}
              {...legendProps}
            />
          )}
        </ReChartsRadialBarChart>
      </ResponsiveContainer>
    </Box>
  );
});

RadialBarChart.displayName = '@mantine/core/RadialBarChart';
RadialBarChart.classes = classes;
