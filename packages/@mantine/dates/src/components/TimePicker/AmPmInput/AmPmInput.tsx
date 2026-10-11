import { useState } from 'react';
import { useTimePickerContext } from '../TimePicker.context';

const CLEAR_BUFFER_KEYS = [
  'Home',
  'End',
  'Backspace',
  'Delete',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
];
const CLEAR_BUFFER_CODES = ['KeyA', 'KeyP'];

function resolveTypedAmPm(typed: string, buffer: string, labels: { am: string; pm: string }) {
  const options = [labels.am, labels.pm];
  const normalized = typed.toLowerCase();
  const exact = options.find((option) => normalized.endsWith(option.toLowerCase()));

  if (exact) {
    return { value: exact, buffer: '' };
  }

  const lastChar = typed.slice(-1);
  const prefixes = buffer ? [buffer + lastChar, lastChar] : [lastChar];

  for (const prefix of prefixes) {
    const matches = options.filter((option) =>
      option.toLowerCase().startsWith(prefix.toLowerCase())
    );

    if (matches.length === 1) {
      return { value: matches[0], buffer: '' };
    }

    if (matches.length > 1) {
      return { value: null, buffer: prefix };
    }
  }

  return null;
}

interface AmPmInputProps extends Omit<React.ComponentProps<'select'>, 'value' | 'onChange'> {
  labels: { am: string; pm: string };
  value: string | null;
  inputType: 'select' | 'input';
  onChange: (value: string | null) => void;
  readOnly?: boolean;
  onPreviousInput?: () => void;
}

export function AmPmInput({
  labels,
  value,
  onChange,
  className,
  style,
  onPreviousInput,
  readOnly,
  onMouseDown,
  onTouchStart,
  onBlur,
  inputType,
  ...others
}: AmPmInputProps) {
  const ctx = useTimePickerContext();
  const [typedBuffer, setTypedBuffer] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    if (readOnly) {
      return;
    }

    if (
      typedBuffer &&
      (CLEAR_BUFFER_KEYS.includes(event.key) || CLEAR_BUFFER_CODES.includes(event.code))
    ) {
      setTypedBuffer('');
    }

    if (event.key === 'Home') {
      event.preventDefault();
      onChange(labels.am);
    }

    if (event.key === 'End') {
      event.preventDefault();
      onChange(labels.pm);
    }

    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      if (value === null) {
        !typedBuffer && onPreviousInput?.();
      } else {
        onChange(null);
      }
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPreviousInput?.();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      onChange(value === labels.am ? labels.pm : labels.am);
    }

    if (event.code === 'KeyA') {
      event.preventDefault();
      onChange(labels.am);
    }

    if (event.code === 'KeyP') {
      event.preventDefault();
      onChange(labels.pm);
    }
  };

  if (inputType === 'input') {
    const displayValue = typedBuffer || value || '--';
    const inputSize = displayValue.length + 1;

    return (
      <input
        {...ctx.getStyles('field', { className, style })}
        value={displayValue}
        size={inputSize}
        onChange={(event) => {
          if (readOnly) {
            return;
          }

          const typed = event.target.value;
          if (!typed) {
            setTypedBuffer('');
            onChange(null);
            return;
          }

          const resolved = resolveTypedAmPm(typed, typedBuffer, labels);

          if (!resolved) {
            return;
          }

          setTypedBuffer(resolved.buffer);
          resolved.value && onChange(resolved.value);
        }}
        onBlur={(event) => {
          setTypedBuffer('');
          onBlur?.(event as any);
        }}
        onClick={((event: any) => event.stopPropagation()) as any}
        onKeyDown={handleKeyDown as any}
        onMouseDown={(event) => {
          event.stopPropagation();
          onMouseDown?.(event as any);
        }}
        data-am-pm
        {...(others as any)}
      />
    );
  }

  return (
    <select
      {...ctx.getStyles('field', { className, style })}
      value={value || ''}
      onChange={(event) => !readOnly && onChange(event.target.value || null)}
      onClick={(event) => event.stopPropagation()}
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      onMouseDown={(event) => {
        event.stopPropagation();
        onMouseDown?.(event);
      }}
      data-am-pm
      {...others}
    >
      <option value="">--</option>
      <option value={labels.am}>{labels.am}</option>
      <option value={labels.pm}>{labels.pm}</option>
    </select>
  );
}

AmPmInput.displayName = '@mantine/dates/AmPmInput';
