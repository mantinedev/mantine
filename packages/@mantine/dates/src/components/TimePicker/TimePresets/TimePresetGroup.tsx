import { useTimePickerContext } from '../TimePicker.context';
import { TimePickerAmPmLabels, TimePickerFormat, TimePickerPresetGroup } from '../TimePicker.types';
import { TimePresetControl } from './TimePresetControl';

interface TimePresetGroupProps {
  value: string;
  data: TimePickerPresetGroup;
  onChange: (value: string) => void;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  withSeconds: boolean;
}

export function TimePresetGroup({
  value,
  data,
  onChange,
  format,
  amPmLabels,
  withSeconds,
}: TimePresetGroupProps) {
  const ctx = useTimePickerContext();

  const items = data.values.map((item) => (
    <TimePresetControl
      key={item}
      value={item}
      format={format}
      amPmLabels={amPmLabels}
      withSeconds={withSeconds}
      active={item === value}
      onChange={onChange}
    />
  ));

  return (
    <div {...ctx.getStyles('presetsGroup')}>
      <div {...ctx.getStyles('presetsGroupLabel')}>{data.label}</div>
      {items}
    </div>
  );
}

TimePresetGroup.displayName = '@mantine/dates/TimePresetGroup';
