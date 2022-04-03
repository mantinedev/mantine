import React from 'react';
import { Search } from 'tabler-icons-react';
import { Menu, Group } from '@mantine/core';
import { menuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';
import { Search } from 'tabler-icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Item disabled icon={<Search size={14} />}>
        Search
      </Menu.Item>
      {/* ...other items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        {menuItems.slice(0, 4)}
        <Menu.Item disabled icon={<Search size={14} />}>
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
