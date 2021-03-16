import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { LockClosedIcon } from '@modulz/radix-icons';
import { PasswordInput } from './PasswordInput';

function WrappedPasswordInput(
  props: Omit<React.ComponentProps<typeof PasswordInput>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState('');
  return (
    <div style={{ maxWidth: 300, marginTop: 20 }}>
      <PasswordInput
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        {...props}
      />
    </div>
  );
}

storiesOf('@mantine/core/PasswordInput', module).add('PasswordInput', () => (
  <>
    <PasswordInput label="Uncontrolled" placeholder="Uncontrolled" />
    <WrappedPasswordInput label="Password" required placeholder="password" type="password" />
    <WrappedPasswordInput
      label="Password"
      disabled
      required
      placeholder="password"
      type="password"
    />
    <WrappedPasswordInput
      label="Password"
      icon={<LockClosedIcon />}
      placeholder="password"
      type="password"
    />
    <WrappedPasswordInput
      label="With error"
      placeholder="With error"
      error="This field is invalid"
      radius="lg"
    />
  </>
));
