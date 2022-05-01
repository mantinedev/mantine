import React, { useState } from 'react';
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
  const [opened, setState] = useState(false);

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Popover
        opened={opened}
        onChange={setState}
        middlewares={{ shift: false, flip: false }}
        position="right"
        withArrow
        trapFocus
        width={300}
        radius="md"
      >
        <Popover.Target>
          <Button onClick={() => setState((c) => !c)}>Toggle popover</Button>
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
  const [opened, setState] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Popover opened={opened} width="target" onChange={setState}>
        <Popover.Target>
          <Button onClick={() => setState((c) => !c)} fullWidth>
            Toggle popover
          </Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}
