import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { SwitchStylesParams } from './Switch.styles';

export type SwitchStylesNames = Selectors<typeof useStyles>;

export interface SwitchProps
  extends DefaultProps<SwitchStylesNames, SwitchStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: string;

  /** Inner label when Switch is in checked state */
  onLabel?: string;

  /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Predefined size value */
  size?: MantineSize;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<SwitchProps> = {
  offLabel: '',
  onLabel: '',
  size: 'sm',
  radius: 'xl',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
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
    sx,
    ...others
  } = useComponentDefaultProps('Switch', defaultProps, props);

  const { classes, cx } = useStyles(
    { size, color, radius, offLabel, onLabel },
    { unstyled, name: 'Switch' }
  );

  const { systemStyles, rest } = extractSystemStyles(others);
  const uuid = useId(id);

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <input {...rest} id={uuid} ref={ref} type="checkbox" className={classes.input} />

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Switch.displayName = '@mantine/core/Switch';
