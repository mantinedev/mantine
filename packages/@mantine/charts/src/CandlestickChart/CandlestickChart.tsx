import {
  Bar,
  BarShapeProps,
  CartesianGrid,
  Label,
  ComposedChart as ReChartsComposedChart,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip';
import {
  getCandlestickDomain,
  isRenderableValue,
} from './get-candlestick-domain/get-candlestick-domain';
import type { BaseChartStylesNames, GridChartBaseProps } from '../types';
import classes from '../grid-chart.module.css';

export interface CandlestickChartSeries {
  /** Key of the data object for the open value */
  open: string;

  /** Key of the data object for the high value */
  high: string;

  /** Key of the data object for the low value */
  low: string;

  /** Key of the data object for the close value */
  close: string;
}

export interface CandlestickChartLabels {
  /** Label of the open value displayed in the tooltip */
  open: string;

  /** Label of the high value displayed in the tooltip */
  high: string;

  /** Label of the low value displayed in the tooltip */
  low: string;

  /** Label of the close value displayed in the tooltip */
  close: string;
}

export type CandlestickChartStylesNames =
  | 'candle'
  | Exclude<BaseChartStylesNames, 'brush'>
  | ChartTooltipStylesNames;

export type CandlestickChartCssVariables = {
  root: '--chart-text-color' | '--chart-grid-color';
};

export interface CandlestickChartProps
  extends
    BoxProps,
    Pick<
      GridChartBaseProps,
      | 'dataKey'
      | 'withXAxis'
      | 'withYAxis'
      | 'xAxisProps'
      | 'yAxisProps'
      | 'gridProps'
      | 'tickLine'
      | 'strokeDasharray'
      | 'gridAxis'
      | 'unit'
      | 'tooltipAnimationDuration'
      | 'tooltipProps'
      | 'withTooltip'
      | 'textColor'
      | 'gridColor'
      | 'valueFormatter'
      | 'xAxisLabel'
      | 'yAxisLabel'
      | 'referenceLines'
      | 'referenceAreas'
      | 'referenceDots'
      | 'accessibilityLayer'
    >,
    StylesApiProps<CandlestickChartFactory>,
    ElementProps<'div'> {
  /** Data used to display chart */
  data: Record<string, any>[];

  /** Keys of the `data` object used to read open, high, low and close values @default `{ open: 'open', high: 'high', low: 'low', close: 'close' }` */
  series?: CandlestickChartSeries;

  /** Labels of open, high, low and close values displayed in the tooltip @default `{ open: 'Open', high: 'High', low: 'Low', close: 'Close' }` */
  labels?: Partial<CandlestickChartLabels>;

  /** Color of candles with `close >= open`, key of `theme.colors` or any valid CSS color @default 'teal.6' */
  upColor?: MantineColor;

  /** Color of candles with `close < open`, key of `theme.colors` or any valid CSS color @default 'red.6' */
  downColor?: MantineColor;

  /** Maximum candle width in px */
  maxCandleWidth?: number;

  /** Stroke width of the candle wick and body outline @default 1 */
  candleStrokeWidth?: number;

  /** Props passed down to recharts `ComposedChart` component */
  composedChartProps?: React.ComponentProps<typeof ReChartsComposedChart>;

  /** Additional components that are rendered inside recharts `ComposedChart` component */
  children?: React.ReactNode;
}

export type CandlestickChartFactory = Factory<{
  props: CandlestickChartProps;
  ref: HTMLDivElement;
  stylesNames: CandlestickChartStylesNames;
  vars: CandlestickChartCssVariables;
}>;

const defaultProps = {
  withXAxis: true,
  withYAxis: true,
  withTooltip: true,
  tooltipAnimationDuration: 0,
  tickLine: 'y',
  strokeDasharray: '5 5',
  gridAxis: 'x',
  upColor: 'teal.6',
  downColor: 'red.6',
  candleStrokeWidth: 1,
  series: { open: 'open', high: 'high', low: 'low', close: 'close' },
  labels: { open: 'Open', high: 'High', low: 'Low', close: 'Close' },
  accessibilityLayer: true,
} satisfies Partial<CandlestickChartProps>;

const varsResolver = createVarsResolver<CandlestickChartFactory>(
  (theme, { textColor, gridColor }) => ({
    root: {
      '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
      '--chart-grid-color': gridColor ? getThemeColor(gridColor, theme) : undefined,
    },
  })
);

export const CandlestickChart = factory<CandlestickChartFactory>((_props) => {
  const props = useProps('CandlestickChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    series,
    labels,
    dataKey,
    withTooltip,
    withXAxis,
    withYAxis,
    gridAxis,
    tickLine,
    xAxisProps,
    yAxisProps,
    unit,
    tooltipAnimationDuration,
    strokeDasharray,
    gridProps,
    tooltipProps,
    referenceLines,
    referenceAreas,
    referenceDots,
    upColor,
    downColor,
    maxCandleWidth,
    candleStrokeWidth,
    dir,
    valueFormatter,
    children,
    xAxisLabel,
    yAxisLabel,
    composedChartProps,
    textColor,
    gridColor,
    mod,
    attributes,
    accessibilityLayer,
    ...others
  } = props;

  const theme = useMantineTheme();
  const seriesKeys = series!;
  const seriesLabels = { open: 'Open', high: 'High', low: 'Low', close: 'Close', ...labels };
  const tooltipSeries = [
    { name: 'open', label: seriesLabels.open },
    { name: 'high', label: seriesLabels.high },
    { name: 'low', label: seriesLabels.low },
    { name: 'close', label: seriesLabels.close },
  ];
  const withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
  const withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CandlestickChartFactory>({
    classNames,
    styles,
    props,
  });

  const getStyles = useStyles<CandlestickChartFactory>({
    name: 'CandlestickChart',
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

  const upColorResolved = getThemeColor(upColor, theme);
  const downColorResolved = getThemeColor(downColor, theme);

  const candleStyles = getStyles('candle');

  const renderCandle = (shapeProps: BarShapeProps) => {
    const { x, y, width, height, payload } = shapeProps as BarShapeProps & {
      x: number;
      y: number;
      width: number;
      height: number;
      payload: Record<string, any>;
    };

    const open = payload[seriesKeys.open];
    const high = payload[seriesKeys.high];
    const low = payload[seriesKeys.low];
    const close = payload[seriesKeys.close];

    if (![open, high, low, close].every(isRenderableValue)) {
      return <g />;
    }

    const color = close >= open ? upColorResolved : downColorResolved;
    const range = high - low;
    const ratio = range === 0 ? 0 : height / range;
    const openY = y + (high - open) * ratio;
    const closeY = y + (high - close) * ratio;
    const bodyY = Math.min(openY, closeY);
    const bodyHeight = Math.max(Math.abs(closeY - openY), 1);
    const centerX = x + width / 2;

    return (
      <g {...candleStyles}>
        <line
          x1={centerX}
          y1={y}
          x2={centerX}
          y2={y + height}
          stroke={color}
          strokeWidth={candleStrokeWidth}
        />
        <rect
          x={x}
          y={bodyY}
          width={width}
          height={bodyHeight}
          fill={color}
          stroke={color}
          strokeWidth={candleStrokeWidth}
        />
      </g>
    );
  };

  const domain = getCandlestickDomain({
    data,
    lowKey: seriesKeys.low,
    highKey: seriesKeys.high,
  });

  const referenceLinesItems = referenceLines?.map(
    ({ color: lineColor, labelPosition, ...line }, index) => {
      const color = getThemeColor(lineColor, theme);
      return (
        <ReferenceLine
          key={index}
          stroke={lineColor ? color : 'var(--chart-grid-color)'}
          strokeWidth={1}
          {...line}
          label={{
            fill: lineColor ? color : 'currentColor',
            fontSize: 12,
            position: labelPosition ?? 'insideBottomLeft',
            ...(typeof line.label === 'object' ? line.label : { value: line.label }),
          }}
          {...getStyles('referenceLine')}
        />
      );
    }
  );

  const referenceAreasItems = referenceAreas?.map(
    ({ color: areaColor, labelPosition, ...area }, index) => {
      const color = getThemeColor(areaColor, theme);
      return (
        <ReferenceArea
          key={index}
          fill={areaColor ? color : 'var(--chart-grid-color)'}
          fillOpacity={0.2}
          stroke={areaColor ? color : 'var(--chart-grid-color)'}
          strokeOpacity={0.6}
          {...area}
          label={{
            fill: areaColor ? color : 'currentColor',
            fontSize: 12,
            position: labelPosition ?? 'insideTop',
            ...(typeof area.label === 'object' ? area.label : { value: area.label }),
          }}
          {...getStyles('referenceArea')}
        />
      );
    }
  );

  const referenceDotsItems = referenceDots?.map(
    ({ color: dotColor, labelPosition, ...dot }, index) => {
      const color = getThemeColor(dotColor, theme);
      return (
        <ReferenceDot
          key={index}
          r={5}
          fill={dotColor ? color : 'var(--chart-grid-color)'}
          stroke="var(--mantine-color-body)"
          strokeWidth={2}
          {...dot}
          label={{
            fill: dotColor ? color : 'currentColor',
            fontSize: 12,
            position: labelPosition ?? 'top',
            ...(typeof dot.label === 'object' ? dot.label : { value: dot.label }),
          }}
          {...getStyles('referenceDot')}
        />
      );
    }
  );

  return (
    <Box {...getStyles('root')} dir={dir || 'ltr'} mod={mod} {...others}>
      <ResponsiveContainer {...getStyles('container')}>
        <ReChartsComposedChart
          data={data}
          maxBarSize={maxCandleWidth}
          margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
          }}
          accessibilityLayer={accessibilityLayer}
          {...composedChartProps}
        >
          {referenceAreasItems}

          <XAxis
            hide={!withXAxis}
            dataKey={dataKey}
            tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }}
            stroke=""
            interval="preserveStartEnd"
            tickLine={withXTickLine ? { stroke: 'currentColor' } : false}
            minTickGap={5}
            {...getStyles('axis')}
            {...xAxisProps}
          >
            {xAxisLabel && (
              <Label position="insideBottom" offset={-20} fontSize={12} {...getStyles('axisLabel')}>
                {xAxisLabel}
              </Label>
            )}
            {xAxisProps?.children}
          </XAxis>

          <YAxis
            orientation="left"
            type="number"
            domain={domain}
            axisLine={false}
            tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }}
            hide={!withYAxis}
            tickLine={withYTickLine ? { stroke: 'currentColor' } : false}
            allowDecimals
            unit={unit}
            tickFormatter={valueFormatter}
            {...getStyles('axis')}
            {...yAxisProps}
          >
            {yAxisLabel && (
              <Label
                position="insideLeft"
                angle={-90}
                textAnchor="middle"
                fontSize={12}
                offset={-5}
                {...getStyles('axisLabel')}
              >
                {yAxisLabel}
              </Label>
            )}
            {yAxisProps?.children}
          </YAxis>

          <CartesianGrid
            strokeDasharray={strokeDasharray as string}
            vertical={gridAxis === 'y' || gridAxis === 'xy'}
            horizontal={gridAxis === 'x' || gridAxis === 'xy'}
            {...getStyles('grid')}
            {...gridProps}
          />

          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={tooltipAnimationDuration !== 0}
              position={{ y: 0 }}
              cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
                strokeDasharray,
                fill: 'var(--chart-cursor-fill)',
              }}
              content={({ label, payload, labelFormatter }) => {
                const entry = payload?.[0]?.payload as Record<string, any> | undefined;

                if (!entry) {
                  return null;
                }

                const open = entry[seriesKeys.open];
                const close = entry[seriesKeys.close];

                // Rows the candle renderer skipped must not produce a tooltip either,
                // otherwise `valueFormatter` is handed undefined or a string.
                if (
                  ![open, close, entry[seriesKeys.high], entry[seriesKeys.low]].every(
                    isRenderableValue
                  )
                ) {
                  return null;
                }

                const color = getThemeColor(close >= open ? upColor : downColor, theme);

                const ohlcPayload = [
                  { name: 'open', color, payload: { open } },
                  { name: 'high', color, payload: { high: entry[seriesKeys.high] } },
                  { name: 'low', color, payload: { low: entry[seriesKeys.low] } },
                  { name: 'close', color, payload: { close } },
                ];

                return (
                  <ChartTooltip
                    label={labelFormatter && payload ? labelFormatter(label, payload) : label}
                    payload={ohlcPayload}
                    series={tooltipSeries}
                    unit={unit}
                    showColor={false}
                    classNames={resolvedClassNames}
                    styles={resolvedStyles}
                    valueFormatter={valueFormatter}
                    attributes={attributes}
                  />
                );
              }}
              {...tooltipProps}
            />
          )}

          <Bar
            dataKey={(entry: Record<string, any>) => {
              const low = entry[seriesKeys.low];
              const high = entry[seriesKeys.high];

              // Recharts derives its own data domain from these values, so a row the
              // candle renderer would skip must not be handed to it either.
              return isRenderableValue(low) && isRenderableValue(high) ? [low, high] : null;
            }}
            isAnimationActive={false}
            legendType="none"
            shape={renderCandle}
          />

          {referenceLinesItems}
          {referenceDotsItems}
          {children}
        </ReChartsComposedChart>
      </ResponsiveContainer>
    </Box>
  );
});

CandlestickChart.displayName = '@mantine/charts/CandlestickChart';
CandlestickChart.classes = classes;
CandlestickChart.varsResolver = varsResolver;

export namespace CandlestickChart {
  export type Props = CandlestickChartProps;
  export type CssVariables = CandlestickChartCssVariables;
  export type Factory = CandlestickChartFactory;
  export type Labels = CandlestickChartLabels;
  export type Series = CandlestickChartSeries;
  export type StylesNames = CandlestickChartStylesNames;
}
