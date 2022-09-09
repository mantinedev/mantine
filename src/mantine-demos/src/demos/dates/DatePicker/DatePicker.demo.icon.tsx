import React from 'react';
import { IconCalendar } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

function Demo() {
  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      icon={<IconCalendar size={16} />}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        icon={<IconCalendar size={16} />}
        withinPortal
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
