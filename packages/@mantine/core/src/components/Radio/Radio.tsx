import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  extractStyleProps,
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
} from '../../core';
import { InlineInput, InlineInputStylesNames } from '../InlineInput';
import { RadioCard } from './RadioCard/RadioCard';
import { useRadioGroupContext } from './RadioGroup.context';
import { RadioGroup } from './RadioGroup/RadioGroup';
import { RadioIcon, RadioIconProps } from './RadioIcon';
import { RadioIndicator } from './RadioIndicator/RadioIndicator';
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
    ElementProps<'input', 'size' | 'children'> {
  /** Content of the `label` associated with the radio */
  label?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of the component, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** A component that replaces default check icon */
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

  /** Assigns ref of the root element */
  rootRef?: React.ForwardedRef<HTMLDivElement>;

  /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
  iconColor?: MantineColor;

  /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type RadioFactory = Factory<{
  props: RadioProps;
  ref: HTMLInputElement;
  stylesNames: RadioStylesNames;
  vars: RadioCssVariables;
  variant: RadioVariant;
  staticComponents: {
    Group: typeof RadioGroup;
    Card: typeof RadioCard;
    Indicator: typeof RadioIndicator;
  };
}>;

const defaultProps: Partial<RadioProps> = {
  labelPosition: 'right',
};

const varsResolver = createVarsResolver<RadioFactory>(
  (theme, { size, radius, color, iconColor, variant, autoContrast }) => {
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
        '--radio-icon-color': iconColor
          ? getThemeColor(iconColor, theme)
          : getAutoContrastValue(autoContrast, theme)
            ? getContrastColor({ color, theme, autoContrast })
            : undefined,
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
    onChange,
    mod,
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
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          ctx.onChange(event);
          onChange?.(event);
        },
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
      mod={mod}
      {...styleProps}
      {...wrapperProps}
    >
      <Box {...getStyles('inner')} mod={{ 'label-position': labelPosition }}>
        <Box
          {...getStyles('radio', { focusable: true, variant })}
          onChange={onChange}
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
Radio.Card = RadioCard;
Radio.Indicator = RadioIndicator;
