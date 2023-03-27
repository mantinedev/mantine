import { MANTINE_SIZES } from '@mantine/styles';
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

export function OnComplete() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput length={5} onComplete={setValue} />
      Pin: {value}
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput readOnly />
    </div>
  );
}

export function Autofocus() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput autoFocus />
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

export function Mask() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput value={value} onChange={setValue} mask />
      Value: {value}
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => <PinInput size={size} key={size} mt="md" />);
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
