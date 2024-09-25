import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  ScatterProps,
  Tooltip,
  TooltipProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
  ZAxis,
  ZAxisProps,
} from 'recharts';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  GetStylesApi,
  getThemeColor,
  Group,
  MantineColor,
  StylesApiProps,
  Text,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from '../grid-chart.module.css';

function getDomain(data: Record<string, any>[], key: string) {
  const values = data.map((item) => item[key]);
  return [Math.min(...values), Math.max(...values)];
}

interface BubbleChartTooltipProps {
  payload: any;
  active: boolean | undefined;
  getStyles: GetStylesApi<BubbleChartFactory>;
  valueFormatter?: (value: number) => string;
  dataKey: BubbleChartDataKey;
}

function BubbleChartTooltip({
  active,
  payload,
  getStyles,
  dataKey,
  valueFormatter,
}: BubbleChartTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;

    return (
      <div {...getStyles('tooltip')}>
        <Group justify="space-between">
          <Text fz="sm">{data[dataKey.x]}</Text>
          <Text fz="sm">{valueFormatter ? valueFormatter(data[dataKey.z]) : data[dataKey.z]}</Text>
        </Group>
      </div>
    );
  }

  return null;
}

export type BubbleChartStylesNames = 'root' | 'axis' | 'tooltip';
export type BubbleChartCssVariables = {
  root: '--chart-text-color' | '--chart-grid-color';
};

export interface BubbleChartDataKey {
  x: string;
  y: string;
  z: string;
}

export interface BubbleChartProps
  extends BoxProps,
    StylesApiProps<BubbleChartFactory>,
    ElementProps<'div'> {
  /** Chart data */
  data: Record<string, any>[];

  /** Data keys for x, y and z axis */
  dataKey: BubbleChartDataKey;

  /** Z axis range */
  range: [number, number];

  /** Color of the chart items. Key of `theme.colors` or any valid CSS color, `blue.6` by default. */
  color?: MantineColor;

  /** Props passed down to the `XAxis` recharts component */
  xAxisProps?: Omit<XAxisProps, 'ref'>;

  /** Props passed down to the `YAxis` recharts component */
  yAxisProps?: Omit<YAxisProps, 'ref'>;

  /** Props passed down to the `ZAxis` recharts component */
  zAxisProps?: Omit<ZAxisProps, 'ref'>;

  /** Props passed down to the `Tooltip` component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to the `Scatter` component */
  scatterProps?: Partial<Omit<ScatterProps, 'ref'>>;

  /** Color of the text displayed inside the chart, `'dimmed'` by default */
  textColor?: MantineColor;

  /** Color of the grid and cursor lines, by default depends on color scheme */
  gridColor?: MantineColor;

  /** Chart label displayed next to the x axis */
  label?: string;

  /** Determines whether the tooltip should be displayed, `true` by default */
  withTooltip?: boolean;

  /** Function to format z axis values */
  valueFormatter?: (value: number) => string;
}

export type BubbleChartFactory = Factory<{
  props: BubbleChartProps;
  ref: HTMLDivElement;
  stylesNames: BubbleChartStylesNames;
  vars: BubbleChartCssVariables;
}>;

const defaultProps: Partial<BubbleChartProps> = {
  color: 'blue.6',
  withTooltip: true,
};

const varsResolver = createVarsResolver<BubbleChartFactory>((theme, { textColor, gridColor }) => ({
  root: {
    '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
    '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
  },
}));

export const BubbleChart = factory<BubbleChartFactory>((_props, ref) => {
  const props = useProps('BubbleChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    xAxisProps,
    yAxisProps,
    zAxisProps,
    tooltipProps,
    scatterProps,
    color,
    label,
    withTooltip,
    dataKey,
    range,
    valueFormatter,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<BubbleChartFactory>({
    name: 'BubbleChart',
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
        <ScatterChart>
          <XAxis
            type="category"
            dataKey={dataKey.x}
            interval={0}
            tick={{ fontSize: 12, fill: 'currentColor' }}
            tickLine={{ transform: 'translate(0, -6)', stroke: 'currentColor' }}
            stroke="currentColor"
            {...getStyles('axis')}
            {...xAxisProps}
          />

          <YAxis
            type="number"
            dataKey={dataKey.y}
            height={10}
            width={label ? undefined : 0}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: label, position: 'insideRight', fontSize: 12, fill: 'currentColor' }}
            {...getStyles('axis')}
            {...yAxisProps}
          />

          <ZAxis
            type="number"
            dataKey={dataKey.z}
            domain={getDomain(data, dataKey.z)}
            range={range}
            {...zAxisProps}
          />

          {withTooltip && (
            <Tooltip
              animationDuration={100}
              isAnimationActive={false}
              cursor={{ stroke: 'var(--chart-grid-color)', strokeWidth: 1, strokeDasharray: '3 3' }}
              content={(payload) => (
                <BubbleChartTooltip
                  dataKey={dataKey}
                  active={payload.active}
                  payload={payload.payload}
                  getStyles={getStyles}
                  valueFormatter={valueFormatter}
                />
              )}
              {...tooltipProps}
            />
          )}

          <Scatter
            data={data}
            fill={getThemeColor(color, theme)}
            isAnimationActive={false}
            {...scatterProps}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
});

BubbleChart.displayName = '@mantine/charts/BubbleChart';
BubbleChart.classes = classes;
