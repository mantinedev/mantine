import { clamp } from '@mantine/hooks';
import { padTime } from '../TimePicker/utils/pad-time/pad-time';

interface SpinInputProps extends Omit<React.ComponentProps<'input'>, 'onChange' | 'value'> {
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
  disableAutoAdvance?: boolean;
}

const getMaxDigit = (max: number) => Number(max.toFixed(0)[0]);

export function SpinInput({
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
  disableAutoAdvance = false,
  ...others
}: SpinInputProps) {
  const hasMax = Number.isFinite(max);
  const maxDigit = hasMax ? getMaxDigit(max) : Infinity;
  const arrowsMax = hasMax ? max + 1 - step : max;

  const handleChange = (value: string) => {
    if (readOnly) {
      return;
    }

    const clearValue = value.replace(/\D/g, '');
    if (clearValue !== '') {
      let parsedValue = 0;
      for (let i = 0; i < clearValue.length; i += 1) {
        const digit = clearValue.charCodeAt(i) - 48;
        const next = parsedValue * 10 + digit;
        parsedValue = next > max ? digit : next;
      }

      const clampedValue =
        allowTemporaryZero && parsedValue === 0 && min > 0 ? 0 : clamp(parsedValue, min, max);

      onChange(clampedValue);

      if (!disableAutoAdvance && (clampedValue > maxDigit || value.startsWith('00'))) {
        onNextInput?.();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (readOnly) {
      return;
    }

    if (event.key === '0' || event.key === 'Num0') {
      const { selectionStart, selectionEnd, value: inputValue } = event.currentTarget;
      const isEntireValueSelected =
        inputValue.length > 0 && selectionStart === 0 && selectionEnd === inputValue.length;

      if (value === 0 && !isEntireValueSelected) {
        event.preventDefault();
        onNextInput?.();
      }
    }

    if (event.key === 'Home') {
      event.preventDefault();
      onChange(min);
    }

    if (event.key === 'End' && hasMax) {
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
      const fallback = hasMax ? arrowsMax : min;
      const newValue = value === null ? fallback : clamp(value - step, min, arrowsMax);
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      // eslint-disable-next-line jsx-a11y/no-redundant-roles -- input type="text" has implicit role textbox, not spinbutton; the role is required here because this text input acts as a spinbutton
      role="spinbutton"
      aria-valuemin={min}
      aria-valuemax={hasMax ? max : undefined}
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

SpinInput.displayName = '@mantine/dates/SpinInput';
