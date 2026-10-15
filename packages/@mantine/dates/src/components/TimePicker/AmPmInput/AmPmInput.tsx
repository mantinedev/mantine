import { useState } from 'react';
import { useTimePickerContext } from '../TimePicker.context';
import {
  AmPm,
  AmPmLabels,
  findAmPmByLabelPrefix,
  findAmPmLabelSuffix,
  getAmPmFromLabel,
} from '../utils/convert-hours/convert-hours';

const CLEAR_BUFFER_KEYS = [
  'Home',
  'End',
  'Backspace',
  'Delete',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
];

function isCharacterKey(event: React.KeyboardEvent) {
  return (
    Array.from(event.key).length === 1 &&
    event.key !== ' ' &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey
  );
}

const LATIN_AM_PM_KEYS: Record<string, AmPm> = { a: 'am', p: 'pm' };

function resolveTypedAmPm(
  key: string,
  buffer: string,
  labels: AmPmLabels
): { value: AmPm | null; buffer: string } | null {
  const prefixes = buffer ? [buffer + key, key] : [key];

  for (const prefix of prefixes) {
    const matches = findAmPmByLabelPrefix(prefix, labels);

    if (matches.length === 1) {
      return { value: matches[0], buffer: '' };
    }

    if (matches.length > 1) {
      return { value: null, buffer: prefix };
    }
  }

  const latin = LATIN_AM_PM_KEYS[key.toLowerCase()];
  return latin ? { value: latin, buffer: '' } : null;
}

interface AmPmInputProps extends Omit<React.ComponentProps<'select'>, 'value' | 'onChange'> {
  labels: AmPmLabels;
  value: AmPm | null;
  inputType: 'select' | 'input';
  onChange: (value: AmPm | null) => void;
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
  onKeyDown,
  onClick,
  inputType,
  ...others
}: AmPmInputProps) {
  const ctx = useTimePickerContext();
  const [typedBuffer, setTypedBuffer] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    if (readOnly) {
      return;
    }

    if (typedBuffer && CLEAR_BUFFER_KEYS.includes(event.key)) {
      setTypedBuffer('');
    }

    if (event.key === 'Home') {
      event.preventDefault();
      onChange('am');
    }

    if (event.key === 'End') {
      event.preventDefault();
      onChange('pm');
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
      onChange(value === 'am' ? 'pm' : 'am');
    }

    if (isCharacterKey(event)) {
      event.preventDefault();
      const resolved = resolveTypedAmPm(event.key, typedBuffer, labels);

      if (resolved) {
        setTypedBuffer(resolved.buffer);
        resolved.value && onChange(resolved.value);
      }
    }
  };

  const handleClick = (event: React.MouseEvent<any>) => {
    event.stopPropagation();
    onClick?.(event);
  };

  const handleKeyDownWithProps = (event: React.KeyboardEvent<any>) => {
    handleKeyDown(event);
    onKeyDown?.(event);
  };

  if (inputType === 'input') {
    const displayValue = typedBuffer || (value && labels[value]) || '--';
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

          const matched = findAmPmLabelSuffix(typed, labels);

          if (matched) {
            setTypedBuffer('');
            onChange(matched.amPm);
            return;
          }

          const inputType = (event.nativeEvent as InputEvent).inputType;
          const lastCharacter = Array.from(typed).pop()!;

          if (inputType?.startsWith('delete') || lastCharacter === ' ') {
            return;
          }

          const resolved = resolveTypedAmPm(lastCharacter, typedBuffer, labels);

          if (resolved) {
            setTypedBuffer(resolved.buffer);
            resolved.value && onChange(resolved.value);
          }
        }}
        onBlur={(event) => {
          setTypedBuffer('');
          onBlur?.(event as any);
        }}
        readOnly={readOnly}
        onClick={handleClick}
        onKeyDown={handleKeyDownWithProps}
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
      value={value ? labels[value] : ''}
      onChange={(event) => !readOnly && onChange(getAmPmFromLabel(event.target.value, labels))}
      onClick={handleClick}
      onKeyDown={handleKeyDownWithProps}
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
