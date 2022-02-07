import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker placeholder="Pick date" label="Event date" required />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" required />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
