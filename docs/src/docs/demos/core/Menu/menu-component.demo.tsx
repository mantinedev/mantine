import React from 'react';
import { Menu, MenuItem, Hr, Button, Group } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Group, Menu } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Menu control={<button type="button">Button control</button>} controlRefProp="ref">
        {/* Menu items */}
      </Menu>

      <Menu control={<Button>Mantine Button</Button>}>
        {/* Menu items */}
      </Menu>
    </Group>
  );
}`;

const iconSize = { width: 14, height: 14 };

export function MenuComponentDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Menu control={<button type="button">Button control</button>} controlRefProp="ref">
          <MenuItem icon={<GearIcon style={iconSize} />}>Settings</MenuItem>
          <MenuItem icon={<ChatBubbleIcon style={iconSize} />}>Messages</MenuItem>
          <MenuItem icon={<ImageIcon style={iconSize} />}>Gallery</MenuItem>
          <MenuItem icon={<MagnifyingGlassIcon style={iconSize} />}>Search</MenuItem>
          <Hr />
          <MenuItem disabled>Delete my data</MenuItem>
          <MenuItem color="red">Delete account</MenuItem>
        </Menu>

        <Menu control={<Button>Mantine Button</Button>}>
          <MenuItem icon={<GearIcon style={iconSize} />}>Settings</MenuItem>
          <MenuItem icon={<ChatBubbleIcon style={iconSize} />}>Messages</MenuItem>
          <MenuItem icon={<ImageIcon style={iconSize} />}>Gallery</MenuItem>
          <MenuItem icon={<MagnifyingGlassIcon style={iconSize} />}>Search</MenuItem>
          <Hr />
          <MenuItem disabled>Delete my data</MenuItem>
          <MenuItem color="red">Delete account</MenuItem>
        </Menu>
      </Group>
    </CodeDemo>
  );
}
