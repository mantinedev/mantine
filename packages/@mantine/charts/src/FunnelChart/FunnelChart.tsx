import { useState } from 'react';
import {
  Funnel,
  FunnelProps,
  LabelList,
  Legend,
  LegendProps,
  FunnelChart as RechartsFunnelChart,
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
import { ChartLegend, ChartLegendStylesNames } from '../ChartLegend';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip/ChartTooltip';
import classes from './FunnelChart.module.css';

export interface FunnelChartCell {
  key?: string | number;
  name: string;
  value: number;
  color: MantineColor;
}

export type FunnelChartStylesNames = 'root' | ChartTooltipStylesNames | ChartLegendStylesNames;
export type FunnelChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-labels-color' | '--chart-size';
};

export interface FunnelChartProps
  extends BoxProps, StylesApiProps<FunnelChartFactory>, ElementProps<'div'> {
  /** Data used to render chart */
  data: FunnelChartCell[];

  /** Determines whether the tooltip should be displayed when a section is hovered @default true */
  withTooltip?: boolean;

  /** Determines whether the legend should be displayed @default false */
  withLegend?: boolean;

  /** Props passed down to recharts `Legend` component */
  legendProps?: Omit<LegendProps, 'ref'>;

  /** Tooltip animation duration in ms @default 0 */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Pie` component */
  funnelProps?: Partial<Omit<FunnelProps, 'ref'>>;

  /** Controls color of the segments stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels @default 'white' */
  labelColor?: MantineColor;

  /** Controls chart width and height @default 300 */
  size?: number;

  /** Controls width of segments stroke @default 1 */
  strokeWidth?: number;

  /** Determines whether each segment should have associated label @default false */
  withLabels?: boolean;

  /** Controls labels position relative to the segment @default 'right' */
  labelsPosition?: 'right' | 'left' | 'inside';

  /** A function to format values inside the tooltip and labels */
  valueFormatter?: (value: number) => string;

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. @default 'all' */
  tooltipDataSource?: 'segment' | 'all';

  /** Additional elements rendered inside `FunnelChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `FunnelChart` component */
  funnelChartProps?: React.ComponentProps<typeof RechartsFunnelChart>;
}

export type FunnelChartFactory = Factory<{
  props: FunnelChartProps;
  ref: HTMLDivElement;
  stylesNames: FunnelChartStylesNames;
  vars: FunnelChartCssVariables;
}>;

const defaultProps = {
  withTooltip: true,
  size: 300,
  strokeWidth: 1,
  withLabels: false,
  labelsPosition: 'right',
  tooltipDataSource: 'all',
} satisfies Partial<FunnelChartProps>;

const varsResolver = createVarsResolver<FunnelChartFactory>(
  (theme, { strokeColor, labelColor, size }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-labels-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-size': rem(size),
    },
  })
);

export const FunnelChart = factory<FunnelChartFactory>((_props) => {
  const props = useProps('FunnelChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    withTooltip,
    withLegend,
    legendProps,
    tooltipAnimationDuration,
    tooltipProps,
    strokeWidth,
    withLabels,
    size,
    valueFormatter,
    children,
    funnelChartProps,
    funnelProps,
    labelsPosition,
    tooltipDataSource,
    strokeColor,
    labelColor,
    attributes,
    ...others
  } = props;

  const theme = useMantineTheme();
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const getStyles = useStyles<FunnelChartFactory>({
    name: 'FunnelChart',
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<FunnelChartFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Box size={size} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <RechartsFunnelChart {...funnelChartProps}>
          <Funnel
            data={data.map((entry, index) => ({
              ...entry,
              __segmentIndex: index,
              fill: getThemeColor(entry.color, theme),
              fillOpacity: highlightedIndex !== null ? (highlightedIndex === index ? 1 : 0.2) : 1,
            }))}
            dataKey="value"
            isAnimationActive={false}
            stroke="var(--chart-stroke-color, var(--mantine-color-body))"
            strokeWidth={strokeWidth}
            {...funnelProps}
          >
            {withLabels && (
              <LabelList
                position={labelsPosition}
                fill={
                  labelsPosition === 'inside'
                    ? 'var(--chart-labels-color, var(--mantine-color-white))'
                    : 'var(--chart-labels-color, var(--mantine-color-dimmed))'
                }
                stroke="none"
                fontFamily="var(--mantine-font-family)"
                fontSize={12}
                dataKey={(entry) => {
                  return typeof valueFormatter === 'function'
                    ? valueFormatter(entry.value as number)
                    : entry.value;
                }}
              />
            )}
          </Funnel>

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={({ payload }) => (
                <ChartTooltip
                  payload={data}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  type="radial"
                  segmentId={
                    tooltipDataSource === 'segment'
                      ? (payload?.[0]?.payload?.__segmentIndex as number)
                      : undefined
                  }
                  valueFormatter={valueFormatter}
                  attributes={attributes}
                />
              )}
              {...tooltipProps}
            />
          )}

          {withLegend && (
            <Legend
              verticalAlign="bottom"
              content={() => (
                <ChartLegend
                  payload={data.map((item, index) => ({
                    value: item.name,
                    color: getThemeColor(item.color, theme),
                    dataKey: item.name,
                    highlightKey: index,
                  }))}
                  onHighlight={(value) =>
                    setHighlightedIndex(typeof value === 'number' ? value : null)
                  }
                  legendPosition={legendProps?.verticalAlign || 'bottom'}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  centered
                  attributes={attributes}
                />
              )}
              {...legendProps}
            />
          )}

          {children}
        </RechartsFunnelChart>
      </ResponsiveContainer>
    </Box>
  );
});

FunnelChart.displayName = '@mantine/charts/FunnelChart';
FunnelChart.classes = classes;
FunnelChart.varsResolver = varsResolver;

export namespace FunnelChart {
  export type Props = FunnelChartProps;
  export type StylesNames = FunnelChartStylesNames;
  export type Factory = FunnelChartFactory;
  export type CssVariables = FunnelChartCssVariables;
  export type Cell = FunnelChartCell;
}
