import React from 'react';
import { NumberInput } from '../../../index';

const code = `
<NumberInput
  label="Your age"
  description="From 0 to 120, step is 1"
  placeholder="Your age"
  max={120}
  min={0}
/>

<NumberInput
  style={{ marginTop: 15 }}
  label="Your weight in kg"
  description="From 0 to Infinity, step is 5"
  defaultValue={80}
  step={5}
  min={0}
/>
<NumberInput
  style={{ marginTop: 15 }}
  label="Increment on hold"
  description="Increment the value when clicking and holding the arrows"
  stepIncrementInitialDelay={750}
  stepIncrementInterval={100}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput
        label="Your age"
        description="From 0 to 120, step is 1"
        placeholder="Your age"
        max={120}
        min={0}
      />
      <NumberInput
        style={{ marginTop: 15 }}
        label="Your weight in kg"
        placeholder="Your weight in kg"
        description="From 0 to Infinity, step is 5"
        defaultValue={80}
        step={5}
        min={0}
      />
      <NumberInput
        style={{ marginTop: 15 }}
        label="Increment on hold"
        description="Increment the value when clicking and holding the arrows"
        stepIncrementInitialDelay={750}
        stepIncrementInterval={100}
      />
    </div>
  );
}

export const step: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
