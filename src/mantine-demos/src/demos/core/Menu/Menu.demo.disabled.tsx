import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Menu, Group, Button, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

const code = `
import { Menu, Button, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconSearch size={rem(14)} />} disabled>
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
          <Menu.Item icon={<IconSettings size={rem(14)} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={rem(14)} />}>Messages</Menu.Item>
          <Menu.Item icon={<IconPhoto size={rem(14)} />}>Gallery</Menu.Item>
          <Menu.Item icon={<IconSearch size={rem(14)} />} disabled>
            Search
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconArrowsLeftRight size={rem(14)} />}>Transfer my data</Menu.Item>
          <Menu.Item color="red" icon={<IconTrash size={rem(14)} />}>
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
