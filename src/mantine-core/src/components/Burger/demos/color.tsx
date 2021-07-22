import React from 'react';
import { WrappedBurger } from './WrappedBurger';
import { Group } from '../../Group/Group';

const code = `
<Burger />
<Burger color="#fe6734" />
<Burger color="#45f50d" />
`;

export function Demo() {
  return (
    <Group position="center">
      <WrappedBurger />
      <WrappedBurger color="#fe6734" />
      <WrappedBurger color="#45f50d" />
    </Group>
  );
}

export const color: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
