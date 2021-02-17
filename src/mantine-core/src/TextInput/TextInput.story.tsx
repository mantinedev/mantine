import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { MantineProvider } from '@mantine/theme';
import { TextInput } from './TextInput';

function WrappedTextInput(
  props: Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState('');
  return (
    <div style={{ maxWidth: 300, marginTop: 20 }}>
      <TextInput value={value} onChange={onChange} {...props} />
    </div>
  );
}

storiesOf('@mantine/core', module).add('TextInput', () => (
  <MantineProvider>
    <WrappedTextInput label="Email" required placeholder="Email" type="email" />
    <WrappedTextInput label="Your twitter" placeholder="Twitter" icon={<TwitterLogoIcon />} />
    <WrappedTextInput
      label="Your twitter"
      disabled
      placeholder="Twitter"
      icon={<TwitterLogoIcon />}
    />
    <WrappedTextInput
      radius="xl"
      label="Password"
      required
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
  </MantineProvider>
));
