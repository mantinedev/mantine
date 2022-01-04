import React, { useRef, forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { MantineSize } from '@mantine/core';
import useStyles from '../TimeInputBase.styles';

interface AmPmSelectProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
  /** Called with onChange event */
  onChange(value: string, triggerShift: boolean): void;

  /** Called when input loses focus, used to format value */
  setValue(value: string): void;

  /** Colon text size */
  size?: MantineSize;
}

export const AmPmInput = forwardRef<HTMLInputElement, AmPmSelectProps>(
  (
    { className, onChange, onFocus, setValue, size = 'sm', value, ...others }: AmPmSelectProps,
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
        onChange(value === 'am' ? 'pm' : 'am', false);
      }

      if (event.nativeEvent.code === 'KeyP') {
        onChange('pm', true);
      }

      if (event.nativeEvent.code === 'KeyA') {
        onChange('am', true);
      }
    };

    return (
      <input
        type="text"
        ref={useMergedRef(inputRef, ref)}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        readOnly
        value={value}
        className={cx(classes.timeInput, className)}
        {...others}
      />
    );
  }
);

AmPmInput.displayName = '@mantine/dates/AmPmInput';
