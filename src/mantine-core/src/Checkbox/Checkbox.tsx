import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineNumberSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { useId } from '@mantine/hooks';
import { extractSystemStyles } from '../Box';
import { InlineInput, InlineInputStylesNames } from '../InlineInput';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles, { CheckboxStylesParams } from './Checkbox.styles';

export type CheckboxStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames, CheckboxStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  variant?: string;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Controls label font-size and checkbox width and height */
  size?: MantineNumberSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, if set, `checked` prop is ignored */
  indeterminate?: boolean;

  /** Props added to the root element */
  wrapperProps?: Record<string, any>;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Icon rendered when checkbox has checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;

  /** Position of the label */
  labelPosition?: 'left' | 'right';

  /** Description, displayed after the label */
  description?: React.ReactNode;

  /** Error message displayed after the input */
  error?: React.ReactNode;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  transitionDuration: 100,
  icon: CheckboxIcon,
  labelPosition: 'right',
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
      labelPosition,
      description,
      error,
      variant,
      ...others
    } = useComponentDefaultProps('Checkbox', defaultProps, props);

    const ctx = useCheckboxGroupContext();
    const uuid = useId(id);
    const { systemStyles, rest } = extractSystemStyles(others);
    const { classes } = useStyles(
      {
        radius,
        color,
        transitionDuration,
        labelPosition,
        error: !!error,
        indeterminate,
      },
      { name: 'Checkbox', classNames, styles, unstyled, variant, size: ctx?.size || size }
    );

    const contextProps = ctx
      ? {
          checked: ctx.value.includes(rest.value as string),
          onChange: ctx.onChange,
        }
      : {};

    return (
      <InlineInput
        className={className}
        sx={sx}
        style={style}
        id={uuid}
        size={ctx?.size || size}
        labelPosition={labelPosition}
        label={label}
        description={description}
        error={error}
        disabled={disabled}
        __staticSelector="Checkbox"
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
        data-checked={contextProps.checked || undefined}
        variant={variant}
        {...systemStyles}
        {...wrapperProps}
      >
        <div className={classes.inner}>
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.input}
            checked={checked}
            disabled={disabled}
            {...rest}
            {...contextProps}
          />

          <Icon indeterminate={indeterminate} className={classes.icon} />
        </div>
      </InlineInput>
    );
  }
) as any;

Checkbox.displayName = '@mantine/core/Checkbox';
Checkbox.Group = CheckboxGroup;
