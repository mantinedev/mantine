import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Input.styles';

interface InputProps extends DefaultProps, React.ComponentPropsWithoutRef<'input'> {
  invalid?: boolean;
  icon?: React.ReactNode;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  disabled?: boolean;
  radius?: MantineNumberSize;
  variant?: 'default' | 'unstyled';
}

export const Input = forwardRef(
  (
    {
      className,
      invalid = false,
      disabled = false,
      variant = 'default',
      icon,
      style,
      radius = 'sm',
      inputClassName,
      inputStyle,
      themeOverride,
      ...others
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });

    return (
      <div
        className={cx(classes.inputWrapper, classes[`${variant}Variant`], className)}
        style={style}
      >
        {icon && <div className={classes.icon}>{icon}</div>}
        <input
          {...others}
          disabled={disabled}
          style={inputStyle}
          ref={ref}
          className={cx(
            classes.input,
            { [classes.invalid]: invalid, [classes.withIcon]: icon },
            inputClassName
          )}
        />
      </div>
    );
  }
);

Input.displayName = '@mantine/core/Input';
