import React, { useRef, forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { MantineSize } from '@mantine/core';
import useStyles from './AmPmInput.styles';

interface AmPmSelectProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
  /** Called with onChange event */
  onChange(value: string, triggerShift: boolean): void;

  /** Called when input loses focus, used to format value */
  setValue(value: string): void;

  /** Colon text size */
  size?: MantineSize;

  /** Displays error message after input */
  error?: React.ReactNode;
}

export const AmPmInput = forwardRef<HTMLInputElement, AmPmSelectProps>(
  (
    {
      className,
      onChange,
      onFocus,
      onBlur,
      setValue,
      size = 'sm',
      error,
      value,
      ...others
    }: AmPmSelectProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size });
    const inputRef = useRef<HTMLInputElement>();

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      inputRef.current.select();
    };

    const handleBlur = (event: any) => {
      typeof onBlur === 'function' && onBlur(event);
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      event.stopPropagation();
      inputRef.current.select();
    };

    return (
      <input
        type="text"
        ref={useMergedRef(inputRef, ref)}
        onChange={(event) => onChange(event.currentTarget.value, true)}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        className={cx(classes.amPmInput, className)}
        {...others}
      />
    );
  }
);

AmPmInput.displayName = '@mantine/dates/AmPmInput';
