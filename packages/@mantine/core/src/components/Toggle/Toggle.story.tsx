import { useState } from 'react';
import { Toggle } from './Toggle';

export default { title: 'Toggle' };

export function Usage() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Toggle active={active} onClick={() => setActive((v) => !v)}>
        B
      </Toggle>
    </div>
  );
}

export function AutoWidth() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 8 }}>
      <Toggle autoWidth>Save</Toggle>
      <Toggle autoWidth active>
        Active
      </Toggle>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 8, alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Toggle key={size} size={size}>
          {size[0].toUpperCase()}
        </Toggle>
      ))}
    </div>
  );
}

export function DisabledActive() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 8 }}>
      <Toggle active>A</Toggle>
      <Toggle active disabled>
        A
      </Toggle>
      <Toggle disabled>A</Toggle>
    </div>
  );
}
