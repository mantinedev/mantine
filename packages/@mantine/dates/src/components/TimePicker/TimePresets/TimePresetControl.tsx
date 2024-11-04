import { UnstyledButton } from '@mantine/core';
import { TimeValue } from '../../TimeValue';
import { useTimePickerContext } from '../TimePicker.context';
import { TimePickerAmPmLabels, TimePickerFormat } from '../TimePicker.types';

interface TimePresetControlProps {
  value: string;
  active: boolean;
  onChange: (value: string) => void;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  withSeconds: boolean;
}

export function TimePresetControl({
  value,
  active,
  onChange,
  format,
  amPmLabels,
  withSeconds,
}: TimePresetControlProps) {
  const ctx = useTimePickerContext();

  return (
    <UnstyledButton
      mod={{ active }}
      onClick={() => onChange(value)}
      {...ctx.getStyles('presetControl')}
    >
      <TimeValue withSeconds={withSeconds} value={value} format={format} amPmLabels={amPmLabels} />
    </UnstyledButton>
  );
}

TimePresetControl.displayName = '@mantine/dates/TimePresetControl';
