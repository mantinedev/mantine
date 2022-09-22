import React, { useState } from 'react';
import { Popover } from './Popover';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { Group } from '../Group';

export default { title: 'Popover' };

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

export function WithArrow() {
  return (
    <div style={{ padding: 40 }}>
      <Popover withArrow width={400}>
        <Popover.Target>
          <Button>arrow popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown with arrow</Popover.Dropdown>
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
        position="bottom"
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

export function WithinGroup() {
  return (
    <Group grow>
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
      <Button>Regular button</Button>
    </Group>
  );
}

export function PopoverTargetWithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Tooltip label="Tooltip first">
          <Popover.Target>
            <Button>Tooltip first</Button>
          </Popover.Target>
        </Tooltip>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>

      <Popover>
        <Popover.Target>
          <Tooltip label="Tooltip last">
            <Button ml="xl">Tooltip last</Button>
          </Tooltip>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}
