import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  MantineNumberSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { useId } from '@mantine/hooks';
import { Box } from '../Box';
import { CheckboxIcon } from './CheckboxIcon';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import useStyles, { CheckboxStylesParams } from './Checkbox.styles';

export type CheckboxStylesNames = Selectors<typeof useStyles>;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames, CheckboxStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  /** Key of theme.colors */
  color?: MantineColor;

  /** Key of theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined label font-size and checkbox width and height in px */
  size?: MantineSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** id to connect label with input */
  id?: string;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Icon rendered when checkbox has checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  transitionDuration: 100,
  icon: CheckboxIcon,
};

type CheckboxComponent = ForwardRefWithStaticComponents<
  CheckboxProps,
  { Group: typeof CheckboxGroup }
>;

export const Checkbox: CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      className,
      style,
      sx,
      checked,
      disabled,
      color,
      label,
      indeterminate,
      id,
      size,
      radius,
      wrapperProps,
      children,
      classNames,
      styles,
      transitionDuration,
      icon: Icon,
      unstyled,
      ...others
    } = useComponentDefaultProps('Checkbox', defaultProps, props);

    const ctx = useCheckboxGroupContext();
    const uuid = useId(id);
    const { systemStyles, rest } = extractSystemStyles(others);
    const { classes, cx } = useStyles(
      { size: ctx?.size || size, radius, color, transitionDuration },
      { name: 'Checkbox', classNames, styles, unstyled }
    );

    const contextProps = ctx
      ? {
          checked: ctx.value.includes(rest.value as string),
          onChange: ctx.onChange,
        }
      : {};

    return (
      <Box
        className={cx(classes.root, className)}
        style={style}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        <div className={classes.inner}>
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.input}
            checked={indeterminate || checked}
            disabled={disabled}
            {...rest}
            {...contextProps}
          />

          <Icon indeterminate={indeterminate} className={classes.icon} />
        </div>

        {label && (
          <label data-disabled={disabled || undefined} className={classes.label} htmlFor={uuid}>
            {label}
          </label>
        )}
      </Box>
    );
  }
) as any;

Checkbox.displayName = '@mantine/core/Checkbox';
Checkbox.Group = CheckboxGroup;
