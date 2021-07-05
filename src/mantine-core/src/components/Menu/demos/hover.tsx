import React from 'react';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Menu, MenuItem } from '../Menu';
import { Divider } from '../../Divider/Divider';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

const code = `
<Menu trigger="hover" delay={500}>
  {/* ... menu items */}
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" delay={500}>
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
        <MenuItem color="red">Delete account</MenuItem>
      </Menu>
    </Group>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
