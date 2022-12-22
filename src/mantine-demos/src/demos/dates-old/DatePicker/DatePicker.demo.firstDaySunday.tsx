import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePicker } from '@mantine/dates-old';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      label="Sunday as first day of week"
      placeholder="Pick date"
      firstDayOfWeek="sunday"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        label="Sunday as first day of week"
        placeholder="Pick date"
        firstDayOfWeek="sunday"
        withinPortal
      />
    </div>
  );
}

export const firstDaySunday: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
