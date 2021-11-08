import React from 'react';
import { DatePicker } from '../DatePicker';

const code = `
<DatePicker placeholder="Pick date" label="Event date" required allowFreeInput />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" required allowFreeInput />
    </div>
  );
}

export const freeInput: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
