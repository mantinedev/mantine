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
  getSize,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  parseThemeColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { useRadioCardContext } from '../RadioCard/RadioCard.context';
import { RadioIcon, RadioIconProps } from '../RadioIcon';
import classes from './RadioIndicator.module.css';

export type RadioIndicatorStylesNames = 'indicator' | 'icon';
export type RadioIndicatorVariant = 'filled' | 'outline';
export type RadioIndicatorCssVariables = {
  indicator:
    | '--radio-size'
    | '--radio-radius'
    | '--radio-color'
    | '--radio-icon-color'
    | '--radio-icon-size';
};

export interface RadioIndicatorProps
  extends BoxProps,
    StylesApiProps<RadioIndicatorFactory>,
    ElementProps<'div'> {
  /** Key of `theme.colors` or any valid CSS color to set input background color in checked state, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of the component, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
  iconColor?: MantineColor;

  /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;

  /** A component that replaces default check icon */
  icon?: React.FC<RadioIconProps>;

  /** Determines whether the component should have checked styles */
  checked?: boolean;

  /** Determines whether the component should have disabled styles */
  disabled?: boolean;
}

export type RadioIndicatorFactory = Factory<{
  props: RadioIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: RadioIndicatorStylesNames;
  vars: RadioIndicatorCssVariables;
  variant: RadioIndicatorVariant;
}>;

const defaultProps: Partial<RadioIndicatorProps> = {
  icon: RadioIcon,
};

const varsResolver = createVarsResolver<RadioIndicatorFactory>(
  (theme, { radius, color, size, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor =
      parsedColor.isThemeColor && parsedColor.shade === undefined
        ? `var(--mantine-color-${parsedColor.color}-outline)`
        : parsedColor.color;

    return {
      indicator: {
        '--radio-size': getSize(size, 'radio-size'),
        '--radio-radius': radius === undefined ? undefined : getRadius(radius),
        '--radio-color': variant === 'outline' ? outlineColor : getThemeColor(color, theme),
        '--radio-icon-size': getSize(size, 'radio-icon-size'),
        '--radio-icon-color': iconColor
          ? getThemeColor(iconColor, theme)
          : getAutoContrastValue(autoContrast, theme)
            ? getContrastColor({ color, theme, autoContrast })
            : undefined,
      },
    };
  }
);

export const RadioIndicator = factory<RadioIndicatorFactory>((_props, ref) => {
  const props = useProps('RadioIndicator', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    icon,
    radius,
    color,
    iconColor,
    autoContrast,
    checked,
    mod,
    variant,
    disabled,
    ...others
  } = props;
  const Icon = icon!;

  const getStyles = useStyles<RadioIndicatorFactory>({
    name: 'RadioIndicator',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'indicator',
  });

  const ctx = useRadioCardContext();
  const _checked = typeof checked === 'boolean' ? checked : ctx?.checked || false;

  return (
    <Box
      ref={ref}
      {...getStyles('indicator', { variant })}
      variant={variant}
      mod={[{ checked: _checked, disabled }, mod]}
      {...others}
    >
      <Icon {...getStyles('icon')} />
    </Box>
  );
});

RadioIndicator.displayName = '@mantine/core/RadioIndicator';
RadioIndicator.classes = classes;
