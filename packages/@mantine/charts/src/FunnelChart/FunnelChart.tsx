import {
  Cell,
  Funnel,
  FunnelProps,
  LabelList,
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
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';
import classes from './FunnelChart.module.css';

export interface FunnelChartCell {
  key?: string | number;
  name: string;
  value: number;
  color: MantineColor;
}

export type FunnelChartStylesNames = 'root';
export type FunnelChartCssVariables = {
  root: '--chart-stroke-color' | '--chart-labels-color' | '--chart-size';
};

export interface FunnelChartProps
  extends BoxProps,
    StylesApiProps<FunnelChartFactory>,
    ElementProps<'div'> {
  /** Data used to render chart */
  data: FunnelChartCell[];

  /** Determines whether the tooltip should be displayed when a section is hovered, `true` by default */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms, `0` by default */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Pie` component */
  funnelProps?: Partial<Omit<FunnelProps, 'ref'>>;

  /** Controls color of the segments stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels, white by default */
  labelColor?: MantineColor;

  /** Controls chart width and height, `300` by default */
  size?: number;

  /** Controls width of segments stroke, `1` by default */
  strokeWidth?: number;

  /** Determines whether each segment should have associated label, `false` by default */
  withLabels?: boolean;

  /** Controls labels position relative to the segment, `'right'` by default */
  labelsPosition?: 'right' | 'left' | 'inside';

  /** A function to format values inside the tooltip and labels */
  valueFormatter?: (value: number) => string;

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. `'all'` by default. */
  tooltipDataSource?: 'segment' | 'all';

  /** Additional elements rendered inside `FunnelChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `FunnelChart` component */
  funnelChartProps?: React.ComponentPropsWithoutRef<typeof RechartsFunnelChart>;
}

export type FunnelChartFactory = Factory<{
  props: FunnelChartProps;
  ref: HTMLDivElement;
  stylesNames: FunnelChartStylesNames;
  vars: FunnelChartCssVariables;
}>;

const defaultProps: Partial<FunnelChartProps> = {
  withTooltip: true,
  size: 300,
  strokeWidth: 1,
  withLabels: false,
  labelsPosition: 'right',
  tooltipDataSource: 'all',
};

const varsResolver = createVarsResolver<FunnelChartFactory>(
  (theme, { strokeColor, labelColor, size }) => ({
    root: {
      '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
      '--chart-labels-color': labelColor ? getThemeColor(labelColor, theme) : undefined,
      '--chart-size': rem(size!),
    },
  })
);

export const FunnelChart = factory<FunnelChartFactory>((_props, ref) => {
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
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<FunnelChartFactory>({
    name: 'FunnelChart',
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<FunnelChartFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Box ref={ref} size={size} {...getStyles('root')} {...others}>
      <ResponsiveContainer>
        <RechartsFunnelChart {...funnelChartProps}>
          <Funnel
            data={data}
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
                fontSize={14}
                dataKey={(entry) => {
                  return typeof valueFormatter === 'function'
                    ? valueFormatter(entry.value as number)
                    : entry.value;
                }}
              />
            )}
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={getThemeColor(entry.color, theme)}
                stroke="var(--chart-stroke-color, var(--mantine-color-body))"
                strokeWidth={strokeWidth}
              />
            ))}
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
                  segmentId={tooltipDataSource === 'segment' ? payload?.[0]?.name : undefined}
                  valueFormatter={valueFormatter}
                />
              )}
              {...tooltipProps}
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
