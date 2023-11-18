import React, { useState } from 'react';
import { PinInput } from './PinInput';
import { DEFAULT_THEME, MantineSize } from '../../core';

export default { title: 'PinInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput id="test-id" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput unstyled />
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
  const sizes = Object.keys(DEFAULT_THEME.fontSizes).map((size) => (
    <PinInput size={size as MantineSize} key={size} mt="md" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
