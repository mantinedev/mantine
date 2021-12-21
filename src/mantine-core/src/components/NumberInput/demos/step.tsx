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
  label="Step on hold"
  description="Step the value when clicking and holding the arrows"
  stepHoldDelay={750}
  stepHoldInterval={100}
/>
<NumberInput
  label="Step the value with interval function"
  stepHoldDelay={750}
  stepHoldInterval={(count) => Math.max(1000 - count ** 4, 0)}
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
        label="Step on hold"
        description="Step the value when clicking and holding the arrows"
        stepHoldDelay={750}
        stepHoldInterval={100}
      />
      <NumberInput
        label="Step the value with interval function"
        stepHoldDelay={750}
        stepHoldInterval={(count) => Math.max(1000 - count ** 4, 0)}
      />
    </div>
  );
}

export const step: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
