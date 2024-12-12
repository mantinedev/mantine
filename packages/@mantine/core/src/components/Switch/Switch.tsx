import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  getRadius,
  getSize,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { InlineInput, InlineInputClasses, InlineInputStylesNames } from '../InlineInput';
import { useSwitchGroupContext } from './SwitchGroup.context';
import { SwitchGroup } from './SwitchGroup/SwitchGroup';
import classes from './Switch.module.css';

export type SwitchStylesNames =
  | 'root'
  | 'track'
  | 'trackLabel'
  | 'thumb'
  | 'input'
  | InlineInputStylesNames;
export type SwitchCssVariables = {
  root:
    | '--switch-radius'
    | '--switch-height'
    | '--switch-width'
    | '--switch-thumb-size'
    | '--switch-label-font-size'
    | '--switch-track-label-padding'
    | '--switch-color';
};

export interface SwitchProps
  extends BoxProps,
    StylesApiProps<SwitchFactory>,
    ElementProps<'input', 'size' | 'children'> {
  /** Id used to bind input and label, if not passed, unique id will be generated instead */
  id?: string;

  /** Content of the `label` associated with the radio */
  label?: React.ReactNode;

  /** Inner label when the `Switch` is in unchecked state */
  offLabel?: React.ReactNode;

  /** Inner label when the `Switch` is in checked state */
  onLabel?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of all elements */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: MantineRadius;

  /** Props passed down to the root element */
  wrapperProps?: Record<string, any>;

  /** Icon inside the thumb of the switch */
  thumbIcon?: React.ReactNode;

  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: 'left' | 'right';

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Error displayed below the label */
  error?: React.ReactNode;

  /** Assigns ref of the root element */
  rootRef?: React.ForwardedRef<HTMLDivElement>;
}

export type SwitchFactory = Factory<{
  props: SwitchProps;
  ref: HTMLInputElement;
  stylesNames: SwitchStylesNames;
  vars: SwitchCssVariables;
  staticComponents: {
    Group: typeof SwitchGroup;
  };
}>;

const defaultProps: Partial<SwitchProps> = {
  labelPosition: 'right',
};

const varsResolver = createVarsResolver<SwitchFactory>((theme, { radius, color, size }) => ({
  root: {
    '--switch-radius': radius === undefined ? undefined : getRadius(radius),
    '--switch-height': getSize(size, 'switch-height'),
    '--switch-width': getSize(size, 'switch-width'),
    '--switch-thumb-size': getSize(size, 'switch-thumb-size'),
    '--switch-label-font-size': getSize(size, 'switch-label-font-size'),
    '--switch-track-label-padding': getSize(size, 'switch-track-label-padding'),
    '--switch-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const Switch = factory<SwitchFactory>((_props, ref) => {
  const props = useProps('Switch', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    rootRef,
    mod,
    ...others
  } = props;

  const ctx = useSwitchGroupContext();
  const _size = size || ctx?.size;

  const getStyles = useStyles<SwitchFactory>({
    name: 'Switch',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value.includes(rest.value as string),
        onChange: ctx.onChange,
      }
    : {};

  const [_checked, handleChange] = useUncontrolled({
    value: contextProps.checked ?? checked,
    defaultValue: defaultChecked,
    finalValue: false,
  });

  return (
    <InlineInput
      {...getStyles('root')}
      __staticSelector="Switch"
      __stylesApiProps={props}
      id={uuid}
      size={_size}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      bodyElement="label"
      labelElement="span"
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={contextProps.checked || checked || undefined}
      variant={variant}
      ref={rootRef}
      mod={mod}
      {...styleProps}
      {...wrapperProps}
    >
      <input
        {...rest}
        disabled={disabled}
        checked={_checked}
        data-checked={contextProps.checked || checked || undefined}
        onChange={(event) => {
          ctx ? contextProps.onChange?.(event) : onChange?.(event);
          handleChange(event.currentTarget.checked);
        }}
        id={uuid}
        ref={ref}
        type="checkbox"
        role="switch"
        {...getStyles('input')}
      />

      <Box
        aria-hidden="true"
        mod={{ error, 'label-position': labelPosition, 'without-labels': !onLabel && !offLabel }}
        {...getStyles('track')}
      >
        <Box component="span" mod="reduce-motion" {...getStyles('thumb')}>
          {thumbIcon}
        </Box>
        <span {...getStyles('trackLabel')}>{_checked ? onLabel : offLabel}</span>
      </Box>
    </InlineInput>
  );
});

Switch.classes = { ...classes, ...InlineInputClasses };
Switch.displayName = '@mantine/core/Switch';
Switch.Group = SwitchGroup;
