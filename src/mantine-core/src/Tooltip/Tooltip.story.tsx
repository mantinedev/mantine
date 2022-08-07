import React, { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { Group } from '../Group';

export default { title: 'Tooltip' };

export const Usage = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        position="bottom"
        label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
        width={300}
        multiline
        events={{ focus: true, hover: true, touch: false }}
        withinPortal={false}
        opened={opened}
      >
        <Button fullWidth onClick={() => setOpened(!opened)}>
          target
        </Button>
      </Tooltip>
    </div>
  );
};

export const TooltipGroup = () => (
  <Tooltip.Group openDelay={500}>
    <Tooltip label="Tooltip 1">
      <button type="button">Button 1</button>
    </Tooltip>
    <Tooltip label="Tooltip 2">
      <button type="button">Button 2</button>
    </Tooltip>
    <Tooltip label="Tooltip 3">
      <button type="button">Button 3</button>
    </Tooltip>
  </Tooltip.Group>
);

export const Controlled = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Tooltip label="Tooltip 1" opened={opened}>
        <button
          type="button"
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          Hover to open both tooltips
        </button>
      </Tooltip>
      <Tooltip label="Tooltip 2" opened={opened}>
        <button type="button">Button 2</button>
      </Tooltip>
    </div>
  );
};

export const Floating = () => (
  <div style={{ padding: 0 }}>
    <Tooltip.Floating label="Tooltip" disabled>
      <button type="button" style={{ width: 200, height: 200 }}>
        target
      </button>
    </Tooltip.Floating>
  </div>
);

export const Unmount = () => {
  const [mounted, setMounted] = useState(true);
  return (
    <div>
      <button type="button" onClick={() => setMounted((c) => !c)}>
        Toggle
      </button>
      <Tooltip opened label="Tooltip">
        <button
          type="button"
          style={{ width: 200, height: 200, display: mounted ? 'block' : 'none' }}
        >
          target
        </button>
      </Tooltip>
    </div>
  );
};

export const HexColor = () => (
  <Tooltip label="Tooltip 2" color="#F0F">
    <button type="button">Button 2</button>
  </Tooltip>
);

export const WithinGroup = () => (
  <Group grow>
    <Button>Regular button</Button>
    <Tooltip label="tooltip">
      <Button>Tooltip button</Button>
    </Tooltip>
  </Group>
);
