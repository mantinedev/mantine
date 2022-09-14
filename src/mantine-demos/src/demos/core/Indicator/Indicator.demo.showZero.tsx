import React from 'react';
import { Avatar, Indicator, Group } from '@mantine/core';

const code = `
import { Avatar, Indicator, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Indicator label={0} inline size={16}>
        <Avatar size="lg" src="avatar.png" />
      </Indicator>

      <Indicator label={0} showZero={false} dot={false} inline size={16}>
        <Avatar size="lg" src="avatar.png" />
      </Indicator>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Indicator label={0} inline size={16}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
      <Indicator label={0} showZero={false} dot={false} inline size={16}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
    </Group>
  );
}

export const showZero: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
