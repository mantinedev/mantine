import React from 'react';
import { Popover, Text, Button, Group } from '@mantine/core';

const code = `
import { Popover, Text, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Popover width="target" position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button sx={{ width: 280 }}>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">
            This popover has same width as target, it is useful when you are building input
            dropdowns
          </Text>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}

export const sameWidth: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
