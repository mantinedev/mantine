import React, { useState } from 'react';
import { Popover } from './Popover';
import { Button } from '../Button';
import { MultiSelect } from '../MultiSelect';
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

export function withFloatingAutoUpdate() {
  return (
    <div style={{ padding: 40, height: 400, overflow: 'scroll' }}>
      <div style={{ height: 150 }} />
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
      <div style={{ height: 300 }} />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <Popover disabled>
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

export function WithArrowRadius() {
  return (
    <div style={{ padding: 40 }}>
      <Popover withArrow width={400} arrowRadius={4}>
        <Popover.Target>
          <Button>arrow popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown with arrow radius</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function Controlled() {
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
        radius="md"
        returnFocus
      >
        <Popover.Target>
          <Button onClick={() => setState((c) => !c)}>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Button onClick={() => setState(false)}>Close</Button>
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

export function WithMultiSelect() {
  return (
    <div style={{ padding: 40 }}>
      <Popover width={400}>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <MultiSelect data={['react', 'ng']} defaultValue={['ng']} withinPortal />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function Inline() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam in quos aperiam magni
      quas neque{' '}
      <Popover middlewares={{ shift: true, flip: true, inline: true }} position="top">
        <Popover.Target>
          <span style={{ background: 'pink' }}>aliquid laboriosam dolorum</span>
        </Popover.Target>
        <Popover.Dropdown>Inline popover</Popover.Dropdown>
      </Popover>
      , eum voluptate, perferendis placeat repudiandae nesciunt explicabo quibusdam deserunt, animi
      dicta.
    </div>
  );
}
