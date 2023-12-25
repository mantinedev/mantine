import React from 'react';
import {
  Box,
  BoxProps,
  ColorSwatch,
  ElementProps,
  factory,
  Factory,
  Group,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './ChartTooltip.module.css';

function filterPayload(payload: Record<string, any>[]) {
  return payload.filter((item) => item.fill !== 'none');
}

export type ChartTooltipStylesNames =
  | 'root'
  | 'item'
  | 'itemBody'
  | 'itemColor'
  | 'itemName'
  | 'itemData'
  | 'label'
  | 'body';
export type ChartTooltipCssVariables = {
  root: '--test';
};

export interface ChartTooltipProps
  extends BoxProps,
    StylesApiProps<ChartTooltipFactory>,
    ElementProps<'div'> {
  label?: React.ReactNode;
  payload: Record<string, any>[];
}

export type ChartTooltipFactory = Factory<{
  props: ChartTooltipProps;
  ref: HTMLDivElement;
  stylesNames: ChartTooltipStylesNames;
}>;

const defaultProps: Partial<ChartTooltipProps> = {};

export const ChartTooltip = factory<ChartTooltipFactory>((_props, ref) => {
  const props = useProps('ChartTooltip', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, payload, label, ...others } = props;

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

  const filteredPayload = filterPayload(payload);

  const items = filteredPayload.map((item) => (
    <Group key={item.name} justify="space-between" gap={0} {...getStyles('item')}>
      <Group {...getStyles('itemBody')}>
        <ColorSwatch color={item.color} size={12} {...getStyles('itemColor')} withShadow={false} />
        <div {...getStyles('itemName')}>{item.name}</div>
      </Group>
      <div {...getStyles('itemData')}>{item.payload[item.dataKey]}</div>
    </Group>
  ));

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      {label && <div {...getStyles('label')}>{label}</div>}
      <div {...getStyles('body')}>{items}</div>
    </Box>
  );
});

ChartTooltip.displayName = '@mantine/charts/ChartTooltip';
