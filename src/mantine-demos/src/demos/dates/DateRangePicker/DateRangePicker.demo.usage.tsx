import React, { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return (
    <DateRangePicker
      label="Book hotel"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DateRangePicker
        label="Book hotel"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
        withinPortal
      />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
