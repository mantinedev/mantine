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
import { useCheckboxCardContext } from '../CheckboxCard/CheckboxCard.context';
import { CheckboxIcon } from '../CheckIcon';
import classes from './CheckboxIndicator.module.css';

export type CheckboxIndicatorStylesNames = 'indicator' | 'icon';
export type CheckboxIndicatorVariant = 'filled' | 'outline';
export type CheckboxIndicatorCssVariables = {
  indicator: '--checkbox-size' | '--checkbox-radius' | '--checkbox-color' | '--checkbox-icon-color';
};

export interface CheckboxIndicatorProps
  extends BoxProps,
    StylesApiProps<CheckboxIndicatorFactory>,
    ElementProps<'div'> {
  /** Key of `theme.colors` or any valid CSS color to set input background color in checked state @default `theme.primaryColor` */
  color?: MantineColor;

  /** Controls size of the component @default `'sm'` */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
  iconColor?: MantineColor;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Indeterminate state of the checkbox. If set, `checked` prop is ignored. */
  indeterminate?: boolean;

  /** Icon displayed when checkbox is in checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean | undefined; className: string }>;

  /** Determines whether the component should have checked styles */
  checked?: boolean;

  /** Determines whether the component should have disabled styles */
  disabled?: boolean;
}

export type CheckboxIndicatorFactory = Factory<{
  props: CheckboxIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: CheckboxIndicatorStylesNames;
  vars: CheckboxIndicatorCssVariables;
  variant: CheckboxIndicatorVariant;
}>;

const defaultProps = {
  icon: CheckboxIcon,
  variant: 'filled',
} satisfies Partial<CheckboxIndicatorProps>;

const varsResolver = createVarsResolver<CheckboxIndicatorFactory>(
  (theme, { radius, color, size, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor =
      parsedColor.isThemeColor && parsedColor.shade === undefined
        ? `var(--mantine-color-${parsedColor.color}-outline)`
        : parsedColor.color;

    return {
      indicator: {
        '--checkbox-size': getSize(size, 'checkbox-size'),
        '--checkbox-radius': radius === undefined ? undefined : getRadius(radius),
        '--checkbox-color': variant === 'outline' ? outlineColor : getThemeColor(color, theme),
        '--checkbox-icon-color': iconColor
          ? getThemeColor(iconColor, theme)
          : getAutoContrastValue(autoContrast, theme)
            ? getContrastColor({ color, theme, autoContrast })
            : undefined,
      },
    };
  }
);

export const CheckboxIndicator = factory<CheckboxIndicatorFactory>((_props, ref) => {
  const props = useProps('CheckboxIndicator', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    icon: Icon,
    indeterminate,
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

  const getStyles = useStyles<CheckboxIndicatorFactory>({
    name: 'CheckboxIndicator',
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

  const ctx = useCheckboxCardContext();
  const _checked =
    typeof checked === 'boolean' || typeof indeterminate === 'boolean'
      ? checked || indeterminate
      : ctx?.checked || false;

  return (
    <Box
      ref={ref}
      {...getStyles('indicator', { variant })}
      variant={variant}
      mod={[{ checked: _checked, disabled }, mod]}
      {...others}
    >
      <Icon indeterminate={indeterminate} {...getStyles('icon')} />
    </Box>
  );
});

CheckboxIndicator.displayName = '@mantine/core/CheckboxIndicator';
CheckboxIndicator.classes = classes;
