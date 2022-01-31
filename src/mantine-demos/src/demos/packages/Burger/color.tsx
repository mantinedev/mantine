import React from 'react';
import { Group } from '@mantine/core';
import { DemoBase } from './_base';

const code = `
<Burger />
<Burger color="#fe6734" />
<Burger color="#45f50d" />
`;

export function Demo() {
  return (
    <Group position="center">
      <DemoBase />
      <DemoBase color="#fe6734" />
      <DemoBase color="#45f50d" />
    </Group>
  );
}

export const color: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
