import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/theme';
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
  .add('With description', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedTextInput
        label="text"
        placeholder="text"
        description="Enter your name 2-30 characters"
      />
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
  .add('Invalid without error', () => (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="With error" placeholder="With error" error />
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
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <WrappedTextInput
          label="text"
          placeholder="text"
          description="Enter your name 2-30 characters"
        />
        <TextInput style={{ marginTop: 15 }} disabled label="text" placeholder="text" />
        <TextInput
          style={{ marginTop: 15 }}
          label="With error"
          placeholder="With error"
          error="text too short"
        />
      </div>
    </MantineProvider>
  ));
