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
import classes from './ChartTooltip.module.css';

export function getFilteredChartTooltipPayload(payload: Record<string, any>[]) {
  return payload.filter((item) => item.fill !== 'none');
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
}

export type ChartTooltipFactory = Factory<{
  props: ChartTooltipProps;
  ref: HTMLDivElement;
  stylesNames: ChartTooltipStylesNames;
}>;

const defaultProps: Partial<ChartTooltipProps> = {};

export const ChartTooltip = factory<ChartTooltipFactory>((_props, ref) => {
  const props = useProps('ChartTooltip', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, payload, label, unit, ...others } =
    props;

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

  const filteredPayload = getFilteredChartTooltipPayload(payload);

  const items = filteredPayload.map((item) => (
    <div key={item.name} {...getStyles('tooltipItem')}>
      <div {...getStyles('tooltipItemBody')}>
        <ColorSwatch
          color={item.color}
          size={12}
          {...getStyles('tooltipItemColor')}
          withShadow={false}
        />
        <div {...getStyles('tooltipItemName')}>{item.name}</div>
      </div>
      <div {...getStyles('tooltipItemData')}>
        {item.payload[item.dataKey]}
        {unit}
      </div>
    </div>
  ));

  return (
    <Box {...getStyles('tooltip')} ref={ref} {...others}>
      {label && <div {...getStyles('tooltipLabel')}>{label}</div>}
      <div {...getStyles('tooltipBody')}>{items}</div>
    </Box>
  );
});

ChartTooltip.displayName = '@mantine/charts/ChartTooltip';
