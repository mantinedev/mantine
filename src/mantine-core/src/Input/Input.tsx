import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Input.styles';

interface InputProps extends DefaultProps, React.ComponentPropsWithoutRef<'input'> {
  invalid?: boolean;
  /** Adds icon on the left side of input */
  icon?: React.ReactNode;
  inputClassName?: string;

  /** Properties spread to root element */
  wrapperProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'style' | 'children'>;
  inputStyle?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  radius?: MantineNumberSize;
  variant?: 'default' | 'filled' | 'unstyled';
}

export const Input = forwardRef(
  (
    {
      className,
      invalid = false,
      disabled = false,
      required = false,
      variant = 'default',
      icon,
      style,
      radius = 'sm',
      inputClassName,
      inputStyle,
      themeOverride,
      wrapperProps,
      ...others
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });

    return (
      <div
        className={cx(classes.inputWrapper, classes[`${variant}Variant`], className)}
        style={style}
        {...wrapperProps}
      >
        {icon && (
          <div data-mantine-icon className={classes.icon}>
            {icon}
          </div>
        )}

        <input
          {...others}
          aria-required={required}
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
