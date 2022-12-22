import React from 'react';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Month } from '@mantine/dates-old';

const code = `
import { Month } from '@mantine/dates';

function Demo() {
  return <Month month={new Date()} firstDayOfWeek="sunday" />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
