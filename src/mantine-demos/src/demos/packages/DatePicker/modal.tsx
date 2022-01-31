import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker dropdownType="modal" placeholder="Pick date" label="Event date" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker dropdownType="modal" placeholder="Pick date" label="Event date" />
    </div>
  );
}

export const modal: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
