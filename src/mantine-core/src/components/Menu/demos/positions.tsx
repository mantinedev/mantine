import React from 'react';
import { Menu, MenuItem } from '../Menu';
import { Group } from '../../Group/Group';

const code = `
<Menu menuPosition={{ bottom: 0, right: 0 }} transition="skew-down">
  {/* Menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu menuPosition={{ bottom: 0, right: 0 }} transition="skew-down">
        <MenuItem>Discard changes</MenuItem>
        <MenuItem>Save draft</MenuItem>
        <MenuItem color="red">Delete</MenuItem>
      </Menu>
    </Group>
  );
}

export const positions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
