import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';
import dayjs from 'dayjs';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { Month } from '@mantine/dates';

function Demo() {
  const initialDate = dayjs(new Date()).startOf('month').add(10, 'days').toDate();
  const [value, setValue] = useState(initialDate);

  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
      maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
    />
  );
}
`;

function Demo() {
  const initialDate = dayjs(new Date()).startOf('month').add(10, 'days').toDate();
  const [value, setValue] = useState(initialDate);

  return (
    <Group position="center">
      <Month
        month={value}
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
