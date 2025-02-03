import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { DateTimePicker } from './DateTimePicker';

export default { title: 'DateTimePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker placeholder="Date time picker" defaultValue="2022-04-11" />
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
