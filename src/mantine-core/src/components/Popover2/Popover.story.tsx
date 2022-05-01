import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover } from './Popover';
import { Button } from '../Button';

export default { title: 'Popover2' };

export function Uncontrolled() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function Usage() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Popover
        opened={opened}
        onClose={close}
        middlewares={{ shift: false, flip: false }}
        position="right"
        withArrow
        trapFocus
        width={300}
        radius="md"
      >
        <Popover.Target>
          <Button onClick={toggle}>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <input />
          <input data-autofocus />
          <input />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function SameWidth() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <div style={{ padding: 40 }}>
      <Popover opened={opened} width="target" onClose={close}>
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
