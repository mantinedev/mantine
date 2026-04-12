import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { InlineDateTimePicker } from './InlineDateTimePicker';

export default { title: 'InlineDateTimePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <InlineDateTimePicker />
    </div>
  );
}

export function WithSeconds() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <InlineDateTimePicker withSeconds />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>('2022-04-11');
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <InlineDateTimePicker value={value} onChange={setValue} />
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
      <InlineDateTimePicker type="range" />
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
      <InlineDateTimePicker type="range" value={value} onChange={setValue} />
      <Group mt="xl">
        <Button onClick={() => setValue([null, null])}>Clear</Button>
      </Group>
    </div>
  );
}

export function RangeWithSeconds() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <InlineDateTimePicker type="range" withSeconds />
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
      <InlineDateTimePicker minDate={minDate} maxDate={maxDate} />
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
      <InlineDateTimePicker type="range" minDate={minDate} maxDate={maxDate} />
    </div>
  );
}

export function DefaultTimeValue() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <InlineDateTimePicker defaultTimeValue="14:30" />
    </div>
  );
}

export function WithSubmit() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <InlineDateTimePicker
        onSubmit={() => {
          console.log('submitted');
        }}
      />
    </div>
  );
}
