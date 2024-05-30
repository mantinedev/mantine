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
  StylesApiProps,
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

export type BubbleChartStylesNames = 'root';
export type BubbleChartCssVariables = {
  root: '--test';
};

export interface BubbleChartProps
  extends BoxProps,
    StylesApiProps<BubbleChartFactory>,
    ElementProps<'div'> {
  /** Chart data */
  data: Record<string, any>[];

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
}

export type BubbleChartFactory = Factory<{
  props: BubbleChartProps;
  ref: HTMLDivElement;
  stylesNames: BubbleChartStylesNames;
  vars: BubbleChartCssVariables;
}>;

const defaultProps: Partial<BubbleChartProps> = {};

const varsResolver = createVarsResolver<BubbleChartFactory>(() => ({
  root: {
    '--test': 'test',
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
    ...others
  } = props;

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
            tick={{ fontSize: 12 }}
            tickLine={{ transform: 'translate(0, -6)' }}
            {...xAxisProps}
          />

          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: 'Sunday', position: 'insideRight', fontSize: 12 }}
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

          <Scatter data={data} fill="#8884d8" {...scatterProps} />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
});

BubbleChart.displayName = '@mantine/charts/BubbleChart';
BubbleChart.classes = classes;
