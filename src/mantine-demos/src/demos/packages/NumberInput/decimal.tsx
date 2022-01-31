import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput
  label="Number input with decimal steps"
  defaultValue={0.05}
  precision={2}
  min={-1}
  step={0.05}
  max={1}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        label="Number input with decimal steps"
        placeholder="Decimal steps"
        defaultValue={0.05}
        precision={2}
        min={-1}
        step={0.05}
        max={1}
      />
    </div>
  );
}

export const decimal: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
