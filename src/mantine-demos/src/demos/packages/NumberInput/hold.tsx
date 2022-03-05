import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput
  style={{ marginTop: 15 }}
  label="Step on hold"
  description="Step the value when clicking and holding the arrows"
  stepHoldDelay={500}
  stepHoldInterval={100}
/>

<NumberInput
  label="Step the value with interval function"
  description="Step value will increase incrementally when control is hold"
  stepHoldDelay={500}
  stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput
        label="Step on hold"
        description="Step the value when clicking and holding the arrows"
        placeholder="Hold mouse down on control button"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />
      <NumberInput
        mt="md"
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        placeholder="Hold mouse down on control button"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </div>
  );
}

export const hold: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
