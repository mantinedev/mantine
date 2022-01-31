import React from 'react';
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  PinRightIcon,
} from '@modulz/radix-icons';
import { Menu, Divider, Text } from '@mantine/core';

const iconProps = { width: 14, height: 14 };

export const menuItems = [
  <Menu.Label key="1">Application</Menu.Label>,
  <Menu.Item key="2" icon={<GearIcon {...iconProps} />}>
    Settings
  </Menu.Item>,
  <Menu.Item key="3" icon={<ChatBubbleIcon {...iconProps} />}>
    Messages
  </Menu.Item>,
  <Menu.Item key="4" icon={<ImageIcon {...iconProps} />}>
    Gallery
  </Menu.Item>,
  <Menu.Item
    key="5"
    icon={<MagnifyingGlassIcon {...iconProps} />}
    rightSection={
      <Text size="xs" color="dimmed">
        ⌘K
      </Text>
    }
  >
    Search
  </Menu.Item>,
  <Divider key="6" />,
  <Menu.Label key="7">Danger zone</Menu.Label>,
  <Menu.Item key="8" icon={<PinRightIcon {...iconProps} />}>
    Transfer my data
  </Menu.Item>,
  <Menu.Item key="9" color="red" icon={<TrashIcon {...iconProps} />}>
    Delete my account
  </Menu.Item>,
];
