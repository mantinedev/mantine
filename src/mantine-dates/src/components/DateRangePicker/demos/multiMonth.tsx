import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DateRangePicker } from '../DateRangePicker';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
  ]);

  return (
    <DateRangePicker
      withMultipleMonths
      label="Book hotel"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
  ]);

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DateRangePicker
        withMultipleMonths
        label="Book hotel"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export const multiMonth: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
