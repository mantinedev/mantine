import React from 'react';
import { Popover, Text, Button } from '@mantine/core';

const code = `
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={700} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>arrow popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is to test popover arrow, the arrow will be the center postion.</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={700} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>arrow popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is to test popover arrow, the arrow will be the center postion.</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const arrow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
