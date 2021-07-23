import React from 'react';
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  PinRightIcon,
} from '@modulz/radix-icons';
import { MenuItem, MenuLabel } from '../Menu';
import { Divider } from '../../Divider/Divider';
import { Text } from '../../Text/Text';

const iconProps = { width: 14, height: 14 };

export const menuItems = [
  <MenuLabel>Application</MenuLabel>,
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
  <MenuLabel>Danger zone</MenuLabel>,
  <MenuItem icon={<PinRightIcon {...iconProps} />}>Transfer my data</MenuItem>,
  <MenuItem color="red" icon={<TrashIcon {...iconProps} />}>
    Delete my account
  </MenuItem>,
];
