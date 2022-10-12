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
        inputContainer={(children) => (
          <Tooltip label="tooltip" position="bottom-start">
            {children}
          </Tooltip>
        )}
      />
    </div>
  );
}

export function InputWrapperOrder() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput
        value="Default"
        label="Input label"
        description="Input description"
        error="Input error"
      />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        required
        inputWrapperOrder={['label', 'input']}
      />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'error', 'description', 'input']}
      />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'description', 'error', 'input']}
      />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
    </div>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="With required asterisk" withAsterisk />
      <TextInput label="Just required" required />
      <TextInput label="Required asterisk off" required withAsterisk={false} />
      <TextInput label="Required false asterisk on" required={false} withAsterisk />
    </div>
  );
}
