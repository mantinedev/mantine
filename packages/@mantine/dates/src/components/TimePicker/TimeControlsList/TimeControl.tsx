import { UnstyledButton } from '@mantine/core';
import { useTimePickerContext } from '../TimePicker.context';
import { padTime } from '../utils/pad-time/pad-time';

interface TimeControlProps {
  value: number | string;
  active: boolean;
  disabled?: boolean;
  onSelect: (value: any) => void;
}

export function TimeControl({ value, active, disabled, onSelect }: TimeControlProps) {
  const ctx = useTimePickerContext();

  return (
    <UnstyledButton
      mod={{ active, disabled }}
      aria-disabled={disabled || undefined}
      onClick={() => !disabled && onSelect(value)}
      onMouseDown={(event) => event.preventDefault()}
      data-value={value}
      tabIndex={-1}
      {...ctx.getStyles('control')}
    >
      {typeof value === 'number' ? padTime(value) : value}
    </UnstyledButton>
  );
}

TimeControl.displayName = '@mantine/dates/TimeControl';
