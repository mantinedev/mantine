import React, { useRef, forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { MantineSize } from '@mantine/core';
import useStyles from '../TimeInputBase.styles';

interface AmPmSelectProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
  /** Label for 'am' */
  amLabel?: string;

  /** Label for 'pm' */
  pmLabel?: string;

  /** Called with onChange event */
  onChange(value: string, triggerShift: boolean): void;

  /** Colon text size */
  size?: MantineSize;
}

export const AmPmInput = forwardRef<HTMLInputElement, AmPmSelectProps>(
  (
    {
      className,
      onChange,
      onFocus,
      size = 'sm',
      amLabel,
      pmLabel,
      value,
      ...others
    }: AmPmSelectProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size, hasValue: !!value });
    const inputRef = useRef<HTMLInputElement>();

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      inputRef.current.select();
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      event.stopPropagation();
      inputRef.current.select();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.nativeEvent.code === 'ArrowUp' || event.nativeEvent.code === 'ArrowDown') {
        event.preventDefault();
        onChange(value === amLabel ? pmLabel : amLabel, true);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const lastInputVal = event.target.value.slice(-1).toLowerCase();

      if (lastInputVal === 'p') {
        event.preventDefault();
        onChange(pmLabel, true);
        return;
      }

      if (lastInputVal === 'a') {
        event.preventDefault();
        onChange(amLabel, true);
        return;
      }

      onChange(value.toString(), true);
    };

    return (
      <input
        type="text"
        ref={useMergedRef(inputRef, ref)}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
        className={cx(classes.timeInput, classes.amPmInput)}
        {...others}
      />
    );
  }
);

AmPmInput.displayName = '@mantine/dates/AmPmInput';
