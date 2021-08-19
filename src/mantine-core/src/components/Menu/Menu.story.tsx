import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { GearIcon, ChatBubbleIcon, Cross1Icon } from '@modulz/radix-icons';
import { DEFAULT_THEME, MantineProvider } from '../../theme';
import { Divider } from '../Divider/Divider';
import { menuItems } from './demos/_menu-items';
import { Menu, MenuItem } from './Menu';

function Controlled() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu opened={opened} onOpen={() => setOpened(true)} onClose={() => setOpened(false)}>
      {menuItems}
    </Menu>
  );
}

storiesOf('@mantine/core/Menu', module)
  .add('General Usage', () => (
    <div style={{ padding: 60 }}>
      <Menu position="right" withArrow closeOnItemClick>
        {menuItems}
      </Menu>
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 60 }}>
      <Controlled />
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
        <Menu>
          <MenuItem icon={<GearIcon style={{ width: 12, height: 12 }} />}>Settings</MenuItem>
          <MenuItem disabled icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
            Disabled
          </MenuItem>
          <Divider />
          <MenuItem icon={<ChatBubbleIcon style={{ width: 12, height: 12 }} />}>Messages</MenuItem>
          <MenuItem color="red" icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
            Delete
          </MenuItem>
        </Menu>
      </div>
    </MantineProvider>
  ));
