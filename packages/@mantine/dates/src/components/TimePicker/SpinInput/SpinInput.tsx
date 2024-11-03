import { forwardRef } from 'react';
import { clamp } from '@mantine/hooks';
import { useTimePickerContext } from '../TimePicker.context';
import { padTime } from '../utils/pad-time/pad-time';

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
      className,
      style,
      onNextInput,
      onPreviousInput,
      onFocus,
      readOnly,
      ...others
    },
    ref
  ) => {
    const ctx = useTimePickerContext();
    const maxDigit = getMaxDigit(max);

    const handleChange = (value: string) => {
      if (readOnly) {
        return;
      }

      const clearValue = value.replace(/\D/g, '');
      if (clearValue !== '') {
        const parsedValue = clamp(parseInt(clearValue, 10), min, max);
        onChange(parsedValue);
        if (parsedValue > maxDigit) {
          onNextInput?.();
        }
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) {
        return;
      }

      if (event.key === 'Backspace') {
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
        const newValue = value === null ? min : clamp(value + step, min, max);
        onChange(newValue);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const newValue = value === null ? max : clamp(value - step, min, max);
        onChange(newValue);
      }
    };

    return (
      <input
        {...ctx.getStyles('field', { className, style })}
        ref={ref}
        type="text"
        data-empty={value === null || undefined}
        inputMode="numeric"
        placeholder="--"
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
