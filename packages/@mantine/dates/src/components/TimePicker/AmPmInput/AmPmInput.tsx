import React, { forwardRef } from 'react';
import { useTimePickerContext } from '../TimePicker.context';

interface AmPmInputProps
  extends Omit<React.ComponentPropsWithoutRef<'select'>, 'value' | 'onChange'> {
  labels: { am: string; pm: string };
  value: string | null;
  inputType: 'select' | 'input';
  onChange: (value: string | null) => void;
  readOnly?: boolean;
  onPreviousInput?: () => void;
}

export const AmPmInput = forwardRef<HTMLSelectElement, AmPmInputProps>(
  (
    {
      labels,
      value,
      onChange,
      className,
      style,
      onPreviousInput,
      readOnly,
      onMouseDown,
      onTouchStart,
      inputType,
      ...others
    },
    ref
  ) => {
    const ctx = useTimePickerContext();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
      if (readOnly) {
        return;
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
          onPreviousInput?.();
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
      const displayValue = value || '--';
      const inputSize = displayValue.length + 1;

      return (
        <input
          {...ctx.getStyles('field', { className, style })}
          ref={ref as any}
          value={displayValue}
          size={inputSize}
          onChange={(event) => !readOnly && onChange(event.target.value || null)}
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
        ref={ref}
        value={value || ''}
        onChange={(event) => !readOnly && onChange(event.target.value || null)}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
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
);

AmPmInput.displayName = '@mantine/dates/AmPmInput';
