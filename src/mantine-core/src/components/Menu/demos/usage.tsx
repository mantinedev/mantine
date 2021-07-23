import React from 'react';
import { Menu } from '../Menu';
import { Group } from '../../Group/Group';
import { menuItems } from './_menu-items';

const code = `
import React from 'react';
import { Menu, MenuItem, MenuLabel, Divider, Text } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <MenuLabel>Application</MenuLabel>
      <MenuItem icon={<GearIcon />}>Settings</MenuItem>
      <MenuItem icon={<ChatBubbleIcon />}>Messages</MenuItem>
      <MenuItem icon={<ImageIcon />}>Gallery</MenuItem>
      <MenuItem
        icon={<MagnifyingGlassIcon />}
        rightSection={<Text size="xs" color="gray">⌘K</Text>}
      >
        Search
      </MenuItem>

      <Divider />

      <MenuLabel>Danger zone</MenuLabel>
      <MenuItem icon={<PinRightIcon />}>Transfer my data</MenuItem>,
      <MenuItem color="red" icon={<TrashIcon />}>Delete my account</MenuItem>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>{menuItems}</Menu>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
