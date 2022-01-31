import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar
  minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
  maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
/>
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
        maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
      />
    </Group>
  );
}

export const boundaries: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
