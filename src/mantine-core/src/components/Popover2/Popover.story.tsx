import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover } from './Popover';
import { Button } from '../Button';

export default { title: 'Popover2' };

export function Usage() {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <div
      style={{
        padding: 40,
      }}
    >
      <Popover
        opened={opened}
        middlewares={{ shift: false, flip: false }}
        position="bottom"
        withArrow
      >
        <Popover.Target>
          <Button onClick={toggle}>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown radius="md">Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function SameWidth() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div style={{ padding: 40 }}>
      <Popover opened={opened} width="target">
        <Popover.Target>
          <Button onClick={toggle} fullWidth>
            Toggle popover
          </Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}
