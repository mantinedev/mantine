import { useState } from 'react';
import { ActionIcon, Button, Group, Stack } from '@mantine/core';
import { TimePicker } from './TimePicker';

export default { title: 'TimePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker
        label="Enter time"
        withSeconds
        secondsStep={5}
        clearable
        name="time-picker"
        form="my-form"
      />
    </div>
  );
}

export function WithDropdown() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker withSeconds secondsStep={5} clearable defaultValue="12:34:55" withDropdown />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker
        withSeconds
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        readOnly
      />
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <TimePicker
      withSeconds
      secondsStep={5}
      clearable
      defaultValue="12:34:55"
      withDropdown
      label={`Size: ${size}`}
      size={size}
      key={size}
      variant="filled"
    />
  ));

  return (
    <div style={{ padding: 40 }}>
      <Stack>{sizes}</Stack>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker
        withSeconds
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        disabled
      />
    </div>
  );
}

export function MinMax() {
  const [value, setValue] = useState<string>('');

  return (
    <div style={{ padding: 40 }}>
      <TimePicker min="10:30" max="18:30" format="12h" value={value} onChange={setValue} />
      <div>{value}</div>
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string>('');

  return (
    <div style={{ padding: 40 }}>
      <TimePicker value={value} onChange={setValue} />
      <div>{value}</div>
      <Group mt="md">
        <Button onClick={() => setValue('13:45')}>Set 13:45 value</Button>
        <Button onClick={() => setValue('00:45')}>Set 00:45 value</Button>
        <Button onClick={() => setValue('12:45')}>Set 12:45 value</Button>
        <Button onClick={() => setValue('')}>Clear</Button>
      </Group>
    </div>
  );
}

export function ControlledDropdown() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      rightSection={<ActionIcon onClick={() => setDropdownOpened((o) => !o)}>D</ActionIcon>}
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
