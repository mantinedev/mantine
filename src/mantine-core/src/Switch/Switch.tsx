import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useId, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Switch.styles';

interface SwitchProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;
  checked?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  label?: React.ReactNode;
  disabled?: boolean;
  color?: string;
  size?: MantineSize;
  radius?: MantineNumberSize;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input element */
  inputClassName?: string;

  /** Props spread to wrapper element */
  wrapperProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'>;
}

export const Switch = forwardRef(
  (
    {
      className,
      checked,
      color,
      onChange,
      label,
      disabled,
      id,
      style,
      size = 'md',
      radius = 'xl',
      themeOverride,
      wrapperProps,
      inputStyle,
      inputClassName,
      ...others
    }: SwitchProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
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
          ref={ref}
          type="checkbox"
          className={cx(classes.switch, inputClassName)}
          checked={checked}
          onChange={onChange}
          style={inputStyle}
          disabled={disabled}
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
);

Switch.displayName = '@mantine/core/Switch';
