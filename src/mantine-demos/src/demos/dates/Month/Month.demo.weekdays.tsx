import React from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { Month } from '@mantine/dates';

function Demo() {
  return <Month hideWeekdays month={new Date()} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} hideWeekdays />
    </Group>
  );
}

export const weekdays: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
