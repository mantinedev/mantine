import { useState } from 'react';
import { Radio } from '../Radio';
import { RadioIndicator } from './RadioIndicator';

export default { title: 'RadioIndicator' };

export function Usage() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <RadioIndicator checked={checked} onClick={() => setChecked((c) => !c)} />
      <RadioIndicator checked={checked} onClick={() => setChecked((c) => !c)} variant="outline" />
      <RadioIndicator
        checked={checked}
        onClick={() => setChecked((c) => !c)}
        variant="outline"
        disabled
      />
      <RadioIndicator checked={checked} onClick={() => setChecked((c) => !c)} disabled />
    </div>
  );
}

export function Sizes() {
  const [checked, setChecked] = useState(false);
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const indicators = sizes.map((size) => (
    <RadioIndicator
      key={size}
      size={size}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    />
  ));

  const checkboxes = sizes.map((size) => (
    <Radio key={size} size={size} checked={checked} onChange={() => setChecked((c) => !c)} />
  ));

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex' }}>{indicators}</div>
      <div style={{ display: 'flex' }}>{checkboxes}</div>
    </div>
  );
}
