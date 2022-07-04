import React from 'react';
import { Group, Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transition="rotate-right" transitionDuration={150}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transition="rotate-right" transitionDuration={150}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
