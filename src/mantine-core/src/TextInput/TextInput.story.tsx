import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

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

storiesOf('@mantine/core/TextInput', module).add('General usage', () => (
  <div>
    <WrappedTextInput label="Email" required placeholder="Email" type="email" />
    <WrappedTextInput
      label="With error"
      placeholder="With error"
      error="This field is invalid"
      type="email"
    />
  </div>
));
