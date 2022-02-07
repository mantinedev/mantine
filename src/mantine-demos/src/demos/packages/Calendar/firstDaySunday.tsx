import React from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar firstDayOfWeek="sunday" />
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
