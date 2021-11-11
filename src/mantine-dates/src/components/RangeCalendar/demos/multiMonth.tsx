import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Group } from '@mantine/core';
import { RangeCalendar } from '../RangeCalendar';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { RangeCalendar } from '@mantine/dates';
function Demo() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(45, 'days').toDate(),
  ]);
  return (
    <Group position="center">
      <RangeCalendar amountOfMonths={2} value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(45, 'days').toDate(),
  ]);

  return (
    <Group position="center">
      <RangeCalendar amountOfMonths={2} value={value} onChange={setValue} />
    </Group>
  );
}

export const multiMonth: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
