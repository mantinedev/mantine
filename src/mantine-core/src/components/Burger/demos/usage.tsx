import React, { useState } from 'react';
import { Burger } from '../Burger';
import { Group } from '../../Group/Group';

const code = `
import React, { useState } from 'react';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
  );
}
`;

export function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Group position="center">
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
