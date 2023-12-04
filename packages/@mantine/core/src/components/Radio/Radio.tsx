import React from 'react';
import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getSize,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineSize,
  MantineRadius,
  extractStyleProps,
  parseThemeColor,
} from '../../core';
import { InlineInput, InlineInputStylesNames } from '../InlineInput';
import { RadioIcon, RadioIconProps } from './RadioIcon';
import { RadioGroup } from './RadioGroup/RadioGroup';
import { useRadioGroupContext } from './RadioGroup.context';
import classes from './Radio.module.css';

export type RadioVariant = 'filled' | 'outline';
export type RadioStylesNames = InlineInputStylesNames | 'inner' | 'radio' | 'icon';
export type RadioCssVariables = {
  root:
    | '--radio-size'
    | '--radio-radius'
    | '--radio-color'
    | '--radio-icon-color'
    | '--radio-icon-size';
};

export interface RadioProps
  extends BoxProps,
    StylesApiProps<RadioFactory>,
    ElementProps<'input', 'size'> {
  /** Radio label */
  label?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of all elements, `'sm'` by default */
  size?: MantineSize;

  /** Custom checked icon component, by default a circle is displayed in checked state */
  icon?: React.FC<RadioIconProps>;

  /** Props passed down to the root element */
  wrapperProps?: Record<string, any>;

  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: 'left' | 'right';

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Error displayed below the label */
  error?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: MantineRadius;

  /** Assigns ref of the root element, can be used with `Tooltip` and other similar components */
  rootRef?: React.ForwardedRef<HTMLDivElement>;

  /** Key of `theme.colors` or any valid CSS color to set icon color, `theme.white` by default */
  iconColor?: MantineColor;
}

export type RadioFactory = Factory<{
  props: RadioProps;
  ref: HTMLInputElement;
  stylesNames: RadioStylesNames;
  vars: RadioCssVariables;
  variant: RadioVariant;
  staticComponents: {
    Group: typeof RadioGroup;
  };
}>;

const defaultProps: Partial<RadioProps> = {
  labelPosition: 'right',
};

const varsResolver = createVarsResolver<RadioFactory>(
  (theme, { size, radius, color, iconColor, variant }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor =
      parsedColor.isThemeColor && parsedColor.shade === undefined
        ? `var(--mantine-color-${parsedColor.color}-outline)`
        : parsedColor.color;

    return {
      root: {
        '--radio-size': getSize(size, 'radio-size'),
        '--radio-radius': radius === undefined ? undefined : getRadius(radius),
        '--radio-color': variant === 'outline' ? outlineColor : getThemeColor(color, theme),
        '--radio-icon-color': iconColor ? getThemeColor(iconColor, theme) : undefined,
        '--radio-icon-size': getSize(size, 'radio-icon-size'),
      },
    };
  }
);

export const Radio = factory<RadioFactory>((_props, ref) => {
  const props = useProps('Radio', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    size,
    label,
    labelPosition,
    description,
    error,
    radius,
    color,
    variant,
    disabled,
    wrapperProps,
    icon: Icon = RadioIcon,
    rootRef,
    iconColor,
    ...others
  } = props;

  const getStyles = useStyles<RadioFactory>({
    name: 'Radio',
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

  const ctx = useRadioGroupContext();

  const contextSize = ctx?.size ?? size;
  const componentSize = props.size ? size : contextSize;

  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value === rest.value,
        name: rest.name ?? ctx.name,
        onChange: ctx.onChange,
      }
    : {};

  return (
    <InlineInput
      {...getStyles('root')}
      __staticSelector="Radio"
      __stylesApiProps={props}
      id={uuid}
      size={componentSize}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={contextProps.checked || undefined}
      variant={variant}
      ref={rootRef}
      {...styleProps}
      {...wrapperProps}
    >
      <Box {...getStyles('inner')} mod={{ 'label-position': labelPosition }}>
        <Box
          {...getStyles('radio', { focusable: true, variant })}
          {...rest}
          {...contextProps}
          component="input"
          mod={{ error: !!error }}
          ref={ref}
          id={uuid}
          disabled={disabled}
          type="radio"
        />
        <Icon {...getStyles('icon')} aria-hidden />
      </Box>
    </InlineInput>
  );
});

Radio.classes = classes;
Radio.displayName = '@mantine/core/Radio';
Radio.Group = RadioGroup;
