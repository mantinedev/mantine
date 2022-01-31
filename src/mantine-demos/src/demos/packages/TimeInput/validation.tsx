import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
// Error as boolean – red border color
<TimeInput error />

// Error as React node – red border color and message below input
<TimeInput error="It is not a valid time" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" placeholder="Pick time" error defaultValue={new Date()} />

      <TimeInput
        style={{ marginTop: 15 }}
        label="Pick time"
        placeholder="Pick time"
        error="It is not a valid time"
        defaultValue={new Date()}
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
