import {
  Box,
  BoxProps,
  ColorSwatch,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { ChartSeries } from '../types';
import { getSeriesLabels } from '../utils';
import classes from './ChartLegend.module.css';

function updateChartLegendPayload(payload: Record<string, any>[]): Record<string, any>[] {
  return payload.map((item) => {
    const newDataKey = item.dataKey?.split('.').pop();
    return {
      ...item,
      dataKey: newDataKey,
      payload: {
        ...item.payload,
        name: newDataKey,
        dataKey: newDataKey,
      },
    };
  });
}

export function getFilteredChartLegendPayload(payload: Record<string, any>[]) {
  return updateChartLegendPayload(payload.filter((item) => item.color !== 'none'));
}

export type ChartLegendStylesNames = 'legendItem' | 'legendItemColor' | 'legendItemName' | 'legend';

export interface ChartLegendProps
  extends BoxProps,
    StylesApiProps<ChartLegendFactory>,
    ElementProps<'div'> {
  /** Chart data provided by recharts */
  payload: Record<string, any>[] | undefined;

  /** Function called when mouse enters/leaves one of the legend items */
  onHighlight: (area: string | null) => void;

  /** Position of the legend relative to the chart, used to apply margin on the corresponding side */
  legendPosition: 'top' | 'bottom' | 'middle';

  /** Data used for labels, only applicable for area charts: AreaChart, LineChart, BarChart */
  series?: ChartSeries[];

  /** Determines whether color swatch should be shown next to the label, `true` by default */
  showColor?: boolean;

  /** Determines whether the legend should be centered, `false` by default */
  centered?: boolean;
}

export type ChartLegendFactory = Factory<{
  props: ChartLegendProps;
  ref: HTMLDivElement;
  stylesNames: ChartLegendStylesNames;
}>;

const defaultProps: Partial<ChartLegendProps> = {};

export const ChartLegend = factory<ChartLegendFactory>((_props, ref) => {
  const props = useProps('ChartLegend', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    payload,
    onHighlight,
    legendPosition,
    mod,
    series,
    showColor,
    centered,
    ...others
  } = props;

  const getStyles = useStyles<ChartLegendFactory>({
    name: 'ChartLegend',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  if (!payload) {
    return null;
  }

  const filteredPayload = getFilteredChartLegendPayload(payload);
  const labels = getSeriesLabels(series);

  const items = filteredPayload.map((item, index) => (
    <div
      key={index}
      {...getStyles('legendItem')}
      onMouseEnter={() => onHighlight(item.dataKey)}
      onMouseLeave={() => onHighlight(null)}
      data-without-color={showColor === false || undefined}
    >
      <ColorSwatch
        color={item.color}
        size={12}
        {...getStyles('legendItemColor')}
        withShadow={false}
      />
      <p {...getStyles('legendItemName')}>{labels[item.dataKey] || item.dataKey}</p>
    </div>
  ));

  return (
    <Box
      ref={ref}
      mod={[{ position: legendPosition, centered }, mod]}
      {...getStyles('legend')}
      {...others}
    >
      {items}
    </Box>
  );
});

ChartLegend.displayName = '@mantine/charts/ChartLegend';
