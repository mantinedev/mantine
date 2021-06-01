import React from 'react';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { Menu, MenuItem } from '../Menu';
import { Group } from '../../Group/Group';

const code = `
<Menu>
  <MenuItem component="a" href="https://mantine.dev">
    Mantine website
  </MenuItem>

  <MenuItem
    icon={<ExternalLinkIcon />}
    component="a"
    href="https://mantine.dev"
    target="_blank"
  >
    External link
  </MenuItem>
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <MenuItem component="a" href="https://mantine.dev">
          Mantine website
        </MenuItem>
        <MenuItem
          icon={<ExternalLinkIcon />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </MenuItem>
      </Menu>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
