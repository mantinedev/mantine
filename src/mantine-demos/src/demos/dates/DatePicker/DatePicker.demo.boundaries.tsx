import React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

const code = `
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
      maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
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
        minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
        maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
        withinPortal
      />
    </div>
  );
}

export const boundaries: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
