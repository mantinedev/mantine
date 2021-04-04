import React from 'react';
import { Menu, MenuItem, Hr } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Menu, MenuItem, Hr } from '@mantine/core';
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
} from '@modulz/radix-icons';

export function MenuDemo() {
  return (
    <Menu>
      <MenuItem icon={<GearIcon />}>Settings</MenuItem>
      <MenuItem icon={<ChatBubbleIcon />}>Messages</MenuItem>
      <MenuItem icon={<ImageIcon />}>Gallery</MenuItem>
      <MenuItem cmd="⌘K" icon={<MagnifyingGlassIcon />}>Search</MenuItem>
      <Hr />
      <MenuItem disabled>Delete my data</MenuItem>
      <MenuItem color="red">Delete account</MenuItem>
    </Menu>
  );
}`;

const iconSize = { width: 14, height: 14 };

export function MenuBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu>
          <MenuItem icon={<GearIcon style={iconSize} />}>Settings</MenuItem>
          <MenuItem icon={<ChatBubbleIcon style={iconSize} />}>Messages</MenuItem>
          <MenuItem icon={<ImageIcon style={iconSize} />}>Gallery</MenuItem>
          <MenuItem cmd="⌘K" icon={<MagnifyingGlassIcon style={iconSize} />}>
            Search
          </MenuItem>
          <Hr />
          <MenuItem disabled>Delete my data</MenuItem>
          <MenuItem color="red">Delete account</MenuItem>
        </Menu>
      </div>
    </CodeDemo>
  );
}
