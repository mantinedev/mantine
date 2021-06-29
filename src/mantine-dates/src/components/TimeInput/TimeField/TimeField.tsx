import React, { useRef } from 'react';
import { useMergedRef, clamp } from '@mantine/hooks';
import { Text, MantineSize } from '@mantine/core';
import { padTime } from '../pad-time/pad-time';

interface TimeFieldProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Called with onChange event */
  onChange(value: string): void;

  /** Called when input loses focus, used to format value */
  setValue(value: string): void;

  /** Adds colon after the field */
  withSeparator?: boolean;

  /** Colon text size */
  size?: MantineSize;

  /** Maximum possible value, min value is always 0 */
  max?: number;
}

export function TimeField({
  elementRef,
  onFocus,
  onBlur,
  onChange,
  setValue,
  withSeparator = false,
  size = 'sm',
  max,
  ...others
}: TimeFieldProps) {
  const inputRef = useRef<HTMLInputElement>();

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    inputRef.current.select();
  };

  const handleBlur = (event: any) => {
    typeof onBlur === 'function' && onBlur(event);
    setValue(padTime(clamp({ value: parseInt(event.currentTarget.value, 10), min: 0, max })));
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.stopPropagation();
    inputRef.current.select();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.code === 'ArrowUp') {
      event.preventDefault();
      setValue(padTime(clamp({ value: parseInt(event.currentTarget.value, 10) + 1, max, min: 0 })));
    }

    if (event.nativeEvent.code === 'ArrowDown') {
      event.preventDefault();
      setValue(padTime(clamp({ value: parseInt(event.currentTarget.value, 10) - 1, max, min: 0 })));
    }
  };

  return (
    <>
      <input
        type="text"
        ref={useMergedRef(inputRef, elementRef)}
        onChange={(event) => onChange(event.currentTarget.value)}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...others}
      />

      {withSeparator && (
        <Text size={size} style={{ lineHeight: 1, color: 'inherit' }}>
          :
        </Text>
      )}
    </>
  );
}

TimeField.displayName = '@mantine/dates/TimeField';
