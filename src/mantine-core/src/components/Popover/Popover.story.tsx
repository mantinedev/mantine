import React, { useState } from 'react';
import { Box, MantineThemeProvider } from '../../core';
import { Popover } from './Popover';
import { Tooltip } from '../Tooltip';
import { Group } from '../Group';

export default { title: 'Popover' };

export function Uncontrolled() {
  return (
    <MantineThemeProvider
      theme={{
        components: {
          PopoverDropdown: Popover.Dropdown.extend({
            defaultProps: {
              'data-test': 'red',
            },
          }),
        },
      }}
    >
      <div style={{ padding: 40 }}>
        <Popover opened>
          <Popover.Target>
            <button type="button">Toggle popover</button>
          </Popover.Target>

          <Popover.Dropdown>Dropdown</Popover.Dropdown>
        </Popover>
      </div>
    </MantineThemeProvider>
  );
}

export function withFloatingAutoUpdate() {
  return (
    <div style={{ padding: 40, height: 400, overflow: 'scroll' }}>
      <div style={{ height: 150 }} />
      <Popover>
        <Popover.Target>
          <button type="button">Toggle popover</button>
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
          <button type="button">Toggle popover</button>
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
          <button type="button">arrow popover</button>
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
          <button type="button">arrow popover</button>
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
          <button type="button" onClick={() => setState((c) => !c)}>
            Toggle popover
          </button>
        </Popover.Target>

        <Popover.Dropdown>
          <button type="button" onClick={() => setState(false)}>
            Close
          </button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function KeepMounted() {
  const [opened, setState] = useState(false);

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Popover opened={opened} onChange={setState} keepMounted>
        <Popover.Target>
          <button type="button" onClick={() => setState((c) => !c)}>
            Toggle popover
          </button>
        </Popover.Target>

        <Popover.Dropdown>
          <button type="button" onClick={() => setState(false)}>
            Close
          </button>
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
          <button type="button" onClick={() => setState((c) => !c)}>
            Toggle popover
          </button>
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
          <button type="button">Toggle popover</button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
      <button type="button">Regular button</button>
    </Group>
  );
}

export function PopoverTargetWithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Tooltip label="Tooltip first">
          <Popover.Target>
            <button type="button">Tooltip first</button>
          </Popover.Target>
        </Tooltip>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>

      <Popover>
        <Popover.Target>
          <Tooltip label="Tooltip last">
            <button type="button">Tooltip last</button>
          </Tooltip>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
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

export function PopoverEvents() {
  const [opened, setState] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Group>
        <Popover
          opened={opened}
          onChange={setState}
          onOpen={() => setToggle1(true)}
          onClose={() => setToggle1(false)}
          middlewares={{ shift: false, flip: false }}
          position="bottom"
          withArrow
          trapFocus
          radius="md"
          returnFocus
        >
          <Popover.Target>
            <Box>
              <button type="button" onClick={() => setState((c) => !c)}>
                Toggle controlled popover
              </button>
              <br />
              <div>Controlled State: {toggle1 ? 'Open' : 'Closed'}</div>
            </Box>
          </Popover.Target>

          <Popover.Dropdown>
            <button type="button" onClick={() => setState(false)}>
              Close
            </button>
          </Popover.Dropdown>
        </Popover>
        <Popover onOpen={() => setToggle2(true)} onClose={() => setToggle2(false)}>
          <Popover.Target>
            <Box>
              <button type="button">Toggle uncontrolled popover</button>
              <br />
              <div>Uncontrolled State: {toggle2 ? 'Open' : 'Closed'}</div>
            </Box>
          </Popover.Target>

          <Popover.Dropdown>Dropdown</Popover.Dropdown>
        </Popover>
      </Group>
    </div>
  );
}

export function AxisOffset() {
  return (
    <div style={{ padding: 40 }}>
      <Popover offset={{ mainAxis: 50, crossAxis: 50 }}>
        <Popover.Target>
          <button type="button">Toggle popover</button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}
