import React from 'react';
import { CalendarIcon } from '@modulz/radix-icons';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  icon={<CalendarIcon />}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" icon={<CalendarIcon />} />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
