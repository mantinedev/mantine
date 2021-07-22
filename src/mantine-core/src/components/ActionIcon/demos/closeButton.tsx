import React from 'react';
import { Group } from '../../Group/Group';
import { CloseButton } from '../CloseButton/CloseButton';

const code = `
import React from 'react';
import { CloseButton, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}

export const closeButton: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
