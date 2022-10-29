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
import { CheckboxIcon } from './CheckboxIcon';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import { InlineInput, InlineInputStylesNames } from '../InlineInput';
import useStyles, { CheckboxStylesParams } from './Checkbox.styles';

export type CheckboxStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;

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

  /** Position of label */
  labelPosition?: 'left' | 'right';

  /** description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
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
      ...others
    } = useComponentDefaultProps('Checkbox', defaultProps, props);

    const ctx = useCheckboxGroupContext();
    const uuid = useId(id);
    const { systemStyles, rest } = extractSystemStyles(others);
    const { classes } = useStyles(
      {
        size: ctx?.size || size,
        radius,
        color,
        transitionDuration,
        labelPosition,
        error: !!error,
        indeterminate,
      },
      { name: 'Checkbox', classNames, styles, unstyled }
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
