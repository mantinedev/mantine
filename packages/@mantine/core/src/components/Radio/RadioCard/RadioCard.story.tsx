import { useState } from 'react';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { RadioIndicator } from '../RadioIndicator/RadioIndicator';
import { RadioCard } from './RadioCard';

export default { title: 'RadioCard' };

export function Usage() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <RadioCard p="md" checked={checked} onClick={() => setChecked((c) => !c)}>
        <RadioIndicator />
        Some label
      </RadioCard>
    </div>
  );
}

export function WithinGroup() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <RadioGroup value={value} onChange={setValue} name="test-name">
        <RadioCard value="1">
          <RadioIndicator />
          Option 1
        </RadioCard>

        <RadioCard value="2">
          <RadioIndicator />
          Option 2
        </RadioCard>
      </RadioGroup>

      <div>{JSON.stringify(value)}</div>
    </div>
  );
}
