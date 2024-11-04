import { ScrollArea, SimpleGrid } from '@mantine/core';
import { useTimePickerContext } from '../TimePicker.context';
import {
  TimePickerAmPmLabels,
  TimePickerFormat,
  TimePickerPresetGroup,
  TimePickerPresets,
} from '../TimePicker.types';
import { isSameTime } from '../utils/is-same-time/is-same-time';
import { TimePresetControl } from './TimePresetControl';
import { TimePresetGroup } from './TimePresetGroup';

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
      <ScrollArea.Autosize
        mah={ctx.maxDropdownContentHeight}
        type="never"
        {...ctx.getStyles('scrollarea')}
        {...ctx.scrollAreaProps}
      >
        <div {...ctx.getStyles('presetsRoot')}>
          <SimpleGrid cols={withSeconds ? 2 : 3} spacing={4}>
            {items}
          </SimpleGrid>
        </div>
      </ScrollArea.Autosize>
    );
  }

  const groups = (presets as TimePickerPresetGroup[]).map((group, index) => (
    <TimePresetGroup
      key={index}
      data={group}
      value={value}
      format={format}
      amPmLabels={amPmLabels}
      withSeconds={withSeconds}
      onChange={onChange}
    />
  ));

  return (
    <ScrollArea.Autosize
      mah={ctx.maxDropdownContentHeight}
      type="never"
      {...ctx.getStyles('scrollarea')}
      {...ctx.scrollAreaProps}
    >
      <div {...ctx.getStyles('presetsRoot')}>{groups}</div>
    </ScrollArea.Autosize>
  );
}

TimePresets.displayName = '@mantine/dates/TimePresets';
