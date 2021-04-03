import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { GearIcon, ChatBubbleIcon, TrashIcon, DotsHorizontalIcon } from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Menu, MenuItem } from './Menu';

function MenuWrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof Menu>, 'opened' | 'onClose'>
) {
  const [opened, setOpened] = useState(true);
  return (
    <div style={{ padding: 40 }}>
      <div style={{ position: 'relative' }}>
        <Menu opened={opened} onClose={() => setOpened(false)} {...props} />
        <ActionIcon onClick={() => setOpened(true)}>
          <DotsHorizontalIcon />
        </ActionIcon>
      </div>
    </div>
  );
}

storiesOf('@mantine/core/Menu', module).add('General usage', () => (
  <MenuWrapper>
    <MenuItem icon={<GearIcon style={{ width: 12, height: 12 }} />}>Settings</MenuItem>
    <MenuItem icon={<ChatBubbleIcon style={{ width: 12, height: 12 }} />}>Messages</MenuItem>
    <MenuItem icon={<TrashIcon style={{ width: 12, height: 12 }} />}>Delete</MenuItem>
  </MenuWrapper>
));
