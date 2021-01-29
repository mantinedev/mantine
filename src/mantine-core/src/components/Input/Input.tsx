import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Input.styles.less';

interface InputProps extends DefaultProps, Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  invalid?: boolean;
  icon?: React.ReactNode;
  inputClassName?: string;
}

const Input = forwardRef(
  (
    { className, invalid = false, icon, style, inputClassName, ...others }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <div className={cx(classes.inputWrapper, className)} style={style}>
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
  )
);

Input.displayName = '@mantine/core/Input';

export default Input;
