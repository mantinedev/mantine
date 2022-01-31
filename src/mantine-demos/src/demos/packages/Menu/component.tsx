import React from 'react';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { Menu, Group } from '@mantine/core';

const code = `
<Menu>
  <Menu.Item component="a" href="https://mantine.dev">
    Mantine website
  </Menu.Item>

  <Menu.Item
    icon={<ExternalLinkIcon />}
    component="a"
    href="https://mantine.dev"
    target="_blank"
  >
    External link
  </Menu.Item>
</Menu>
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          icon={<ExternalLinkIcon />}
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
