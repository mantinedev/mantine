import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { MaskedDateInput } from './MaskedDateInput';

export default { title: 'MaskedDateInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" />
    </div>
  );
}

export function WithTime() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date and time" withTime />
    </div>
  );
}

export function WithSeconds() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date and time" withTime withSeconds />
    </div>
  );
}

export function Format12h() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date and time" withTime format="12h" />
    </div>
  );
}

export function CustomSeparators() {
  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <MaskedDateInput label="Dot separator" dateSeparator="." />
        <MaskedDateInput label="Dash separator" dateSeparator="-" />
        <MaskedDateInput label="Slash with spaces separator" dateSeparator=" / " />
      </Stack>
    </div>
  );
}

export function FieldsOrderMDY() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Month / Day / Year" fieldsOrder={['month', 'day', 'year']} />
    </div>
  );
}

export function FieldsOrderYMD() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Year / Month / Day" fieldsOrder={['year', 'month', 'day']} />
    </div>
  );
}

export function WithDropdown() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" />
    </div>
  );
}

export function WithoutDropdown() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" withDropdown={false} />
    </div>
  );
}

export function MinMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" minDate="2024-01-01" maxDate="2024-12-31" />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" value={value} onChange={setValue} />
      <div>Value: {value}</div>
      <Group mt="md">
        <Button onClick={() => setValue('2024-06-15')}>Set 2024-06-15</Button>
        <Button onClick={() => setValue('2024-12-31')}>Set 2024-12-31</Button>
        <Button onClick={() => setValue(null)}>Clear</Button>
      </Group>
    </div>
  );
}

export function ControlledMinMaxDate() {
  const [value, setValue] = useState<string | null>('2024-06-15');

  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput
        label="Pick date"
        value={value}
        onChange={setValue}
        minDate="1924-01-01"
        maxDate="2024-12-31"
      />
      <div>Value: {String(value)}</div>
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" clearable defaultValue="2024-06-15" />
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" allowDeselect defaultValue="2024-06-15" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" disabled defaultValue="2024-06-15" />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <MaskedDateInput label="Pick date" readOnly defaultValue="2024-06-15" />
    </div>
  );
}
