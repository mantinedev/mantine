import React from 'react';
import { Popover, Button, TextInput } from '@mantine/core';

const code = `
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput variant="default" label="Name" placeholder="Name" size="xs" />
        <TextInput variant="default" label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput variant="default" label="Name" placeholder="Name" size="xs" />
        <TextInput variant="default" label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}

export const form: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
