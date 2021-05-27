import React from 'react';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Menu, MenuItem } from '../Menu';
import { Divider } from '../../Divider/Divider';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

const code = `
import React from 'react';
import { Menu, MenuItem, Divider, Text } from '@mantine/core';
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
} from '@modulz/radix-icons';

function Demo() {
  return (
    <Menu>
      <MenuItem icon={<GearIcon />}>Settings</MenuItem>
      <MenuItem icon={<ChatBubbleIcon />}>Messages</MenuItem>
      <MenuItem icon={<ImageIcon />}>Gallery</MenuItem>
      <MenuItem
        icon={<MagnifyingGlassIcon />}
        rightSection={
          <Text size="sm" color="gray">
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
      <Menu>
        <MenuItem icon={<GearIcon />}>Settings</MenuItem>
        <MenuItem icon={<ChatBubbleIcon />}>Messages</MenuItem>
        <MenuItem icon={<ImageIcon />}>Gallery</MenuItem>
        <MenuItem
          icon={<MagnifyingGlassIcon />}
          rightSection={
            <Text size="sm" color="gray">
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
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
