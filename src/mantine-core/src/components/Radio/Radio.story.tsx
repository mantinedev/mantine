import React from 'react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Checkbox } from '../Checkbox';
import { Radio } from './Radio';

export default { title: 'Radio' };

export function Usage() {
  return (
    <div style={{ padding: 20 }}>
      <Radio label="React" value="react" name="hello" />
      <Radio label="Angular" value="nu" name="hello" mt="xs" />
      <Radio label="Svelte" value="sv" disabled name="hello" mt="xs" />
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
