import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button, Group } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Group position="center">
      <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
        <Popover.Target>
          <Button onMouseEnter={open} onMouseLeave={close}>
            Hover to see popover
          </Button>
        </Popover.Target>
        <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
          <Text size="sm">This popover is shown when user hovers the target element</Text>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
`;

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Group position="center">
      <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
        <Popover.Target>
          <Button onMouseEnter={open} onMouseLeave={close}>
            Hover to see popover
          </Button>
        </Popover.Target>
        <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
          <Text size="sm">This popover is shown when user hovers the target element</Text>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
