import React from 'react';
import { Menu, Group, Button } from '@mantine/core';
import { Settings, Search, Photo, MessageCircle, Trash, ArrowsLeftRight } from 'tabler-icons-react';

const code = `
import { Menu, Button } from '@mantine/core';
import { Search } from 'tabler-icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<Search size={14} />} disabled>
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>
          <Menu.Item icon={<Search size={14} />} disabled>
            Search
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<ArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
          <Menu.Item color="red" icon={<Trash size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
