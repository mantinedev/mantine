import React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
  maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
        maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
      />
    </div>
  );
}

export const boundaries: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
