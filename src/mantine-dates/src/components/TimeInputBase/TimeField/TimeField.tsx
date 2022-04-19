import React, { useRef, forwardRef, useState } from 'react';
import { useMergedRef, clamp } from '@mantine/hooks';
import { Text, MantineSize } from '@mantine/core';
import { padTime } from '../pad-time/pad-time';
import useStyles from '../TimeInputBase.styles';
import type { createTimeHandler } from '../create-time-handler/create-time-handler';

interface TimeFieldProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
  /** Called with onChange event */
  onChange: ReturnType<typeof createTimeHandler>;

  /** Called to set input value and bypass parent validation/onChange calls */
  setValue(value: string): void;

  /** Adds colon after the field */
  withSeparator?: boolean;

  /** Colon text size */
  size?: MantineSize;

  /** Maximum possible value */
  max?: number;

  /** Minimum possible value. Default 0 */
  min?: number;
}

export const TimeField = forwardRef<HTMLInputElement, TimeFieldProps>(
  (
    {
      className,
      onFocus,
      onBlur,
      onChange,
      setValue,
      withSeparator = false,
      size = 'sm',
      max,
      min = 0,
      value,
      ...others
    }: TimeFieldProps,
    ref
  ) => {
    const [digitsEntered, setDigitsEntered] = useState(0);
    const { classes, cx, theme } = useStyles({ size, hasValue: !!value });
    const inputRef = useRef<HTMLInputElement>();

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      inputRef.current.select();
      setDigitsEntered(0);
    };

    const handleBlur = (event: any) => {
      typeof onBlur === 'function' && onBlur(event);
      // Call onChange in case the only digit entered is 0
      if (digitsEntered === 1) {
        typeof onChange === 'function' && onChange(event.currentTarget.value, false);
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      event.stopPropagation();
      inputRef.current.select();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.nativeEvent.code === 'ArrowUp') {
        event.preventDefault();
        const padded = padTime(
          clamp({ value: parseInt(event.currentTarget.value, 10) + 1, max, min }).toString()
        );

        if (value !== padded) {
          onChange(padded, false);
        }
      }

      if (event.nativeEvent.code === 'ArrowDown') {
        event.preventDefault();
        const padded = padTime(
          clamp({ value: parseInt(event.currentTarget.value, 10) - 1, max, min }).toString()
        );

        if (value !== padded) {
          onChange(padded, false);
        }
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDigitsEntered(digitsEntered + 1);

      const _val = parseInt(event.currentTarget.value, 10).toString();

      // In 12-hour format, 0 is not allowed, but it could be the start of 01, 02, etc.
      if (_val === '0' && digitsEntered === 0) {
        setValue('00');
        return;
      }
      onChange(_val, true, digitsEntered > 0);
    };

    return (
      <>
        <input
          type="text"
          inputMode="numeric"
          ref={useMergedRef(inputRef, ref)}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          value={value}
          className={cx(classes.timeInput, className)}
          {...others}
        />

        {withSeparator && (
          <Text
            size={size}
            style={{
              lineHeight: 1,
              color: value
                ? 'inherit'
                : theme.colorScheme === 'dark'
                ? theme.colors.dark[2]
                : theme.colors.gray[7],
            }}
          >
            :
          </Text>
        )}
      </>
    );
  }
);

TimeField.displayName = '@mantine/dates/TimeField';
