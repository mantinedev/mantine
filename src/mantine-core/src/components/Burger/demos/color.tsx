import React, { useState } from 'react';
import { Burger } from '../Burger';
import { Group } from '../../Group/Group';

const code = `
<Burger />
<Burger color="#fe6734" />
<Burger color="#45f50d" />
`;

export function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Group position="center">
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
      <Burger color="#fe6734" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
      <Burger color="#45f50d" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
    </Group>
  );
}

export const color: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
