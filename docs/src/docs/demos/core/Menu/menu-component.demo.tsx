import React from 'react';
import { Menu, MenuItem, Hr, Button, ElementsGroup } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <ElementsGroup position="center">
      <Menu control={<button type="button">Button control</button>} controlRefProp="ref">
        {/* Menu items */}
      </Menu>

      <Menu control={<Button>Mantine Button</Button>}>
        {/* Menu items */}
      </Menu>
    </ElementsGroup>
  );
}`;

const iconSize = { width: 14, height: 14 };

export function MenuComponentDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
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
      </ElementsGroup>
    </CodeDemo>
  );
}
