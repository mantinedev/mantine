import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Avatar, Indicator, Group } from '@mantine/core';

const code = `
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline disabled size={12}>
      <Avatar size="lg" src="./avatar.png" />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Indicator inline disabled size={12}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
