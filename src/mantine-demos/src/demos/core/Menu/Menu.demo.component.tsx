import React from 'react';
import { IconExternalLink } from '@tabler/icons';
import { Menu, Group, Button } from '@mantine/core';

const code = `
import { Menu, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>

        <Menu.Item
          icon={<IconExternalLink size={14} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component="a" href="https://mantine.dev">
            Mantine website
          </Menu.Item>
          <Menu.Item
            icon={<IconExternalLink size={14} />}
            component="a"
            href="https://mantine.dev"
            target="_blank"
          >
            External link
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
