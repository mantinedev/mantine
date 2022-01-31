import React from 'react';
import { Group } from '@mantine/core';
import { DemoBase } from './_base';

const code = `
import { useState } from 'react';
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
  return (
    <Group position="center">
      <DemoBase />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
