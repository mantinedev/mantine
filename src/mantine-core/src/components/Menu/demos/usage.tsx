import React from 'react';
import { Menu } from '../Menu';
import { Group } from '../../Group/Group';
import { menuItems } from './_menu-items';

const code = `
import React from 'react';
import { Menu, MenuItem, Divider, Text } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <MenuItem icon={<GearIcon />}>Settings</MenuItem>
      <MenuItem icon={<ChatBubbleIcon />}>Messages</MenuItem>
      <MenuItem icon={<ImageIcon />}>Gallery</MenuItem>
      <MenuItem
        icon={<MagnifyingGlassIcon />}
        rightSection={
          <Text size="xs" color="gray">
            ⌘K
          </Text>
        }
      >
        Search
      </MenuItem>
      <Divider />
      <MenuItem disabled>Delete my data</MenuItem>
      <MenuItem color="red">Delete account</MenuItem>
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
