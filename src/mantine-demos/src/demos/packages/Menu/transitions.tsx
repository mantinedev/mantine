import React from 'react';
import { Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items';

const code = `
<Menu
  transition="rotate-right"
  transitionDuration={100}
  transitionTimingFunction="ease"
>
  {/* Menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transition="rotate-right" transitionDuration={100} transitionTimingFunction="ease">
        {menuItems}
      </Menu>
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
