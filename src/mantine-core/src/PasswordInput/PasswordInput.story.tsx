import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { LockClosedIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/theme';
import { PasswordInput } from './PasswordInput';

function WrappedPasswordInput(
  props: Omit<React.ComponentProps<typeof PasswordInput>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState('');
  return (
    <PasswordInput
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      {...props}
    />
  );
}

storiesOf('@mantine/core/PasswordInput', module)
  .add('General usage', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedPasswordInput label="Password" placeholder="Password" type="password" />
    </div>
  ))
  .add('With icon', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedPasswordInput
        label="Password"
        placeholder="Password"
        type="password"
        icon={<LockClosedIcon />}
      />
    </div>
  ))
  .add('With description', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedPasswordInput
        label="Password"
        placeholder="Password"
        type="password"
        description="Password must include numbers, letters, emojis, your favorite anime character name, year of first World War"
      />
    </div>
  ))
  .add('Uncontrolled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Uncontrolled" placeholder="Uncontrolled" />
    </div>
  ))
  .add('Required', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Required" placeholder="Required" required />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput disabled label="Disabled" placeholder="Disabled" required />
    </div>
  ))
  .add('Error', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="With error" placeholder="With error" error="Password too short" />
    </div>
  ))
  .add('Custom radius', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Radius" placeholder="Radius" radius="lg" />
    </div>
  ))
  .add('Autofocus', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Autofocus" placeholder="Autofocus" autoFocus />
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}>
      <div style={{ width: 300, padding: 20 }}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          type="password"
          required
          description="Password must include numbers, letters, emojis, your favorite anime character name, year of first World War"
          themeOverride={{ colorScheme: 'dark' }}
        />
      </div>
    </div>
  ));
