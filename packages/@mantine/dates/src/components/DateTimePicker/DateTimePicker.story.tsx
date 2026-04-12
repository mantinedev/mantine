import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { DateTimePicker } from './DateTimePicker';

export default { title: 'DateTimePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker
        placeholder="Date time picker"
        presets={[
          { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Yesterday' },
          { value: dayjs().format('YYYY-MM-DD HH:mm:ss'), label: 'Today' },
          { value: dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Tomorrow' },
          { value: dayjs().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'), label: 'Next month' },
          { value: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Next year' },
          {
            value: dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
            label: 'Last month',
          },
          { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Last year' },
        ]}
      />
    </div>
  );
}

export function WithinModal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker placeholder="Date time picker" dropdownType="modal" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker placeholder="Date time picker" dropdownType="modal" unstyled />
    </div>
  );
}

export function WithSeconds() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker placeholder="Date time picker" withSeconds />
    </div>
  );
}

export function MinMaxDate() {
  const minDate = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <div style={{ marginBottom: 20 }}>
        <div>Min date: {minDate}</div>
        <div>Max date: {maxDate}</div>
      </div>
      <DateTimePicker
        placeholder="Date time picker"
        withSeconds
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>('2022-04-11');
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker
        placeholder="Date time picker"
        withSeconds
        value={value}
        onChange={setValue}
      />
      <Group mt="xl">
        <Button onClick={() => setValue(null)}>Set null</Button>
        <Button onClick={() => setValue(new Date().toISOString().split('T')[0])}>Set date</Button>
      </Group>
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker type="range" placeholder="Date time range picker" />
    </div>
  );
}

export function RangeControlled() {
  const [value, setValue] = useState<[string | null, string | null]>([
    '2022-04-11 14:30:00',
    '2022-04-15 16:00:00',
  ]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker
        type="range"
        placeholder="Date time range picker"
        value={value}
        onChange={setValue}
      />
      <Group mt="xl">
        <Button onClick={() => setValue([null, null])}>Clear</Button>
      </Group>
    </div>
  );
}

export function RangeWithSeconds() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker type="range" placeholder="Date time range picker" withSeconds />
    </div>
  );
}

export function RangeClearable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker
        type="range"
        placeholder="Date time range picker"
        defaultValue={['2022-04-11 14:30:00', '2022-04-15 16:00:00']}
        clearable
      />
    </div>
  );
}

export function RangeMinMaxDate() {
  const minDate = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <div style={{ marginBottom: 20 }}>
        <div>Min date: {minDate}</div>
        <div>Max date: {maxDate}</div>
      </div>
      <DateTimePicker
        type="range"
        placeholder="Date time range picker"
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
}

export function RangeModal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker type="range" placeholder="Date time range picker" dropdownType="modal" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <DateTimePicker
      placeholder="Date time picker"
      defaultValue="2022-04-11"
      clearable
      size={size}
      key={size}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
