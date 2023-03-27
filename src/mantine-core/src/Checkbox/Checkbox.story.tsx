import React from 'react';
import { MantineProvider, MANTINE_SIZES } from '@mantine/styles';
import { Checkbox } from './Checkbox';
import { Stack } from '../Stack';

export default { title: 'Checkbox' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="Default" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate mt="xl" />
    </div>
  );
}

export function CheckboxGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox.Group defaultValue={['react']}>
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
    </div>
  );
}

export function CursorPointer() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <Checkbox label="Hello" value="1" />
    </MantineProvider>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Checkbox.Group label="With required asterisk" withAsterisk>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Just required" required>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Required asterisk off" required withAsterisk={false}>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Required false asterisk on" required={false} withAsterisk>
        <Checkbox value="1" />
      </Checkbox.Group>
    </div>
  );
}

export function labelPosition() {
  return (
    <Stack sx={{ width: 300, padding: 20 }}>
      <Checkbox labelPosition="left" label="Hello from left" value="1" />
      <Checkbox labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  );
}

export function WithDescription() {
  return (
    <Stack sx={{ width: 300, padding: 20 }}>
      <Checkbox
        description="This is left Checkbox"
        labelPosition="left"
        label="Hello from left "
        value="1"
      />
      <Checkbox
        description="This is right Checkbox"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  );
}

export function WithError() {
  return (
    <Stack sx={{ width: 300, padding: 20 }}>
      <Checkbox label="Invalid Checkbox without message" value="1" error />
      <Checkbox error="This is error" labelPosition="right" label="Hello from right" value="1" />
      <Checkbox error="Invalid Checkbox without label" value="1" />
    </Stack>
  );
}

export function Sizes() {
  return MANTINE_SIZES.map((size) => (
    <Checkbox size={size} defaultChecked label={`Size ${size}`} mt="md" />
  ));
}
