import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}

export const locale: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
