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
import { Button } from '../Button/Button';
import { Menu, MenuBody, MenuItem } from './Menu';

function MenuWrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof Menu>, 'opened' | 'onClose'>
) {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <div style={{ position: 'relative' }}>
        <MenuBody opened={opened} onClose={() => setOpened(false)} {...props} />
        <ActionIcon onClick={() => setOpened(true)}>
          <DotsHorizontalIcon />
        </ActionIcon>
      </div>
    </div>
  );
}

const button = (
  <Button color="indigo" variant="outline">
    Open menu
  </Button>
);

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
      <MenuItem icon={<PlusIcon />} rightSection="⌘T">
        New tab
      </MenuItem>
      <MenuItem rightSection="⌘O">Open new file</MenuItem>
      <MenuItem rightSection="⌘N">New window</MenuItem>
      <MenuItem disabled rightSection="⌘Q">
        Close application
      </MenuItem>
    </MenuWrapper>
  ))
  .add('Default connected menu', () => (
    <div style={{ padding: 40 }}>
      <Menu menuPosition={{ top: 32, left: 0 }}>
        <MenuItem icon={<GearIcon style={{ width: 12, height: 12 }} />}>Settings</MenuItem>
        <MenuItem disabled icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
          Disabled
        </MenuItem>
        <Hr />
        <MenuItem icon={<ChatBubbleIcon style={{ width: 12, height: 12 }} />}>Messages</MenuItem>
        <MenuItem color="red" icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  ))
  .add('Button connected menu', () => (
    <div style={{ padding: 40 }}>
      <Menu menuPosition={{ top: 36, left: 0 }} control={button} controlRefProp="elementRef">
        <MenuItem icon={<GearIcon style={{ width: 12, height: 12 }} />}>Settings</MenuItem>
        <MenuItem disabled icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
          Disabled
        </MenuItem>
        <Hr />
        <MenuItem icon={<ChatBubbleIcon style={{ width: 12, height: 12 }} />}>Messages</MenuItem>
        <MenuItem color="red" icon={<Cross1Icon style={{ width: 12, height: 12 }} />}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  ));
