import React from 'react';
import { Menu, MenuItem, Group } from '@mantine/core';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Menu, MenuItem } from '@mantine/core';
import { ExternalLinkIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Menu>
      <MenuItem component="a" href="https://mantine.dev">
        Mantine website
      </MenuItem>
      <MenuItem
        icon={<ExternalLinkIcon />}
        component="a"
        href="https://mantine.dev"
        target="_blank"
      >
        External link
      </MenuItem>
    </Menu>
  );
}`;

export function MenuLinkDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" spacing="xs">
        <Menu>
          <MenuItem component="a" href="https://mantine.dev">
            Mantine website
          </MenuItem>
          <MenuItem
            icon={<ExternalLinkIcon />}
            component="a"
            href="https://mantine.dev"
            target="_blank"
          >
            External link
          </MenuItem>
        </Menu>
      </Group>
    </CodeDemo>
  );
}
