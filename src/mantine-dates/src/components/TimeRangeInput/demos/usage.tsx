import React, { useState } from 'react';
import { TimeRangeInput } from '../TimeRangeInput';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([new Date(), new Date()]);

  return (
    <DateRangePicker
      label="Log Time"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([new Date(), new Date()]);

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeRangeInput
        label="Log Time"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
