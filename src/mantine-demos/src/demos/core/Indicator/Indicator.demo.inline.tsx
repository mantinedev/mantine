import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Avatar, Indicator } from '@mantine/core';

const code = `
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar size="lg" src="./avatar.png" />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
    </Indicator>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
