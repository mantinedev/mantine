import React from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month month={new Date()} firstDayOfWeek="sunday" />
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
