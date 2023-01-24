import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const code = `
import { Group, Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Rating emptySymbol={<IconSun />} fullSymbol={<IconMoon />} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Rating emptySymbol={<IconSun />} fullSymbol={<IconMoon />} />
    </Group>
  );
}

export const symbol: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
