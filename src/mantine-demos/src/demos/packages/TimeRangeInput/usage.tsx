import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimeRangeInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { TimeRangeInput } from '@mantine/dates';

function Demo() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value, setValue] = useState([now, then]);

  return <TimeRangeInput label="Appointment time" value={value} onChange={setValue} clearable />;
}
`;

function Demo() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value, setValue] = useState<[Date, Date]>([now, then]);

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeRangeInput label="Appointment time" value={value} onChange={setValue} clearable />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
