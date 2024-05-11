import { useState } from 'react';
import { CheckboxIndicator } from '../CheckboxIndicator/CheckboxIndicator';
import { CheckboxCard } from './CheckboxCard';

export default { title: 'CheckboxCard' };

export function Usage() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <CheckboxCard p="md" checked={checked} onClick={() => setChecked((c) => !c)}>
        <CheckboxIndicator />
        Some label
      </CheckboxCard>
    </div>
  );
}
