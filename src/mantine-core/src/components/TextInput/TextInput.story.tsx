import React, { useState } from 'react';
import { Tooltip } from '../Tooltip';
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

export function WithInputContainer() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput
        label="with tooltip"
        description="with tooltip"
        error="with tooltip"
        inputContainer={({ children }) => (
          <Tooltip label="tooltip" position="bottom-start">
            {children}
          </Tooltip>
        )}
      />
    </div>
  );
}
