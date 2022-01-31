import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput
  label="Your age"
  description="From 0 to 120, step is 1"
  placeholder="Your age"
  max={120}
  min={0}
/>

<NumberInput
  mt="md"
  label="Your weight in kg"
  description="From 0 to Infinity, step is 5"
  defaultValue={80}
  step={5}
  min={0}
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
        mt="md"
        label="Your weight in kg"
        placeholder="Your weight in kg"
        description="From 0 to Infinity, step is 5"
        defaultValue={80}
        step={5}
        min={0}
      />
    </div>
  );
}

export const step: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
