import React from 'react';
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@modulz/radix-icons';
import { MenuItem } from '../Menu';
import { Divider } from '../../Divider/Divider';
import { Text } from '../../Text/Text';

const iconProps = { width: 14, height: 14 };

export const menuItems = [
  <MenuItem icon={<GearIcon {...iconProps} />}>Settings</MenuItem>,
  <MenuItem icon={<ChatBubbleIcon {...iconProps} />}>Messages</MenuItem>,
  <MenuItem icon={<ImageIcon {...iconProps} />}>Gallery</MenuItem>,
  <MenuItem
    icon={<MagnifyingGlassIcon {...iconProps} />}
    rightSection={
      <Text size="xs" color="gray">
        ⌘K
      </Text>
    }
  >
    Search
  </MenuItem>,
  <Divider />,
  <MenuItem color="red" icon={<TrashIcon {...iconProps} />}>
    Delete my data
  </MenuItem>,
];
