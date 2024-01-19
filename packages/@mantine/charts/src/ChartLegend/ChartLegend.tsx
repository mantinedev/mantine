import React from 'react';
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
import classes from './ChartLegend.module.css';

export function getFilteredChartLegendPayload(payload: Record<string, any>[]) {
  return payload.filter((item) => item.color !== 'none');
}

export type ChartLegendStylesNames = 'legendItem' | 'legendItemColor' | 'legendItemName' | 'legend';

export interface ChartLegendProps
  extends BoxProps,
    StylesApiProps<ChartLegendFactory>,
    ElementProps<'div'> {
  payload: Record<string, any>[] | undefined;
  onHighlight: (area: string | null) => void;
  legendPosition: 'top' | 'bottom' | 'middle';
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

  const items = filteredPayload.map((item, index) => (
    <div
      key={index}
      {...getStyles('legendItem')}
      onMouseEnter={() => onHighlight(item.dataKey)}
      onMouseLeave={() => onHighlight(null)}
    >
      <ColorSwatch
        color={item.color}
        size={12}
        {...getStyles('legendItemColor')}
        withShadow={false}
      />
      <p {...getStyles('legendItemName')}>{item.dataKey}</p>
    </div>
  ));

  return (
    <Box ref={ref} mod={[{ position: legendPosition }, mod]} {...getStyles('legend')} {...others}>
      {items}
    </Box>
  );
});

ChartLegend.displayName = '@mantine/charts/ChartLegend';
