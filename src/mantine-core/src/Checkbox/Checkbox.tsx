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
  value: boolean;
  onChange(value: boolean): void;
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

const Checkbox = forwardRef(
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
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const uuid = useId(id);
    const classes = useStyles({ size, color, theme: useMantineTheme(themeOverride) });

    return (
      <div className={cx(classes.wrapper, className)} {...others}>
        <button
          ref={ref}
          disabled={disabled}
          className={cx(classes.checkbox, { [classes.checked]: value })}
          type="button"
          role="checkbox"
          onClick={() => onChange(!value)}
          aria-checked={value}
          id={uuid}
        >
          {value && <CheckIcon className={classes.icon} />}
        </button>

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

export default Checkbox;
