import React from 'react';
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@modulz/radix-icons';
import { Menu, MenuItem } from '../Menu';
import { Divider } from '../../Divider/Divider';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

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

const iconProps = { width: 14, height: 14 };

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <MenuItem icon={<GearIcon {...iconProps} />}>Settings</MenuItem>
        <MenuItem icon={<ChatBubbleIcon {...iconProps} />}>Messages</MenuItem>
        <MenuItem icon={<ImageIcon {...iconProps} />}>Gallery</MenuItem>
        <MenuItem
          icon={<MagnifyingGlassIcon {...iconProps} />}
          rightSection={
            <Text size="xs" color="gray">
              ⌘K
            </Text>
          }
        >
          Search
        </MenuItem>
        <Divider />
        <MenuItem color="red" icon={<TrashIcon {...iconProps} />}>
          Delete my data
        </MenuItem>
      </Menu>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
