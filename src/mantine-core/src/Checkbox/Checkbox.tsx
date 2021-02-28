import React, { forwardRef } from 'react';
import cx from 'clsx';
import { CheckIcon } from '@modulz/radix-icons';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Checkbox.styles';

interface CheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  color?: string;
  size?: MantineNumberSize;
  value?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  label?: React.ReactNode;
  disabled?: boolean;

  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;
}

export const Checkbox = forwardRef(
  (
    {
      className,
      value,
      onChange,
      color,
      themeOverride,
      label,
      disabled,
      id,
      size,
      ...others
    }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const uuid = useId(id);
    const classes = useStyles({ size, color, theme: useMantineTheme(themeOverride) });

    return (
      <div className={cx(classes.wrapper, className)} {...others}>
        <div className={classes.checkboxWrapper}>
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.checkbox}
            checked={value}
            onChange={onChange}
            disabled={disabled}
          />
          <CheckIcon className={classes.icon} />
        </div>

        {label && (
          <label className={classes.label} htmlFor={uuid}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = '@mantine/core/Checkbox';
