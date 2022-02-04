import React from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = '<Calendar allowLevelChange={false} />';

function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

export const noLevel: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
