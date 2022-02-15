import React from 'react';
import { Settings, Search, Photo, MessageCircle, Trash, ArrowsLeftRight } from 'tabler-icons-react';
import { Menu, Divider, Text } from '@mantine/core';

export const menuItems = [
  <Menu.Label key="1">Application</Menu.Label>,
  <Menu.Item key="2" icon={<Settings size={14} />}>
    Settings
  </Menu.Item>,
  <Menu.Item key="3" icon={<MessageCircle size={14} />}>
    Messages
  </Menu.Item>,
  <Menu.Item key="4" icon={<Photo size={14} />}>
    Gallery
  </Menu.Item>,
  <Menu.Item
    key="5"
    icon={<Search size={14} />}
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
  <Menu.Item key="8" icon={<ArrowsLeftRight size={14} />}>
    Transfer my data
  </Menu.Item>,
  <Menu.Item key="9" color="red" icon={<Trash size={14} />}>
    Delete my account
  </Menu.Item>,
];
