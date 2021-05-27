import React from 'react';
import { Menu, MenuItem } from '../Menu';
import { Group } from '../../Group/Group';

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
        <MenuItem>Discard changes</MenuItem>
        <MenuItem>Save draft</MenuItem>
        <MenuItem color="red">Delete</MenuItem>
      </Menu>
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
