import React from 'react';
import { Menu, Group, Button } from '@mantine/core';
import { menuItems } from './_menu-items';

const code = `
<Menu control={<button type="button">Button control</button>}>
  {/* Menu items */}
</Menu>

<Menu control={<Button>Mantine Button</Button>}>
  {/* Menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu control={<button type="button">Button control</button>}>{menuItems}</Menu>
      <Menu control={<Button>Mantine Button</Button>}>{menuItems}</Menu>
    </Group>
  );
}

export const controls: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
