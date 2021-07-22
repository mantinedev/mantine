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
    dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
  ]);

  return <RangeCalendar value={value} onChange={setValue} month={new Date()} />;
}
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
  ]);

  return (
    <Group position="center">
      <RangeCalendar value={value} onChange={setValue} month={new Date()} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
