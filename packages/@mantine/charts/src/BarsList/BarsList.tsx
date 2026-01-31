import { useMemo } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  getThemeColor,
  MantineColor,
  MantineSpacing,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './BarsList.module.css';

export type BarsListStylesNames = 'root' | 'bar' | 'barLabel' | 'barValue' | 'labelsRow';

export type BarsListCssVariables = {
  root: '--bars-list-gap' | '--bars-list-min-bar-size' | '--bars-list-bar-height';
};

export interface BarsListBarData {
  /** Name of the bar, displayed inside the bar */
  name: string;

  /** Numeric value of the bar */
  value: number;

  /** Bar background color */
  color?: MantineColor;
}

export interface BarsListProps
  extends BoxProps, StylesApiProps<BarsListFactory>, ElementProps<'div'> {
  /** Data for bars */
  data: BarsListBarData[];

  /** Function to format value display */
  valueFormatter?: (value: number) => string;

  /** Label displayed above the bars column */
  barsLabel?: string;

  /** Label displayed above the values column */
  valueLabel?: string;

  /** Function to pass props down to the bar depending on the bar data payload */
  getBarProps?: (data: BarsListBarData) => React.ComponentProps<'div'>;

  /** Function to completely customize bar rendering */
  renderBar?: (data: BarsListBarData) => React.ReactNode;

  /** Controls gap between bars @default 'xs' */
  barGap?: MantineSpacing;

  /** Minimum bar width @default 100 */
  minBarSize?: number | string;

  /** Bar height @default 32 */
  barHeight?: number | string;

  /** Default bar background color, used when item does not have color specified */
  barColor?: MantineColor;

  /** Bar text color, overrides autoContrast */
  barTextColor?: MantineColor;

  /** If set, adjusts text color based on background color */
  autoContrast?: boolean;
}

export type BarsListFactory = Factory<{
  props: BarsListProps;
  ref: HTMLDivElement;
  stylesNames: BarsListStylesNames;
  vars: BarsListCssVariables;
}>;

const defaultProps = {
  barGap: 'xs',
  minBarSize: 0,
  barHeight: 32,
} satisfies Partial<BarsListProps>;

const varsResolver = createVarsResolver<BarsListFactory>(
  (_theme, { barGap, minBarSize, barHeight }) => ({
    root: {
      '--bars-list-gap': getSpacing(barGap),
      '--bars-list-min-bar-size': rem(minBarSize),
      '--bars-list-bar-height': rem(barHeight),
    },
  })
);

export const BarsList = factory<BarsListFactory>((_props) => {
  const props = useProps('BarsList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    data,
    valueFormatter,
    barsLabel,
    valueLabel,
    getBarProps,
    renderBar,
    barGap,
    minBarSize,
    barHeight,
    barColor,
    barTextColor,
    autoContrast,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<BarsListFactory>({
    name: 'BarsList',
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

  const maxValue = useMemo(() => Math.max(...data.map((item) => item.value), 0), [data]);

  const formatValue = (value: number) => {
    if (valueFormatter) {
      return valueFormatter(value);
    }
    return value.toString();
  };

  const bars = data.map((item, index) => {
    if (renderBar) {
      return <div key={index}>{renderBar(item)}</div>;
    }

    const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
    const barProps = getBarProps ? getBarProps(item) : {};
    const { style: barPropsStyle, className: barPropsClassName, ...restBarProps } = barProps;

    const itemBarColor = item.color || barColor || theme.primaryColor;
    const backgroundColor = getThemeColor(itemBarColor, theme);

    let textColor: string | undefined;
    if (barTextColor) {
      textColor = getThemeColor(barTextColor, theme);
    } else if (autoContrast) {
      textColor = theme.variantColorResolver({
        color: itemBarColor,
        theme,
        variant: 'filled',
        autoContrast: true,
      }).color;
    }

    return (
      <div key={index} {...getStyles('bar')}>
        <div
          {...getStyles('barLabel', {
            className: barPropsClassName,
            style: {
              width: `${percentage}%`,
              backgroundColor,
              color: textColor,
              padding: percentage === 0 ? 0 : undefined,
              ...barPropsStyle,
            },
          })}
          {...restBarProps}
        >
          {item.name}
        </div>
        <div {...getStyles('barValue')}>{formatValue(item.value)}</div>
      </div>
    );
  });

  const labelsRow =
    barsLabel || valueLabel ? (
      <div {...getStyles('labelsRow')}>
        <div>{barsLabel}</div>
        <div>{valueLabel}</div>
      </div>
    ) : null;

  return (
    <Box {...getStyles('root')} {...others}>
      {labelsRow}
      {bars}
    </Box>
  );
});

BarsList.displayName = '@mantine/charts/BarsList';
BarsList.classes = classes;
BarsList.varsResolver = varsResolver;
