import React, { useState } from 'react';
import { TextInput, TextInputProps } from './TextInput';

export default { title: 'TextInput' };

export function Controlled(props: Partial<TextInputProps>) {
  const [value, onChange] = useState('');
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        {...props}
      />
    </div>
  );
}
