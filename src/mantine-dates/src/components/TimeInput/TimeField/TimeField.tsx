import React, { useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
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
}

export function TimeField({
  elementRef,
  onFocus,
  onBlur,
  onChange,
  setValue,
  withSeparator = false,
  size = 'sm',
  ...others
}: TimeFieldProps) {
  const inputRef = useRef<HTMLInputElement>();

  return (
    <>
      <input
        type="text"
        ref={useMergedRef(inputRef, elementRef)}
        onChange={(event) => onChange(event.currentTarget.value)}
        onClick={(event) => {
          event.stopPropagation();
          inputRef.current.select();
        }}
        onFocus={(event) => {
          typeof onFocus === 'function' && onFocus(event);
          inputRef.current.select();
        }}
        onBlur={(event) => {
          typeof onBlur === 'function' && onBlur(event);
          setValue(padTime(parseInt(event.currentTarget.value, 10)));
        }}
        {...others}
      />

      {withSeparator && (
        <Text size={size} style={{ lineHeight: 1 }}>
          :
        </Text>
      )}
    </>
  );
}
