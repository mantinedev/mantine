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

  /** Bar text color, overrides barTextColor and autoContrast for this specific bar */
  textColor?: MantineColor;

  /** Bar variant, used to calculate text color when autoContrast is enabled */
  variant?: 'light' | 'filled';
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
  renderBar?: (data: BarsListBarData, defaultBar: React.ReactNode) => React.ReactNode;

  /** Controls gap between bars @default 5 */
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
  barGap: 5,
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
    variant,
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
    const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
    const barProps = getBarProps ? getBarProps(item) : {};
    const { style: barPropsStyle, className: barPropsClassName, ...restBarProps } = barProps;

    const itemBarColor = item.color || barColor || theme.primaryColor;
    const colors = theme.variantColorResolver({
      color: itemBarColor,
      theme,
      variant: item.variant || variant || 'light',
      autoContrast,
    });

    const backgroundColor = colors.background;

    const textColor =
      item.textColor || barTextColor
        ? getThemeColor(item.textColor || barTextColor, theme)
        : colors.color;

    const defaultBar = (
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

    if (renderBar) {
      return <div key={index}>{renderBar(item, defaultBar)}</div>;
    }

    return defaultBar;
  });

  const labelsRow =
    barsLabel || valueLabel ? (
      <div {...getStyles('labelsRow')}>
        <div>{barsLabel}</div>
        <div>{valueLabel}</div>
      </div>
    ) : null;

  return (
    <Box {...getStyles('root')} variant={variant} {...others}>
      {labelsRow}
      {bars}
    </Box>
  );
});

BarsList.displayName = '@mantine/charts/BarsList';
BarsList.classes = classes;
BarsList.varsResolver = varsResolver;
