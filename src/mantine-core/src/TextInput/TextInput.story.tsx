import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { TextInput } from './TextInput';

function WrappedTextInput(
  props: Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState('');
  return (
    <div style={{ maxWidth: 300, marginTop: 20 }}>
      <TextInput
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        {...props}
      />
    </div>
  );
}

storiesOf('@mantine/core', module).add('TextInput', () => (
  <>
    <TextInput label="Uncontrolled" placeholder="Uncontrolled input" />
    <WrappedTextInput label="Email" required placeholder="Email" type="email" />
    <WrappedTextInput label="Your twitter" placeholder="Twitter" icon={<TwitterLogoIcon />} />
    <WrappedTextInput
      label="Your twitter"
      disabled
      placeholder="Twitter"
      icon={<TwitterLogoIcon />}
    />
    <WrappedTextInput
      label="Password"
      required
      description="Password should include 8 symbols: 2 numbers, uppercase and lowercase letters"
      placeholder="Password"
      type="password"
    />
    <WrappedTextInput radius="xl" label="Number" required placeholder="Number" type="number" />
    <WrappedTextInput
      label="With error"
      placeholder="With error"
      error="This field is invalid"
      type="email"
    />
  </>
));
