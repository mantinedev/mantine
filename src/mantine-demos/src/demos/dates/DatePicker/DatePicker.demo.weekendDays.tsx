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
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}

export const weekendDays: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
