import React, { forwardRef } from 'react';
import { useUncontrolled, useId } from '@mantine/utils';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  useMantineDefaultProps,
  ForwardRefWithStaticComponents,
} from '@mantine/styles';
import { Box } from '../Box';
import { CheckIcon } from '../Checkbox';
import { ChipGroup } from './ChipGroup/ChipGroup';
import { useChipGroup } from './ChipGroup.context';
import useStyles, { ChipStylesParams } from './Chip.styles';

export type ChipStylesNames = Selectors<typeof useStyles>;

export interface ChipProps
  extends DefaultProps<ChipStylesNames, ChipStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'onChange'> {
  /** Chip radius from theme or number to set value in px */
  radius?: MantineNumberSize;

  /** Predefined chip size */
  size?: MantineSize;

  /** Chip input type */
  type?: 'radio' | 'checkbox';

  /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
  variant?: 'outline' | 'filled';

  /** Chip label */
  children: React.ReactNode;

  /** Checked state for controlled component */
  checked?: boolean;

  /** Default value for uncontrolled component */
  defaultChecked?: boolean;

  /** Calls when checked state changes */
  onChange?(checked: boolean): void;

  /** Active color from theme, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Static id to bind input with label */
  id?: string;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<ChipProps> = {
  type: 'checkbox',
  size: 'sm',
  radius: 'xl',
  variant: 'outline',
};

type ChipComponent = ForwardRefWithStaticComponents<ChipProps, { Group: typeof ChipGroup }>;

export const Chip: ChipComponent = forwardRef<HTMLInputElement, ChipProps>((props, ref) => {
  const {
    radius,
    type,
    size,
    variant,
    disabled,
    id,
    color,
    children,
    className,
    classNames,
    style,
    styles,
    checked,
    defaultChecked,
    onChange,
    sx,
    wrapperProps,
    value,
    ...others
  } = useMantineDefaultProps('Chip', defaultProps, props);
  const ctx = useChipGroup();

  const uuid = useId(id);
  const { systemStyles, rest } = extractSystemStyles(others);
  const { classes, cx } = useStyles({ radius, size, color }, { classNames, styles, name: 'Chip' });

  const [_value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const contextProps = ctx
    ? {
        checked: ctx.isChipSelected(value as string),
        onChange: ctx.onChange,
        type: ctx.multiple ? 'checkbox' : 'radio',
      }
    : {};
  const _checked = contextProps.checked || _value;

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <input
        type={type}
        className={classes.input}
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
        data-variant={variant}
        className={classes.label}
      >
        {_checked && (
          <span className={classes.iconWrapper}>
            <CheckIcon className={classes.checkIcon} />
          </span>
        )}
        {children}
      </label>
    </Box>
  );
}) as any;

Chip.displayName = '@mantine/core/Chip';
Chip.Group = ChipGroup;
