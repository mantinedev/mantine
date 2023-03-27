import React, { useState } from 'react';
import { JsonInput } from './JsonInput';

export default { title: 'JsonInput' };

export function ReadOnly() {
  return (
    <JsonInput
      defaultValue='{ "a": 1, "B": 2 }'
      label="Controlled"
      placeholder="Controlled"
      formatOnBlur
      readOnly
    />
  );
}

export function Controlled() {
  const [value, onChange] = useState('');
  return (
    <JsonInput
      value={value}
      onChange={onChange}
      label="Controlled"
      placeholder="Controlled"
      formatOnBlur
    />
  );
}
