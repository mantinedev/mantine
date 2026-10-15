import { SimpleGrid } from '@mantine/core';
import { useTimePickerContext } from '../TimePicker.context';
import { TimePickerAmPmLabels, TimePickerFormat, TimePickerPresetGroup } from '../TimePicker.types';
import { isSameTime } from '../utils/is-same-time/is-same-time';
import { isPresetDisabled } from './is-preset-disabled';
import { TimePresetControl } from './TimePresetControl';

interface TimePresetGroupProps {
  value: string;
  data: TimePickerPresetGroup;
  onChange: (value: string) => void;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  withSeconds: boolean;
  min: string | undefined;
  max: string | undefined;
}

export function TimePresetGroup({
  value,
  data,
  onChange,
  format,
  amPmLabels,
  withSeconds,
  min,
  max,
}: TimePresetGroupProps) {
  const ctx = useTimePickerContext();

  const items = data.values.map((item) => (
    <TimePresetControl
      key={item}
      value={item}
      format={format}
      amPmLabels={amPmLabels}
      withSeconds={withSeconds}
      active={isSameTime({ time: item, compare: value, withSeconds })}
      disabled={isPresetDisabled(item, min, max)}
      onChange={onChange}
    />
  ));

  return (
    <div {...ctx.getStyles('presetsGroup')}>
      <div {...ctx.getStyles('presetsGroupLabel')}>{data.label}</div>
      <SimpleGrid cols={withSeconds ? 2 : 3} spacing={4}>
        {items}
      </SimpleGrid>
    </div>
  );
}

TimePresetGroup.displayName = '@mantine/dates/TimePresetGroup';
