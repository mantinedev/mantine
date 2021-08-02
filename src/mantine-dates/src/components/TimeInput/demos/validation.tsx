import React from 'react';
import { TimeInput } from '../TimeInput';

const code = `
// Error as boolean – red border color
<TimeInput error />

// Error as React node – red border color and message below input
<TimeInput error="It is not a valid time" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" placeholder="Pick time" error />

      <TimeInput
        style={{ marginTop: 15 }}
        label="Pick time"
        placeholder="Pick time"
        error="It is not a valid time"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
