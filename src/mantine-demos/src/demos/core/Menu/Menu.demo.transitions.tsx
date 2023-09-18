import React from 'react';
import { Menu } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      <DemoMenuItems />
    </Menu>
  );
}

export const transitions: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
