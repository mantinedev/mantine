import { useTimePickerContext } from '../TimePicker.context';
import { TimePickerAmPmLabels, TimePickerFormat, TimePickerPresets } from '../TimePicker.types';
import { TimePresetControl } from './TimePresetControl';

interface TimePresetsProps {
  presets: TimePickerPresets;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  value: string;
  withSeconds: boolean;
  onChange: (value: string) => void;
}

export function TimePresets({
  presets,
  format,
  amPmLabels,
  withSeconds,
  value,
  onChange,
}: TimePresetsProps) {
  const ctx = useTimePickerContext();

  if (presets.length === 0) {
    return null;
  }

  if (typeof presets[0] === 'string') {
    const items = (presets as string[]).map((item) => (
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

    return <div {...ctx.getStyles('presetsRoot')}>{items}</div>;
  }
}

TimePresets.displayName = '@mantine/dates/TimePresets';
