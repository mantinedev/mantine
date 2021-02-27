import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useId, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Switch.styles';

interface SwitchProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  color?: string;
  size?: MantineSize;
  radius?: MantineNumberSize;
}

export const Switch = forwardRef(
  (
    {
      className,
      value,
      color,
      onChange,
      label,
      disabled,
      id,
      size = 'md',
      radius = 'xl',
      themeOverride,
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
      <div className={cx(classes.wrapper, className)} {...others}>
        <input
          id={uuid}
          ref={ref}
          type="checkbox"
          className={classes.switch}
          checked={value}
          onChange={onChange}
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
