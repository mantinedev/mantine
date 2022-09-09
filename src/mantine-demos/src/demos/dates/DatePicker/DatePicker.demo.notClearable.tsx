import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker clearable={false} placeholder="Pick date" label="Event date" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" clearable={false} withinPortal />
    </div>
  );
}

export const notClearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
