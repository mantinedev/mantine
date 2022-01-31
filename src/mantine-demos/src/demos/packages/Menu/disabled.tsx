import React from 'react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Menu, Group } from '@mantine/core';
import { menuItems } from './_menu-items';

const code = `
<Menu>
  <Menu.Item disabled icon={<MagnifyingGlassIcon width={14} height={14} />}>
    Search
  </Menu.Item>
  {/* ...other items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        {menuItems.slice(0, 4)}
        <Menu.Item disabled icon={<MagnifyingGlassIcon width={14} height={14} />}>
          Search
        </Menu.Item>
        {menuItems.slice(5)}
      </Menu>
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
