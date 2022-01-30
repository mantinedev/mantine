import React from 'react';
import { Group } from '@mantine/core';
import dayjs from 'dayjs';
import { Month } from '@mantine/dates';

const code = `
const range = [
  dayjs(new Date()).startOf('month').toDate(),
  dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
];

<Month range={range} month={new Date()} />
`;

function Demo() {
  const range: [Date, Date] = [
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
  ];
  return (
    <Group position="center">
      <Month range={range} month={new Date()} />
    </Group>
  );
}

export const range: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
