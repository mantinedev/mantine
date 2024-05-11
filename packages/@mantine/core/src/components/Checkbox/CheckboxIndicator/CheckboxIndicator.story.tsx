import { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { CheckboxIndicator } from './CheckboxIndicator';

export default { title: 'CheckboxIndicator' };

export function Usage() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <CheckboxIndicator checked={checked} onClick={() => setChecked((c) => !c)} />
      <CheckboxIndicator
        checked={checked}
        onClick={() => setChecked((c) => !c)}
        variant="outline"
      />
      <CheckboxIndicator
        checked={checked}
        onClick={() => setChecked((c) => !c)}
        variant="outline"
        disabled
      />
      <CheckboxIndicator checked={checked} onClick={() => setChecked((c) => !c)} disabled />
    </div>
  );
}

export function Sizes() {
  const [checked, setChecked] = useState(false);
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const indicators = sizes.map((size) => (
    <CheckboxIndicator
      key={size}
      size={size}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    />
  ));

  const checkboxes = sizes.map((size) => (
    <Checkbox key={size} size={size} checked={checked} onChange={() => setChecked((c) => !c)} />
  ));

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex' }}>{indicators}</div>
      <div style={{ display: 'flex' }}>{checkboxes}</div>
    </div>
  );
}
