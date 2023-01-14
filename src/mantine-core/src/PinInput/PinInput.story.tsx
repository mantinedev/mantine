import React, { useState } from 'react';
import { PinInput } from './PinInput';

export default { title: 'PinInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput value={value} onChange={setValue} />
      Value: {value}
    </div>
  );
}
