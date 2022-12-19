import React, { useState } from 'react';
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

export function MinDate() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateTimePicker placeholder="Date time picker" withSeconds minDate={new Date()} />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState(new Date(2022, 3, 11));
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
