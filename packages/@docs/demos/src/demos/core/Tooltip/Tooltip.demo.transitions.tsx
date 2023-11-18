import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Badge, Group, keys, MANTINE_TRANSITIONS } from '@mantine/core';

export function Demo() {
  const transitions = keys(MANTINE_TRANSITIONS).map((transition) => (
    <Tooltip key={transition} label={transition} transitionProps={{ transition, duration: 300 }}>
      <Badge variant="light">{transition}</Badge>
    </Tooltip>
  ));

  return (
    <Group justify="center" style={{ cursor: 'default' }}>
      {transitions}
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'code',
  component: Demo,
};
