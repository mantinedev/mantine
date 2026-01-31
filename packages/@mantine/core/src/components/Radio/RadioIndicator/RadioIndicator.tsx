import { use } from 'react';
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
import { RadioCardContext } from '../RadioCard/RadioCard';
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
  extends BoxProps, StylesApiProps<RadioIndicatorFactory>, ElementProps<'div'> {
  /** Key of theme.colors or any valid CSS color to set indicator background color in checked state @default theme.primaryColor */
  color?: MantineColor;

  /** Controls size of the component @default 'sm' */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Key of theme.colors or any valid CSS color to set icon color. When not set, icon color is determined automatically based on theme.autoContrast setting */
  iconColor?: MantineColor;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** A component that replaces the default radio icon (centered dot) */
  icon?: React.FC<RadioIconProps>;

  /** Checked state */
  checked?: boolean;

  /** Disabled state */
  disabled?: boolean;
}

export type RadioIndicatorFactory = Factory<{
  props: RadioIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: RadioIndicatorStylesNames;
  vars: RadioIndicatorCssVariables;
  variant: RadioIndicatorVariant;
}>;

const defaultProps = {
  icon: RadioIcon,
} satisfies Partial<RadioIndicatorProps>;

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

export const RadioIndicator = factory<RadioIndicatorFactory>((_props) => {
  const props = useProps('RadioIndicator', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    icon: Icon,
    radius,
    color,
    iconColor,
    autoContrast,
    checked,
    mod,
    variant,
    disabled,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<RadioIndicatorFactory>({
    name: 'RadioIndicator',
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
    rootSelector: 'indicator',
  });

  const ctx = use(RadioCardContext);
  const _checked = typeof checked === 'boolean' ? checked : ctx?.checked || false;

  return (
    <Box
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
RadioIndicator.varsResolver = varsResolver;
