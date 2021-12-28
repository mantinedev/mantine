import React, { useRef, forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { MantineSize, NativeSelect } from '@mantine/core';

interface AmPmSelectProps extends Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  /** Called when input loses focus, used to format value */
  setValue(value: string): void;

  /** Colon text size */
  size?: MantineSize;

  /** label for am select */
  amLabel?: string;

  /** label for pm select */
  pmLabel?: string;

  /** Displays error message after input */
  error?: React.ReactNode;
}

export const AmPmSelect = forwardRef<HTMLSelectElement, AmPmSelectProps>(
  (
    {
      className,
      onFocus,
      onBlur,
      setValue,
      size = 'sm',
      amLabel = 'AM',
      pmLabel = 'PM',
      error,
      value,
      ...others
    }: AmPmSelectProps,
    ref
  ) => {
    const inputRef = useRef<HTMLSelectElement>();

    const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      inputRef.current.focus();
    };

    const handleBlur = (event: any) => {
      typeof onBlur === 'function' && onBlur(event);
    };

    const handleClick = (event: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
      event.stopPropagation();
      inputRef.current.focus();
    };

    return (
      <NativeSelect
        ref={useMergedRef(inputRef, ref)}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        size={size}
        data={[
          { value: 'am', label: amLabel },
          { value: 'pm', label: pmLabel },
        ]}
        variant="unstyled"
        rightSectionProps={{ style: { display: 'none' } }}
        rightSection={false}
        className={className}
        error={error}
        {...others}
      />
    );
  }
);

AmPmSelect.displayName = '@mantine/dates/AmPmSelect';
