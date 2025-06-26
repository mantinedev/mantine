import { useState } from 'react';
import { ActionIcon, Button, Group, Stack } from '@mantine/core';
import { TimePicker } from './TimePicker';
import { getTimeRange } from './utils/get-time-range/get-time-range';

export default { title: 'TimePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker label="Enter time" withSeconds minutesStep={5} secondsStep={5} withDropdown />
    </div>
  );
}

export function ControlledClear() {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <TimePicker label="Enter time" withSeconds value={value} onChange={setValue} format="12h" />
      <button onClick={() => setValue('')}>Clear</button>
    </div>
  );
}

export function WithDropdown() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker
        withSeconds
        secondsStep={5}
        clearable
        // defaultValue="12:34:55"
        withDropdown
        format="12h"
      />
    </div>
  );
}

export function WithPresets() {
  return (
    <div style={{ padding: 40 }}>
      <TimePicker
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        label="Default presets"
        presets={['12:00:00', '15:00:00', '18:00:00', '21:00:00', '00:00:00']}
      />

      <TimePicker
        withSeconds
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        mt={100}
        label="With seconds"
        presets={['12:00:00', '15:00:00', '18:00:00', '21:00:00', '00:00:00']}
      />

      <TimePicker
        withSeconds
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        mt={120}
        format="12h"
        label="12h format"
        presets={['12:00:00', '15:00:00', '18:00:00', '21:00:00', '00:00:00']}
      />

      <TimePicker
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        mt={120}
        label="Grouped presets"
        presets={[
          { label: 'Morning', values: ['06:00:00', '09:00:00', '12:00:00'] },
          { label: 'Evening', values: ['15:00:00', '18:00:00', '21:00:00'] },
        ]}
      />

      <TimePicker
        secondsStep={5}
        clearable
        defaultValue="12:34:55"
        withDropdown
        mt={120}
        label="Range interval"
        presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '01:30:00' })}
      />
      <TimePicker
        secondsStep={5}
        clearable
        withDropdown
        mt={120}
        label="Long range interval"
        presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '00:10:00' })}
      />
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

export function ControlledEmptyString() {
  const [timeEmptyString, setTimeEmptyString] = useState('');
  const [timeNull, setTimeNull] = useState<string | null>(null);

  return (
    <div className="App">
      <TimePicker label="Empty string" value={timeEmptyString} onChange={setTimeEmptyString} />

      <TimePicker label="null" value={timeNull as string} onChange={setTimeNull} />

      <button
        type="button"
        onClick={() => {
          setTimeNull('02:00');
          setTimeEmptyString('02:00');
        }}
      >
        Set time to 02:00
      </button>
    </div>
  );
}
