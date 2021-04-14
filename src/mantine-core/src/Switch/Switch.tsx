import React from 'react';
import cx from 'clsx';
import { useId, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineSize, useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Switch.styles';

export const SWITCH_SIZES = sizes;

interface SwitchProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Switch checked state color from theme, defaults to theme.primaryColor */
  color?: string;

  /** Predefined size value */
  size?: MantineSize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input element */
  inputClassName?: string;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Switch({
  className,
  color,
  label,
  id,
  style,
  size = 'md',
  radius = 'xl',
  themeOverride,
  wrapperProps,
  inputStyle,
  inputClassName,
  elementRef,
  ...others
}: SwitchProps) {
  const classes = useStyles({
    size,
    color,
    radius,
    reduceMotion: useReducedMotion(),
    theme: useMantineTheme(themeOverride),
  });

  const uuid = useId(id);

  return (
    <div className={cx(classes.wrapper, className)} style={style} {...wrapperProps}>
      <input
        id={uuid}
        ref={elementRef}
        type="checkbox"
        className={cx(classes.switch, inputClassName)}
        style={inputStyle}
        {...others}
      />

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </div>
  );
}

Switch.displayName = '@mantine/core/Switch';
