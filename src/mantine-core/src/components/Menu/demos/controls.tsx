import React from 'react';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Menu, MenuItem } from '../Menu';
import { Divider } from '../../Divider/Divider';
import { Group } from '../../Group/Group';
import { Button } from '../../Button/Button';

const code = `
<Menu
  control={<button type="button">Button control</button>}
  controlRefProp="ref"
>
  {/* Menu items */}
</Menu>

<Menu
  control={<Button>Mantine Button</Button>}
>
  {/* Menu items */}
</Menu>
`;

const iconSize = { width: 14, height: 14 };

function Demo() {
  return (
    <Group position="center">
      <Menu control={<button type="button">Button control</button>} controlRefProp="ref">
        <MenuItem icon={<GearIcon style={iconSize} />}>Settings</MenuItem>
        <MenuItem icon={<ChatBubbleIcon style={iconSize} />}>Messages</MenuItem>
        <MenuItem icon={<ImageIcon style={iconSize} />}>Gallery</MenuItem>
        <MenuItem icon={<MagnifyingGlassIcon style={iconSize} />}>Search</MenuItem>
        <Divider />
        <MenuItem disabled>Delete my data</MenuItem>
        <MenuItem color="red">Delete account</MenuItem>
      </Menu>

      <Menu control={<Button>Mantine Button</Button>}>
        <MenuItem icon={<GearIcon style={iconSize} />}>Settings</MenuItem>
        <MenuItem icon={<ChatBubbleIcon style={iconSize} />}>Messages</MenuItem>
        <MenuItem icon={<ImageIcon style={iconSize} />}>Gallery</MenuItem>
        <MenuItem icon={<MagnifyingGlassIcon style={iconSize} />}>Search</MenuItem>
        <Divider />
        <MenuItem disabled>Delete my data</MenuItem>
        <MenuItem color="red">Delete account</MenuItem>
      </Menu>
    </Group>
  );
}

export const controls: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
