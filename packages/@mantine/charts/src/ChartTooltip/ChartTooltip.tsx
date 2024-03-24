import React from 'react';
import {
  Box,
  BoxProps,
  ColorSwatch,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { ChartSeries } from '../types';
import { getSeriesLabels } from '../utils';
import classes from './ChartTooltip.module.css';

export function getFilteredChartTooltipPayload(payload: Record<string, any>[], segmentId?: string) {
  const duplicatesFilter = payload.filter((item) => item.fill !== 'none' || !item.color);

  if (!segmentId) {
    return duplicatesFilter;
  }

  return duplicatesFilter.filter((item) => item.name === segmentId);
}

function getData(item: Record<string, any>, type: 'area' | 'radial' | 'scatter') {
  if (type === 'radial' || type === 'scatter') {
    return item.value;
  }

  return item.payload[item.dataKey];
}

export type ChartTooltipStylesNames =
  | 'tooltip'
  | 'tooltipItem'
  | 'tooltipItemBody'
  | 'tooltipItemColor'
  | 'tooltipItemName'
  | 'tooltipItemData'
  | 'tooltipLabel'
  | 'tooltipBody';

export interface ChartTooltipProps
  extends BoxProps,
    StylesApiProps<ChartTooltipFactory>,
    ElementProps<'div'> {
  /** Main tooltip label */
  label?: React.ReactNode;

  /** Chart data provided by recharts */
  payload: Record<string, any>[] | undefined;

  /** Data units, provided by parent component */
  unit?: string;

  /** Tooltip type that determines the content and styles, `area` for LineChart, AreaChart and BarChart, `radial` for DonutChart and PieChart, `'area'` by default */
  type?: 'area' | 'radial' | 'scatter';

  /** Id of the segment to display data for. Only applicable when `type="radial"`. If not set, all data is rendered. */
  segmentId?: string;

  /** Chart series data, applicable only for `area` type */
  series?: ChartSeries[];

  /** A function to format values */
  valueFormatter?: (value: number) => string;
}

export type ChartTooltipFactory = Factory<{
  props: ChartTooltipProps;
  ref: HTMLDivElement;
  stylesNames: ChartTooltipStylesNames;
}>;

const defaultProps: Partial<ChartTooltipProps> = {
  type: 'area',
};

export const ChartTooltip = factory<ChartTooltipFactory>((_props, ref) => {
  const props = useProps('ChartTooltip', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    payload,
    label,
    unit,
    type,
    segmentId,
    mod,
    series,
    valueFormatter,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<ChartTooltipFactory>({
    name: 'ChartTooltip',
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

  const filteredPayload = getFilteredChartTooltipPayload(payload, segmentId);
  const scatterLabel = type === 'scatter' ? payload[0]?.payload?.name : null;
  const labels = getSeriesLabels(series);
  const _label = label || scatterLabel;

  const items = filteredPayload.map((item) => (
    <div key={item.name} data-type={type} {...getStyles('tooltipItem')}>
      <div {...getStyles('tooltipItemBody')}>
        <ColorSwatch
          color={getThemeColor(item.color, theme)}
          size={12}
          {...getStyles('tooltipItemColor')}
          withShadow={false}
        />
        <div {...getStyles('tooltipItemName')}>{labels[item.name] || item.name}</div>
      </div>
      <div {...getStyles('tooltipItemData')}>
        {typeof valueFormatter === 'function'
          ? valueFormatter(getData(item, type!))
          : getData(item, type!)}
        {unit || item.unit}
      </div>
    </div>
  ));

  return (
    <Box {...getStyles('tooltip')} mod={[{ type }, mod]} ref={ref} {...others}>
      {_label && <div {...getStyles('tooltipLabel')}>{_label}</div>}
      <div {...getStyles('tooltipBody')}>{items}</div>
    </Box>
  );
});

ChartTooltip.displayName = '@mantine/charts/ChartTooltip';
