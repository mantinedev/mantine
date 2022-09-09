import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
// Error as boolean – red border color
<DatePicker error />

// Error as React node – red border color and message below input
<DatePicker error="You must be at least 18 to register" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker label="Your birthday" placeholder="Your birthday" error withinPortal />

      <DatePicker
        style={{ marginTop: 15 }}
        label="Your birthday"
        placeholder="Your birthday"
        error="You must be at least 18 to register"
        withinPortal
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
