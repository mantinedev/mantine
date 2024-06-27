import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { DateTimePicker } from './DateTimePicker';

export default { title: 'DateTimePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker
        placeholder="Date time picker"
        defaultValue={new Date(2022, 3, 11)}
        clearable
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
  const minDate = new Date();
  minDate.setHours(0, 30, 0, 0);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 5);
  maxDate.setHours(22, 30, 0, 0);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <div style={{ marginBottom: 20 }}>
        <div>Min date: {minDate.toLocaleString()}</div>
        <div>Max date: {maxDate.toLocaleString()}</div>
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
  const [value, setValue] = useState<Date | null>(new Date(2022, 3, 11));
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
        <Button onClick={() => setValue(new Date())}>Set date</Button>
      </Group>
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <DateTimePicker
      placeholder="Date time picker"
      defaultValue={new Date(2022, 3, 11)}
      clearable
      size={size}
      key={size}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
