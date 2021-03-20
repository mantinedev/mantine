import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Input.styles';

interface InputProps extends DefaultProps, React.ComponentPropsWithoutRef<'input'> {
  /** Sets border color to red */
  invalid?: boolean;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Add className to input element */
  inputClassName?: string;

  /** Properties spread to root element */
  wrapperProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'style' | 'children'>;

  /** Adds style to input element */
  inputStyle?: React.CSSProperties;

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Defines input appearance */
  variant?: 'default' | 'filled' | 'unstyled';
}

export const Input = forwardRef(
  (
    {
      className,
      invalid = false,
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
        className={cx(
          classes.inputWrapper,
          { [classes.invalid]: invalid },
          classes[`${variant}Variant`],
          className
        )}
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
          style={inputStyle}
          ref={ref}
          className={cx({ [classes.withIcon]: icon }, classes.input, inputClassName)}
        />
      </div>
    );
  }
);

Input.displayName = '@mantine/core/Input';
