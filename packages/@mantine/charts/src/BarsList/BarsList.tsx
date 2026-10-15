import { Fragment, useMemo } from 'react';
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
  parseThemeColor,
  rem,
  StylesApiProps,
  useMantineIsHeadless,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './BarsList.module.css';

export type BarsListStylesNames = 'root' | 'bar' | 'barLabel' | 'barValue' | 'labelsRow';

export type BarsListVariant = 'light' | 'filled';

export type BarsListCssVariables = {
  root: '--bars-list-gap' | '--bars-list-min-bar-size' | '--bars-list-bar-height';
};

export interface BarsListBarData {
  /** Name of the bar */
  name: string;

  /** Numeric value of the bar, negative and non-finite values are treated as 0 */
  value: number;

  /** Bar background color */
  color?: MantineColor;

  /** Bar text color, overrides barTextColor and autoContrast for this specific bar */
  textColor?: MantineColor;

  /** Bar variant, overrides `variant` prop of the component for this specific bar. Controls bar background and text colors. */
  variant?: BarsListVariant;
}

export interface BarsListProps
  extends BoxProps, StylesApiProps<BarsListFactory>, ElementProps<'div'> {
  /** Data for bars. Values are expected to be non-negative: negative and non-finite values are treated as 0. @category appearance */
  data: BarsListBarData[];

  /** Function to format value display @category appearance */
  valueFormatter?: (value: number) => string;

  /** Label displayed above the bars column @category appearance */
  barsLabel?: string;

  /** Label displayed above the values column @category appearance */
  valueLabel?: string;

  /** Function to pass props down to the `barLabel` element (bar track with the name) depending on the bar data payload. `style.backgroundColor` and `style.background` set the bar color. */
  getBarProps?: (data: BarsListBarData) => React.ComponentProps<'div'>;

  /** Function to completely customize bar rendering. The returned element must contain `defaultBar` or an element with `role="row"`. @category appearance */
  renderBar?: (data: BarsListBarData, defaultBar: React.ReactNode) => React.ReactNode;

  /** Controls gap between bars @default 5 @category appearance */
  barGap?: MantineSpacing;

  /** Minimum bar width @default 0 @category appearance */
  minBarSize?: number | string;

  /** Bar height @default 32 @category appearance */
  barHeight?: number | string;

  /** Default bar background color, used when item does not have color specified @category appearance */
  barColor?: MantineColor;

  /** Bar text color, overrides autoContrast @category appearance */
  barTextColor?: MantineColor;

  /** If set, adjusts text color based on background color of bars with solid background (`filled` variant or color with shade) @category appearance */
  autoContrast?: boolean;

  /** Bars color variant: `light` displays tinted bars for theme colors without shade, `filled` displays bars with solid background @default 'light' @category appearance */
  variant?: BarsListVariant;
}

export type BarsListFactory = Factory<{
  props: BarsListProps;
  ref: HTMLDivElement;
  stylesNames: BarsListStylesNames;
  vars: BarsListCssVariables;
  variant: BarsListVariant;
}>;

const defaultProps = {
  barGap: 5,
  minBarSize: 0,
  barHeight: 32,
  variant: 'light',
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

function getBarValue(value: number) {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getDefinedStyles(style: React.CSSProperties | undefined) {
  if (!style) {
    return undefined;
  }

  return Object.fromEntries(
    Object.entries(style).filter(([, value]) => value !== undefined)
  ) as React.CSSProperties;
}

function getBarLabelStyles(style: React.CSSProperties | undefined, plain: boolean) {
  const definedStyles = getDefinedStyles(style);
  if (!definedStyles || plain) {
    return definedStyles;
  }

  const { background, backgroundColor, ...rest } = definedStyles;
  const barColor = backgroundColor ?? background;
  return barColor === undefined ? rest : { ...rest, '--bars-list-bar-color': barColor };
}

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
  const headless = useMantineIsHeadless();
  const plain = !!unstyled || !!headless;

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

  const maxValue = useMemo(
    () => data.reduce((max, item) => Math.max(max, getBarValue(item.value)), 0),
    [data]
  );

  const formatValue = (value: number) => {
    if (valueFormatter) {
      return valueFormatter(value);
    }
    return value.toString();
  };

  const bars = data.map((item, index) => {
    const percentage = maxValue > 0 ? (getBarValue(item.value) / maxValue) * 100 : 0;
    const barProps = getBarProps ? getBarProps(item) : {};
    const { style: barPropsStyle, className: barPropsClassName, ...restBarProps } = barProps;

    const itemBarColor = item.color || barColor || theme.primaryColor;
    const parsedColor = parseThemeColor({ color: itemBarColor, theme });
    const itemVariant = item.variant || variant;
    const isSolid =
      itemVariant === 'filled' || (parsedColor.isThemeColor && parsedColor.shade !== undefined);
    const colors = theme.variantColorResolver({
      color: itemBarColor,
      theme,
      variant: isSolid ? 'filled' : 'light',
      autoContrast,
    });

    const textColor =
      item.textColor || barTextColor
        ? getThemeColor(item.textColor || barTextColor, theme)
        : isSolid || parsedColor.isThemeColor
          ? colors.color
          : 'var(--mantine-color-text)';

    const defaultBar = (
      <div
        key={index}
        role="row"
        {...getStyles('bar', { style: { '--bars-list-bar-size': `${percentage}%` } })}
      >
        <div
          role="cell"
          {...getStyles('barLabel', {
            className: barPropsClassName,
            style: {
              ...(plain
                ? { width: `${percentage}%`, backgroundColor: colors.background }
                : { '--bars-list-bar-color': colors.background }),
              color: textColor,
              ...getBarLabelStyles(barPropsStyle, plain),
            },
          })}
          {...restBarProps}
        >
          {plain ? (
            item.name
          ) : (
            <>
              <div className={classes.barFill} />
              <div className={classes.barName}>{item.name}</div>
              <div className={classes.barNameOutside} data-name={item.name} aria-hidden />
            </>
          )}
        </div>
        <div role="cell" {...getStyles('barValue')}>
          {formatValue(item.value)}
        </div>
      </div>
    );

    if (renderBar) {
      return <Fragment key={index}>{renderBar(item, defaultBar)}</Fragment>;
    }

    return defaultBar;
  });

  const labelsRow =
    barsLabel || valueLabel ? (
      <div role="row" {...getStyles('labelsRow')}>
        <div role="columnheader">{barsLabel}</div>
        <div role="columnheader">{valueLabel}</div>
      </div>
    ) : null;

  return (
    <Box role="table" {...getStyles('root')} variant={variant} {...others}>
      {labelsRow}
      {bars}
    </Box>
  );
});

BarsList.displayName = '@mantine/charts/BarsList';
BarsList.classes = classes;
BarsList.varsResolver = varsResolver;

export namespace BarsList {
  export type Props = BarsListProps;
  export type StylesNames = BarsListStylesNames;
  export type Factory = BarsListFactory;
  export type BarData = BarsListBarData;
  export type Variant = BarsListVariant;
}
