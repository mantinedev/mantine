import React from 'react';
import { Menu } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <DemoMenuItems />
    </Menu>
  );
}

export const hover: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
