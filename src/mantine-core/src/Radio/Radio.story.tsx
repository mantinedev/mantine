import React from 'react';
import { MANTINE_SIZES, MantineProvider } from '@mantine/styles';
import { Checkbox } from '../Checkbox';
import { Radio } from './Radio';

export default { title: 'Radio' };

export function Usage() {
  return (
    <div style={{ padding: 20 }}>
      <Radio label="React" value="react" name="hello" />
      <Radio label="Angular" value="nu" name="hello" mt="xs" />
      <Radio label="Svelte" value="sv" disabled={false} name="hello" mt="xs" />
    </div>
  );
}

export function RadioGroup() {
  return (
    <div style={{ padding: 20 }}>
      <Radio.Group defaultValue="ng">
        <Radio label="React" value="react" name="hello" />
        <Radio label="Angular" value="ng" name="hello" />
        <Radio label="Svelte" value="sv" disabled name="hello" />
      </Radio.Group>
    </div>
  );
}

export function Sizes() {
  const items = MANTINE_SIZES.map((size) => (
    <Radio.Group defaultValue="ng" key={size} size={size} mt="xl">
      <Radio label="React" value="react" />
      <Radio label="Angular" value="ng" />
      <Radio label="Svelte" value="sv" disabled />
    </Radio.Group>
  ));
  return <div style={{ padding: 20 }}>{items}</div>;
}

export function ComparedToCheckbox() {
  return (
    <div style={{ padding: 20 }}>
      <Radio.Group defaultValue="ng">
        <Radio label="React" value="react" name="hello" />
        <Radio label="Angular" value="ng" name="hello" />
        <Radio label="Svelte" value="sv" disabled name="hello" />
      </Radio.Group>

      <Checkbox.Group defaultValue={['ng']}>
        <Checkbox label="React" value="react" name="hello" />
        <Checkbox label="Angular" value="ng" name="hello" />
        <Checkbox label="Svelte" value="sv" disabled name="hello" />
      </Checkbox.Group>
    </div>
  );
}

export function CursorPointer() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <Radio label="Hello" value="1" />
    </MantineProvider>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Radio.Group label="With required asterisk" withAsterisk>
        <Radio value="1" />
      </Radio.Group>
      <Radio.Group label="Just required" required>
        <Radio value="1" />
      </Radio.Group>
      <Radio.Group label="Required asterisk off" required withAsterisk={false}>
        <Radio value="1" />
      </Radio.Group>
      <Radio.Group label="Required false asterisk on" required={false} withAsterisk>
        <Radio value="1" />
      </Radio.Group>
    </div>
  );
}

export function WithNameAttribute() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Radio.Group label="group1" name="group1">
        <Radio value="1" label="1" />
        <Radio value="2" label="2" />
        <Radio value="3" label="3" />
      </Radio.Group>
      <Radio.Group label="group2" name="group2">
        <Radio value="a" label="a" />
        <Radio value="b" label="b" />
        <Radio value="c" label="c" />
      </Radio.Group>
    </div>
  );
}
