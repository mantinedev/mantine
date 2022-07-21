import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Checkbox } from './Checkbox';

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
