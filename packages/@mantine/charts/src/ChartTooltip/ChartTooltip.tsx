import React from 'react';
import { Formatter, Payload } from 'recharts/types/component/DefaultTooltipContent';
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

type MantinePayload = Payload<string, any> & { fill?: string };

export function getFilteredChartTooltipPayload(payload: MantinePayload[]) {
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
  payload: MantinePayload[] | undefined;

  /** Data units, provided by parent component */
  unit?: string;

  /** Function used to format the display content */
  formatter?: Formatter<string, any>;
}

export type ChartTooltipFactory = Factory<{
  props: ChartTooltipProps;
  ref: HTMLDivElement;
  stylesNames: ChartTooltipStylesNames;
}>;

const defaultProps: Partial<ChartTooltipProps> = {};

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
    formatter,
    ...others
  } = props;

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

  const items = filteredPayload.map((item, index) => {
    let finalValue: React.ReactNode | string = item.value;
    let finalName: React.ReactNode | any = item.name;

    if (formatter !== undefined && item.value !== undefined) {
      const formatted = formatter(item.value, item.name, item, index, payload);
      if (Array.isArray(formatted)) {
        [finalValue, finalName] = formatted;
      } else {
        finalValue = formatted;
      }
    }

    return (
      <div key={index} {...getStyles('tooltipItem')}>
        <div {...getStyles('tooltipItemBody')}>
          {item.color ? (
            <ColorSwatch
              color={item.color}
              size={12}
              {...getStyles('tooltipItemColor')}
              withShadow={false}
            />
          ) : undefined}
          <div {...getStyles('tooltipItemName')}>{finalName}</div>
        </div>
        <div {...getStyles('tooltipItemData')}>
          {finalValue}
          {unit}
        </div>
      </div>
    );
  });

  return (
    <Box {...getStyles('tooltip')} ref={ref} {...others}>
      {label && <div {...getStyles('tooltipLabel')}>{label}</div>}
      <div {...getStyles('tooltipBody')}>{items}</div>
    </Box>
  );
});

ChartTooltip.displayName = '@mantine/charts/ChartTooltip';
