import React from 'react';
import { MenuItem, Hr } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, Cross1Icon } from '@modulz/radix-icons';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';
import MenuWrapper from './MenuWrapper';

export function MenuBaseDemo() {
  return (
    <CodeDemo>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MenuWrapper style={{ left: 0, top: 0 }}>
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
      </div>
    </CodeDemo>
  );
}
