import React from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
