import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { LockClosedIcon } from '@modulz/radix-icons';
import { TextInput } from './TextInput';

function WrappedTextInput(
  props: Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState('');
  return (
    <TextInput value={value} onChange={(event) => onChange(event.currentTarget.value)} {...props} />
  );
}

storiesOf('@mantine/core/TextInput', module)
  .add('General usage', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedTextInput label="text" placeholder="text" type="text" />
    </div>
  ))
  .add('With icon', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedTextInput label="text" placeholder="text" icon={<LockClosedIcon />} />
    </div>
  ))
  .add('Uncontrolled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="Uncontrolled" placeholder="Uncontrolled" />
    </div>
  ))
  .add('Required', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="Required" placeholder="Required" required />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput disabled label="Disabled" placeholder="Disabled" required />
    </div>
  ))
  .add('Error', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="With error" placeholder="With error" error="text too short" />
    </div>
  ))
  .add('Custom radius', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="Radius" placeholder="Radius" radius="lg" />
    </div>
  ))
  .add('Autofocus', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="Autofocus" placeholder="Autofocus" autoFocus />
    </div>
  ));
