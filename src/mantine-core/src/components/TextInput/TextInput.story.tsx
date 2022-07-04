import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';

function Controlled(props: Partial<TextInputProps>) {
  const [value, onChange] = useState('');
  return (
    <TextInput value={value} onChange={(event) => onChange(event.currentTarget.value)} {...props} />
  );
}

storiesOf('TextInput', module).add('Controlled', () => (
  <div style={{ width: 300, padding: 20 }}>
    <Controlled label="text" placeholder="text" type="text" labelProps={{ id: 'hello' }} />
  </div>
));
