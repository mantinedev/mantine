import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  ClassNames,
  extractMargins,
  MantineNumberSize,
} from '@mantine/styles';
import { useUuid } from '@mantine/hooks';
import { Box } from '../Box';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles from './Checkbox.styles';

export type CheckboxStylesNames = ClassNames<typeof useStyles>;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined label font-size and checkbox width and height in px */
  size?: MantineSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Props spread to wrapper element */
  wrapperProps?: { [key: string]: any };

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Check/uncheck transition duration, set to 0 to disable all transitions */
  transitionDuration?: number;

  /** Replace default icon */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      style,
      sx,
      checked,
      color,
      label,
      indeterminate,
      id,
      size = 'sm',
      radius = 'sm',
      wrapperProps,
      children,
      classNames,
      styles,
      transitionDuration = 100,
      icon: Icon = CheckboxIcon,
      ...others
    }: CheckboxProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const { margins, rest } = extractMargins(others);
    const { classes, cx } = useStyles(
      { size, radius, color, transitionDuration },
      { classNames, styles, name: 'Checkbox' }
    );

    return (
      <Box
        className={cx(classes.root, className)}
        style={style}
        sx={sx}
        {...margins}
        {...wrapperProps}
      >
        <div className={classes.inner}>
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.input}
            checked={indeterminate || checked}
            {...rest}
          />

          <Icon indeterminate={indeterminate} className={classes.icon} />
        </div>

        {label && (
          <label className={classes.label} htmlFor={uuid}>
            {label}
          </label>
        )}
      </Box>
    );
  }
);

Checkbox.displayName = '@mantine/core/Checkbox';
