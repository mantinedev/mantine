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

  /** Width of track */
  trackWidth?: number;
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
    trackWidth,
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
    ...others
  } = useComponentDefaultProps('Switch', defaultProps, props);

  const { classes, cx } = useStyles(
    { size, color, radius, trackWidth },
    { unstyled, styles, classNames, name: 'Switch' }
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
      <label className={classes.body} htmlFor={uuid}>
        <input {...rest} id={uuid} ref={ref} type="checkbox" className={classes.input} />

        <div className={classes.track}>
          <div className={classes.onLabel}>{onLabel}</div>
          <div className={classes.thumb}>{thumbIcon}</div>
          <div className={classes.offLabel}>{offLabel}</div>
        </div>
        {label && (
          <div data-testid="label" className={classes.label}>
            {label}
          </div>
        )}
      </label>
    </Box>
  );
});

Switch.displayName = '@mantine/core/Switch';
