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
  <MenuLabel key="1">Application</MenuLabel>,
  <MenuItem key="2" icon={<GearIcon {...iconProps} />}>
    Settings
  </MenuItem>,
  <MenuItem key="3" icon={<ChatBubbleIcon {...iconProps} />}>
    Messages
  </MenuItem>,
  <MenuItem key="4" icon={<ImageIcon {...iconProps} />}>
    Gallery
  </MenuItem>,
  <MenuItem
    key="5"
    icon={<MagnifyingGlassIcon {...iconProps} />}
    rightSection={
      <Text size="xs" color="gray">
        ⌘K
      </Text>
    }
  >
    Search
  </MenuItem>,
  <Divider key="6" />,
  <MenuLabel key="7">Danger zone</MenuLabel>,
  <MenuItem key="8" icon={<PinRightIcon {...iconProps} />}>
    Transfer my data
  </MenuItem>,
  <MenuItem key="9" color="red" icon={<TrashIcon {...iconProps} />}>
    Delete my account
  </MenuItem>,
];
