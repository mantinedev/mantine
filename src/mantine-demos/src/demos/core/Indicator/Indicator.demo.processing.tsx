import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Avatar, Indicator } from '@mantine/core';

const code = `
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline processing size={12}>
      <Avatar size="lg" radius="sm" src="./avatar.png" />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator inline processing size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
    </Indicator>
  );
}

export const processing: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
