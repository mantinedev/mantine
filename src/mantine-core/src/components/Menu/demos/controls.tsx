import React from 'react';
import { Menu } from '../Menu';
import { Group } from '../../Group/Group';
import { Button } from '../../Button/Button';
import { menuItems } from './_menu-items';

const code = `
<Menu
  control={<button type="button">Button control</button>}
  controlRefProp="ref"
>
  {/* Menu items */}
</Menu>

<Menu control={<Button>Mantine Button</Button>}>
  {/* Menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu control={<button type="button">Button control</button>} controlRefProp="ref">
        {menuItems}
      </Menu>

      <Menu control={<Button>Mantine Button</Button>}>{menuItems}</Menu>
    </Group>
  );
}

export const controls: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
