import React from 'react';
import { DatePicker } from '../DatePicker';

const code = `
<DatePicker
  placeholder="Pick date"
  required
  firstDayOfWeek="sunday" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" required firstDayOfWeek="sunday" />
    </div>
  );
}

export const firstDaySunday: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
