import React, { useRef, forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { MantineSize } from '@mantine/core';
import useStyles from '../TimeInputBase.styles';

interface AmPmSelectProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
  /** Called with onChange event */
  onChange(value: string, triggerShift: boolean): void;

  /** Colon text size */
  size?: MantineSize;
}

export const AmPmInput = forwardRef<HTMLInputElement, AmPmSelectProps>(
  ({ className, onChange, onFocus, size = 'sm', value, ...others }: AmPmSelectProps, ref) => {
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
        onChange(value === 'am' ? 'pm' : 'am', true);
      }

      if (event.key === 'p' || event.nativeEvent.code === 'KeyP') {
        event.preventDefault();
        onChange('pm', true);
      }

      if (event.key === 'a' || event.nativeEvent.code === 'KeyA') {
        event.preventDefault();
        onChange('am', true);
      }
    };

    /*
      If the field change is triggered onKeyDown, the keyUp event seems to steal focus back from the nextRef
      This way, all key presses focus nextRef and don't steal it back
      Anything beside a or p will leave the value and just move to the next field
    */
    const handleChange = () => {
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
        className={cx(classes.timeInput, className)}
        {...others}
      />
    );
  }
);

AmPmInput.displayName = '@mantine/dates/AmPmInput';
