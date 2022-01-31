import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker disabled />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker label="Disabled without value" placeholder="Your birthday" disabled />

      <DatePicker
        style={{ marginTop: 15 }}
        label="Disabled with value"
        placeholder="Your birthday"
        disabled
        value={new Date()}
      />
    </div>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
