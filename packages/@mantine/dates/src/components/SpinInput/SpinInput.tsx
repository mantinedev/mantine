import { forwardRef } from 'react';
import { clamp } from '@mantine/hooks';
import { padTime } from '../TimePicker/utils/pad-time/pad-time';

interface SpinInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'> {
  value: number | null;
  min: number;
  max: number;
  onChange: (value: number | null) => void;
  focusable: boolean;
  step: number;
  onNextInput?: () => void;
  onPreviousInput?: () => void;
  allowTemporaryZero?: boolean;
  placeholder?: string;
}

const getMaxDigit = (max: number) => Number(max.toFixed(0)[0]);

export const SpinInput = forwardRef<HTMLInputElement, SpinInputProps>(
  (
    {
      value,
      min,
      max,
      onChange,
      focusable,
      step,
      onNextInput,
      onPreviousInput,
      onFocus,
      readOnly,
      allowTemporaryZero = false,
      placeholder = '--',
      ...others
    },
    ref
  ) => {
    const maxDigit = getMaxDigit(max);
    const arrowsMax = max + 1 - step;

    const handleChange = (value: string) => {
      if (readOnly) {
        return;
      }

      const clearValue = value.replace(/\D/g, '');
      if (clearValue !== '') {
        const parsedValue = parseInt(clearValue, 10);
        const clampedValue =
          allowTemporaryZero && parsedValue === 0 && min > 0 ? 0 : clamp(parsedValue, min, max);

        onChange(clampedValue);

        if (clampedValue > maxDigit || value.startsWith('00')) {
          onNextInput?.();
        }
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) {
        return;
      }

      if (event.key === '0' || event.key === 'Num0') {
        if (value === 0) {
          event.preventDefault();
          onNextInput?.();
        }
      }

      if (event.key === 'Home') {
        event.preventDefault();
        onChange(min);
      }

      if (event.key === 'End') {
        event.preventDefault();
        onChange(max);
      }

      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();

        if (value !== null) {
          onChange(null);
        } else {
          onPreviousInput?.();
        }
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onNextInput?.();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onPreviousInput?.();
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        const newValue = value === null ? min : clamp(value + step, min, arrowsMax);
        onChange(newValue);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const newValue = value === null ? arrowsMax : clamp(value - step, min, arrowsMax);
        onChange(newValue);
      }
    };

    return (
      <input
        ref={ref}
        type="text"
        role="spinbutton"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value === null ? 0 : value}
        data-empty={value === null || undefined}
        inputMode="numeric"
        placeholder={placeholder}
        value={value === null ? '' : padTime(value)}
        onChange={(event) => handleChange(event.currentTarget.value)}
        onKeyDown={handleKeyDown}
        onFocus={(event) => {
          event.currentTarget.select();
          onFocus?.(event);
        }}
        onClick={(event) => {
          event.stopPropagation();
          event.currentTarget.select();
        }}
        onMouseDown={(event) => event.stopPropagation()}
        {...others}
      />
    );
  }
);

SpinInput.displayName = '@mantine/dates/SpinInput';
