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
  getThemeColor,
  MantineColor,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from '../grid-chart.module.css';

const renderTooltip = (props: any) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #999',
          margin: 0,
          padding: 10,
        }}
      >
        <p>{data.hour}</p>
        <p>
          <span>value: </span>
          {data.value}
        </p>
      </div>
    );
  }

  return null;
};

export type BubbleChartStylesNames = 'root' | 'axis';
export type BubbleChartCssVariables = {
  root: '--chart-text-color' | '--chart-grid-color';
};

export interface BubbleChartProps
  extends BoxProps,
    StylesApiProps<BubbleChartFactory>,
    ElementProps<'div'> {
  /** Chart data */
  data: Record<string, any>[];

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
  scatterProps?: Omit<ScatterProps, 'ref'>;

  /** Color of the text displayed inside the chart, `'dimmed'` by default */
  textColor?: MantineColor;

  /** Color of the grid and cursor lines, by default depends on color scheme */
  gridColor?: MantineColor;

  /** Chart label displayed next to the x axis */
  label?: string;
}

export type BubbleChartFactory = Factory<{
  props: BubbleChartProps;
  ref: HTMLDivElement;
  stylesNames: BubbleChartStylesNames;
  vars: BubbleChartCssVariables;
}>;

const defaultProps: Partial<BubbleChartProps> = {
  color: 'blue.6',
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
            dataKey="hour"
            interval={0}
            tick={{ fontSize: 12, fill: 'currentColor' }}
            tickLine={{ transform: 'translate(0, -6)', stroke: 'currentColor' }}
            stroke="currentColor"
            {...getStyles('axis')}
            {...xAxisProps}
          />

          <YAxis
            type="number"
            dataKey="index"
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
            dataKey="value"
            domain={[120, 200]}
            range={[16, 225]}
            {...zAxisProps}
          />

          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            wrapperStyle={{ zIndex: 100 }}
            content={renderTooltip}
            isAnimationActive={false}
            {...tooltipProps}
          />

          <Scatter data={data} fill={getThemeColor(color, theme)} {...scatterProps} />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
});

BubbleChart.displayName = '@mantine/charts/BubbleChart';
BubbleChart.classes = classes;
