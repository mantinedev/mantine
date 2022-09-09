import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
        withinPortal
      />
    </div>
  );
}

export const exclude: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
