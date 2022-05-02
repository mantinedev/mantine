import React from 'react';
import { Popover, Button, Group, TextInput } from '@mantine/core';

const code = `
import { Popover, Button, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <TextInput variant="default" label="Name" placeholder="Name" size="xs" />
          <TextInput variant="default" label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <TextInput variant="default" label="Name" placeholder="Name" size="xs" />
          <TextInput variant="default" label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}

export const form: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
