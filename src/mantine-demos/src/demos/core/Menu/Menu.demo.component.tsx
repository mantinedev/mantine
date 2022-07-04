import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Menu, Group } from '@mantine/core';

const code = `
import { Menu } from '@mantine/core';
import { ExternalLink } from 'tabler-icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Item component="a" href="https://mantine.dev">
        Mantine website
      </Menu.Item>

      <Menu.Item
        icon={<ExternalLink size={14} />}
        component="a"
        href="https://mantine.dev"
        target="_blank"
      >
        External link
      </Menu.Item>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          icon={<ExternalLink size={14} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
