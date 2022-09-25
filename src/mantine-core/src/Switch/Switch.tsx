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
}

const defaultProps: Partial<SwitchProps> = {
  offLabel: '',
  onLabel: '',
  size: 'sm',
  radius: 'xl',
};

type SwitchComponent = ForwardRefWithStaticComponents<SwitchProps, { Group: typeof SwitchGroup }>;

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
    ...others
  } = useComponentDefaultProps('Switch', defaultProps, props);

  const ctx = useSwitchGroupContext();

  const { classes, cx } = useStyles(
    { size: ctx?.size || size, color, radius },
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
      <label className={classes.body} htmlFor={uuid}>
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

        <div className={classes.track}>
          <div className={classes.thumb}>{thumbIcon}</div>
          <div className={classes.trackLabel}>{_checked ? onLabel : offLabel}</div>
        </div>

        {label && (
          <div
            data-testid="label"
            data-disabled={rest.disabled || undefined}
            className={classes.label}
          >
            {label}
          </div>
        )}
      </label>
    </Box>
  );
}) as any;

Switch.displayName = '@mantine/core/Switch';
Switch.Group = SwitchGroup;
