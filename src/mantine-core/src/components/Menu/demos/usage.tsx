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
      <Menu>
        <MenuItem icon={<GearIcon width={14} height={14} />}>Settings</MenuItem>
        <MenuItem icon={<ChatBubbleIcon width={14} height={14} />}>Messages</MenuItem>
        <MenuItem icon={<ImageIcon width={14} height={14} />}>Gallery</MenuItem>
        <MenuItem
          icon={<MagnifyingGlassIcon width={14} height={14} />}
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
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
