import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { LockClosedIcon } from '@modulz/radix-icons';
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
  .add('Uncontrolled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Uncontrolled" placeholder="Uncontrolled" />
    </div>
  ))
  .add('Required', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Uncontrolled" placeholder="Uncontrolled" required />
    </div>
  ))
  .add('Error', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Uncontrolled" placeholder="Uncontrolled" error="Password too short" />
    </div>
  ))
  .add('Autofocus', () => (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="Autofocus" placeholder="Autofocus" autoFocus />
    </div>
  ));
