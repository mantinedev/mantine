import React, { forwardRef } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { SwitchStylesParams } from './Switch.styles';
import { SwitchGroup } from './SwitchGroup/SwitchGroup';
import { useSwitchGroupContext } from './SwitchGroup.context';
import { InputDescription } from '../Input/InputDescription/InputDescription';
import { InputError } from '../Input/InputError/InputError';

export type SwitchStylesNames = Selectors<typeof useStyles>;

export interface SwitchProps
  extends DefaultProps<SwitchStylesNames, SwitchStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: React.ReactNode;

  /** Inner label when Switch is in checked state */
  onLabel?: React.ReactNode;

  /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Predefined size value */
  size?: MantineSize;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Icon inside the thumb of switch */
  thumbIcon?: React.ReactNode;

  /** Position of label */
  labelPosition?: 'left' | 'right';

  /** description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;
}

const defaultProps: Partial<SwitchProps> = {
  offLabel: '',
  onLabel: '',
  size: 'sm',
  radius: 'xl',
  error: false,
};

type SwitchComponent = ForwardRefWithStaticComponents<
  HTMLInputElement,
  SwitchProps,
  { Group: typeof SwitchGroup }
>;

export const Switch: SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    className,
    color,
    label,
    offLabel,
    onLabel,
    id,
    style,
    size,
    radius,
    wrapperProps,
    children,
    unstyled,
    styles,
    classNames,
    thumbIcon,
    sx,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    ...others
  } = useComponentDefaultProps('Switch', defaultProps, props);

  const ctx = useSwitchGroupContext();

  const { classes, cx } = useStyles(
    { size: ctx?.size || size, color, radius, labelPosition, error: !!error },
    { unstyled, styles, classNames, name: 'Switch' }
  );

  const { systemStyles, rest } = extractSystemStyles(others);
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
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div className={classes.body}>
        <input
          {...rest}
          checked={_checked}
          onChange={(event) => {
            ctx ? contextProps.onChange(event) : onChange?.(event);
            handleChange(event.currentTarget.checked);
          }}
          id={uuid}
          ref={ref}
          type="checkbox"
          className={classes.input}
        />

        <label htmlFor={uuid} className={classes.track}>
          <div className={classes.thumb}>{thumbIcon}</div>
          <div className={classes.trackLabel}>{_checked ? onLabel : offLabel}</div>
        </label>

        <div className={classes.labelWrapper}>
          {label && (
            <label data-disabled={rest.disabled || undefined} htmlFor={uuid} data-testid="label">
              {label}
            </label>
          )}
          {description && labelPosition === 'right' && (
            <InputDescription pt="4px" className="description">
              {description}
            </InputDescription>
          )}
        </div>
      </div>
      {description && labelPosition === 'left' && (
        <InputDescription pb="4px" className="description">
          {description}
        </InputDescription>
      )}
      {error && typeof error !== 'boolean' && <InputError className="error">{error}</InputError>}
    </Box>
  );
}) as any;

Switch.displayName = '@mantine/core/Switch';
Switch.Group = SwitchGroup;
