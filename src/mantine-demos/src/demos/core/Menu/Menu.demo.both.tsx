import React from 'react';
import { Menu } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="both">
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu trigger="both">
      <DemoMenuItems />
    </Menu>
  );
}

export const both: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
