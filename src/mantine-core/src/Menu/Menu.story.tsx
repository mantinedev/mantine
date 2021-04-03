import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  GearIcon,
  ChatBubbleIcon,
  Cross1Icon,
  DotsHorizontalIcon,
  PlusIcon,
} from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Hr } from '../Hr/Hr';
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

storiesOf('@mantine/core/Menu', module)
  .add('General usage', () => (
    <MenuWrapper>
      <MenuItem icon={<GearIcon style={{ width: 12, height: 12 }} />}>Settings</MenuItem>
      <MenuItem disabled icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
        Disabled
      </MenuItem>
      <Hr />
      <MenuItem icon={<ChatBubbleIcon style={{ width: 12, height: 12 }} />}>Messages</MenuItem>
      <MenuItem color="red" icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
        Delete
      </MenuItem>
    </MenuWrapper>
  ))
  .add('With shortcuts', () => (
    <MenuWrapper>
      <MenuItem icon={<PlusIcon />} cmd="⌘T">
        New tab
      </MenuItem>
      <MenuItem cmd="⌘O">Open new file</MenuItem>
      <MenuItem cmd="⌘N">New window</MenuItem>
      <MenuItem disabled cmd="⌘Q">
        Close application
      </MenuItem>
    </MenuWrapper>
  ));
