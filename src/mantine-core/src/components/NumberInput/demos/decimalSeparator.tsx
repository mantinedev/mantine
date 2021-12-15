import React from 'react';
import { NumberInput } from '../NumberInput';

const code = `
<NumberInput
  decimalSeparator=","
  label="Number input with decimal steps"
  defaultValue={0.5}
  precision={2}
  step={0.5}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        decimalSeparator=","
        label="Number input with a custom decimal separator"
        placeholder="Decimal steps"
        defaultValue={0.5}
        precision={2}
        step={0.5}
      />
    </div>
  );
}

export const decimalSeparator: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
