import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Input.styles';

interface InputProps extends DefaultProps, Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  invalid?: boolean;
  icon?: React.ReactNode;
  inputClassName?: string;
  variant?: 'default' | 'unstyled';
}

const Input = forwardRef(
  (
    {
      className,
      invalid = false,
      variant = 'default',
      icon,
      style,
      inputClassName,
      themeOverride,
      ...others
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });

    return (
      <div
        className={cx(classes.inputWrapper, classes[`${variant}Variant`], className)}
        style={style}
      >
        {icon && <div className={classes.icon}>{icon}</div>}
        <input
          {...others}
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

export default Input;
