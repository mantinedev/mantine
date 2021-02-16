import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useId, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Switch.styles';

interface SwitchProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value: boolean;
  onChange(value: boolean, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  color?: string;
}

const Switch = forwardRef(
  (
    {
      className,
      value,
      color,
      onChange,
      label,
      disabled,
      id,
      themeOverride,
      ...others
    }: SwitchProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({
      color,
      reduceMotion: useReducedMotion(),
      theme: useMantineTheme(themeOverride),
    });

    const uuid = useId(id);

    return (
      <div className={cx(classes.wrapper, className)} {...others}>
        <button
          ref={ref}
          disabled={disabled}
          className={cx(classes.switch, { [classes.checked]: value })}
          type="button"
          role="checkbox"
          onClick={(event) => onChange(!value, event)}
          aria-checked={value}
          id={uuid}
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

export default Switch;
