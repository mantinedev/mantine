import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker firstDayOfWeek="sunday" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        label="Sunday as first day of week"
        placeholder="Pick date"
        firstDayOfWeek="sunday"
      />
    </div>
  );
}

export const firstDaySunday: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
