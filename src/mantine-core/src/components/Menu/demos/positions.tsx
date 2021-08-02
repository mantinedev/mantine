import React from 'react';
import { Menu } from '../Menu';
import { Group } from '../../Group/Group';
import { menuItems } from './_menu-items';

const code = `
<Menu menuPosition={{ bottom: 0, right: 0 }} transition="pop-bottom-right">
  {/* Menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu menuPosition={{ bottom: 0, right: 0 }} transition="pop-bottom-right">
        {menuItems}
      </Menu>
    </Group>
  );
}

export const positions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
