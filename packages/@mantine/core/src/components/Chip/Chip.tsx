import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  getFontSize,
  getRadius,
  getSize,
  MantineColor,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { CheckIcon } from '../Checkbox';
import { useChipGroupContext } from './ChipGroup.context';
import { ChipGroup } from './ChipGroup/ChipGroup';
import classes from './Chip.module.css';

export type ChipStylesNames = 'root' | 'input' | 'iconWrapper' | 'checkIcon' | 'label';
export type ChipVariant = 'outline' | 'filled' | 'light';
export type ChipCssVariables = {
  root:
    | '--chip-fz'
    | '--chip-size'
    | '--chip-icon-size'
    | '--chip-padding'
    | '--chip-checked-padding'
    | '--chip-radius'
    | '--chip-bg'
    | '--chip-hover'
    | '--chip-color'
    | '--chip-bd'
    | '--chip-spacing';
};

export interface ChipProps
  extends BoxProps,
    StylesApiProps<ChipFactory>,
    ElementProps<'input', 'size' | 'onChange'> {
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
  radius?: MantineRadius;

  /** Controls various properties related to component size, `'sm'` by default */
  size?: MantineSize;

  /** Chip input type, `'checkbox'` by default */
  type?: 'radio' | 'checkbox';

  /** `label` element associated with the input */
  children: React.ReactNode;

  /** Checked state for controlled component */
  checked?: boolean;

  /** Default checked state for uncontrolled component */
  defaultChecked?: boolean;

  /** Calls when checked state changes */
  onChange?: (checked: boolean) => void;

  /** Controls components colors based on `variant` prop. Key of `theme.colors` or any valid CSS color. `theme.primaryColor` by default */
  color?: MantineColor;

  /** Static id to connect input with the label, by default `id` is randomly generated */
  id?: string;

  /** Props passed down to the root element */
  wrapperProps?: Record<string, any>;

  /** Any element or component to replace default icon */
  icon?: React.ReactNode;

  /** Assigns ref of the root element */
  rootRef?: React.ForwardedRef<HTMLDivElement>;

  /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type ChipFactory = Factory<{
  props: ChipProps;
  ref: HTMLInputElement;
  stylesNames: ChipStylesNames;
  vars: ChipCssVariables;
  variant: ChipVariant;
  staticComponents: {
    Group: typeof ChipGroup;
  };
}>;

const defaultProps: Partial<ChipProps> = {
  type: 'checkbox',
};

const varsResolver = createVarsResolver<ChipFactory>(
  (theme, { size, radius, variant, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--chip-fz': getFontSize(size),
        '--chip-size': getSize(size, 'chip-size'),
        '--chip-radius': radius === undefined ? undefined : getRadius(radius),
        '--chip-checked-padding': getSize(size, 'chip-checked-padding'),
        '--chip-padding': getSize(size, 'chip-padding'),
        '--chip-icon-size': getSize(size, 'chip-icon-size'),
        '--chip-bg': color || variant ? colors.background : undefined,
        '--chip-hover': color || variant ? colors.hover : undefined,
        '--chip-color': color || variant ? colors.color : undefined,
        '--chip-bd': color || variant ? colors.border : undefined,
        '--chip-spacing': getSize(size, 'chip-spacing'),
      },
    };
  }
);

export const Chip = factory<ChipFactory>((_props, ref) => {
  const props = useProps('Chip', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    checked,
    defaultChecked,
    onChange,
    value,
    wrapperProps,
    type,
    disabled,
    children,
    size,
    variant,
    icon,
    rootRef,
    autoContrast,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<ChipFactory>({
    name: 'Chip',
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

  const ctx = useChipGroupContext();
  const uuid = useId(id);
  const { styleProps, rest } = extractStyleProps(others);

  const [_value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const contextProps = ctx
    ? {
        checked: ctx.isChipSelected(value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          ctx.onChange(event);
          onChange?.(event.currentTarget.checked);
        },
        type: ctx.multiple ? 'checkbox' : 'radio',
      }
    : {};

  const _checked = contextProps.checked || _value;

  return (
    <Box
      size={size}
      variant={variant}
      ref={rootRef}
      mod={mod}
      {...getStyles('root')}
      {...styleProps}
      {...wrapperProps}
    >
      <input
        type={type}
        {...getStyles('input')}
        checked={_checked}
        onChange={(event) => setValue(event.currentTarget.checked)}
        id={uuid}
        disabled={disabled}
        ref={ref}
        value={value}
        {...contextProps}
        {...rest}
      />

      <label
        htmlFor={uuid}
        data-checked={_checked || undefined}
        data-disabled={disabled || undefined}
        {...getStyles('label', { variant: variant || 'filled' })}
      >
        {_checked && (
          <span {...getStyles('iconWrapper')}>
            {icon || <CheckIcon {...getStyles('checkIcon')} />}
          </span>
        )}
        <span>{children}</span>
      </label>
    </Box>
  );
});

Chip.classes = classes;
Chip.displayName = '@mantine/core/Chip';
Chip.Group = ChipGroup;
