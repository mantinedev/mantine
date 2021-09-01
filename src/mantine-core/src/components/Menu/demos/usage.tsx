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
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<GearIcon />}>Settings</Menu.Item>
      <Menu.Item icon={<ChatBubbleIcon />}>Messages</Menu.Item>
      <Menu.Item icon={<ImageIcon />}>Gallery</Menu.Item>
      <Menu.Item
        icon={<MagnifyingGlassIcon />}
        rightSection={<Text size="xs" color="gray">⌘K</Text>}
      >
        Search
      </Menu.Item>

      <Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item icon={<PinRightIcon />}>Transfer my data</Menu.Item>,
      <Menu.Item color="red" icon={<TrashIcon />}>Delete my account</Menu.Item>
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
