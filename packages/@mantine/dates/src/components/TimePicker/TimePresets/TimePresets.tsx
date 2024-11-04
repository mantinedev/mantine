import { SimpleGrid } from '@mantine/core';
import { useTimePickerContext } from '../TimePicker.context';
import { TimePickerAmPmLabels, TimePickerFormat, TimePickerPresets } from '../TimePicker.types';
import { isSameTime } from '../utils/is-same-time/is-same-time';
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
        active={isSameTime({ time: item, compare: value, withSeconds })}
        onChange={onChange}
      />
    ));

    return (
      <div {...ctx.getStyles('presetsRoot')}>
        <SimpleGrid cols={withSeconds ? 2 : 3} spacing={4}>
          {items}
        </SimpleGrid>
      </div>
    );
  }
}

TimePresets.displayName = '@mantine/dates/TimePresets';
