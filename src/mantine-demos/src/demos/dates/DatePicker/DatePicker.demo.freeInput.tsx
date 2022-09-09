import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker allowFreeInput placeholder="Pick date" label="Event date" withAsterisk />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        withAsterisk
        allowFreeInput
        withinPortal
      />
    </div>
  );
}

export const freeInput: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
