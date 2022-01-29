import React from 'react';
import { Menu } from '../Menu';
import { Group } from '../../Group/Group';
import { menuItems } from './_menu-items';

const code = `
<Menu trigger="hover" delay={500}>
  {/* ... menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" delay={500}>
        {menuItems}
      </Menu>
    </Group>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
