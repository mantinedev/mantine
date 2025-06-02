import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getPositionVariables } from './get-position-variables/get-position-variables';
import { IndicatorPosition } from './Indicator.types';
import classes from './Indicator.module.css';

export type IndicatorPositionVariables =
  | '--indicator-top'
  | '--indicator-bottom'
  | '--indicator-left'
  | '--indicator-right'
  | '--indicator-translate-x'
  | '--indicator-translate-y';

export type IndicatorStylesNames = 'root' | 'indicator';
export type IndicatorCssVariables = {
  root:
    | '--indicator-color'
    | '--indicator-text-color'
    | '--indicator-size'
    | '--indicator-radius'
    | '--indicator-z-index'
    | IndicatorPositionVariables;
};

export interface IndicatorProps
  extends BoxProps,
    StylesApiProps<IndicatorFactory>,
    ElementProps<'div'> {
  /** Indicator position relative to the target element @default `'top-end'` */
  position?: IndicatorPosition;

  /** Indicator offset relative to the target element, usually used for elements with border-radius */
  offset?: number;

  /** Determines whether the indicator container should be an inline element @default `false` */
  inline?: boolean;

  /** Indicator width and height @default `10` */
  size?: number | string;

  /** Label displayed inside the indicator, for example, notification count */
  label?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `100` */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color value @default `theme.primaryColor` */
  color?: MantineColor;

  /** Adds border to the root element */
  withBorder?: boolean;

  /** If set, the indicator is hidden */
  disabled?: boolean;

  /** If set, the indicator has processing animation @default `false` */
  processing?: boolean;

  /** Indicator z-index @default `200` */
  zIndex?: string | number;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type IndicatorFactory = Factory<{
  props: IndicatorProps;
  ref: HTMLDivElement;
  stylesNames: IndicatorStylesNames;
  vars: IndicatorCssVariables;
}>;

const defaultProps = {
  position: 'top-end',
  offset: 0,
} satisfies Partial<IndicatorProps>;

const varsResolver = createVarsResolver<IndicatorFactory>(
  (theme, { color, position, offset, size, radius, zIndex, autoContrast }) => ({
    root: {
      '--indicator-color': color ? getThemeColor(color, theme) : undefined,
      '--indicator-text-color': getAutoContrastValue(autoContrast, theme)
        ? getContrastColor({ color, theme, autoContrast })
        : undefined,
      '--indicator-size': rem(size),
      '--indicator-radius': radius === undefined ? undefined : getRadius(radius),
      '--indicator-z-index': zIndex?.toString(),
      ...getPositionVariables(position, offset),
    },
  })
);

export const Indicator = factory<IndicatorFactory>((_props, ref) => {
  const props = useProps('Indicator', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    position,
    offset,
    inline,
    label,
    radius,
    color,
    withBorder,
    disabled,
    processing,
    zIndex,
    autoContrast,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<IndicatorFactory>({
    name: 'Indicator',
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

  return (
    <Box ref={ref} {...getStyles('root')} mod={[{ inline }, mod]} {...others}>
      {!disabled && (
        <Box
          mod={{ 'with-label': !!label, 'with-border': withBorder, processing }}
          {...getStyles('indicator')}
        >
          {label}
        </Box>
      )}
      {children}
    </Box>
  );
});

Indicator.classes = classes;
Indicator.displayName = '@mantine/core/Indicator';
