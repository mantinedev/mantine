import React, { forwardRef } from 'react';
import cx from 'clsx';
import { CheckIcon } from '@modulz/radix-icons';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Checkbox.styles';

interface CheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  color?: string;
  size?: MantineNumberSize;
  label?: React.ReactNode;
  disabled?: boolean;
  inputStyle?: React.CSSProperties;

  /** Props spread to wrapper element */
  wrapperProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'>;

  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;
}

export const Checkbox = forwardRef(
  (
    {
      className,
      checked,
      onChange,
      color,
      themeOverride,
      label,
      disabled,
      id,
      size,
      wrapperProps,
      style,
      inputStyle,
      ...others
    }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const uuid = useId(id);
    const classes = useStyles({ size, color, theme: useMantineTheme(themeOverride) });

    return (
      <div className={cx(classes.wrapper, className)} style={style} {...wrapperProps}>
        <div className={classes.checkboxWrapper}>
          <input
            {...others}
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.checkbox}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            style={inputStyle}
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
