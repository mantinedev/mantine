import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}

export const listFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
