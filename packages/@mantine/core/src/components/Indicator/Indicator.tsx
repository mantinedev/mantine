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
  /** Indicator position relative to the target element, `'top-end'` by default */
  position?: IndicatorPosition;

  /** Indicator offset relative to the target element, usually used for elements with border-radius, equals to `size` by default */
  offset?: number;

  /** Determines whether the indicator container should be an inline element, `false` by default */
  inline?: boolean;

  /** Indicator width and height, `10` by default */
  size?: number | string;

  /** Label rendered inside the indicator, for example, notification count */
  label?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `100` by default */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Determines whether the indicator should have a border (color of the border is the same as the body element), `false` by default */
  withBorder?: boolean;

  /** When Indicator is disabled it renders children only */
  disabled?: boolean;

  /** Determines whether the indicator should have processing animation, `false` by default */
  processing?: boolean;

  /** Indicator z-index, `200` by default */
  zIndex?: string | number;

  /** Determines whether text color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type IndicatorFactory = Factory<{
  props: IndicatorProps;
  ref: HTMLDivElement;
  stylesNames: IndicatorStylesNames;
  vars: IndicatorCssVariables;
}>;

const defaultProps: Partial<IndicatorProps> = {
  position: 'top-end',
  offset: 0,
  inline: false,
  withBorder: false,
  disabled: false,
  processing: false,
};

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
