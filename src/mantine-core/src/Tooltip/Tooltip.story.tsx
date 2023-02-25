import React, { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { Group } from '../Group';
import { Box } from '../Box';

export default { title: 'Tooltip' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip position="right" label="Tooltip label" withArrow>
        <Button>target</Button>
      </Tooltip>
    </div>
  );
}

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
    <Tooltip.Floating label="Tooltip">
      <button type="button" style={{ width: 200, height: 200 }}>
        target
      </button>
    </Tooltip.Floating>
  </div>
);

export const FloatingAndDisabled = () => {
  const [tooltipEnabled, setTooltipEnabled] = useState(true);

  return (
    <div style={{ padding: 0 }}>
      <Tooltip.Floating label="test" disabled={!tooltipEnabled}>
        <Group>
          <Box bg="red" w={100} h={100}>
            Enabled
          </Box>
          <Box
            bg="green"
            w={100}
            h={100}
            onMouseEnter={() => setTooltipEnabled(false)}
            onMouseLeave={() => setTooltipEnabled(true)}
          >
            Disabled
          </Box>
          <Box bg="blue" w={100} h={100}>
            Enabled
          </Box>
        </Group>
      </Tooltip.Floating>
    </div>
  );
};

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

export const WithArrow = () => (
  <Tooltip
    withArrow
    label="Tooltip button with arrow Tooltip button with arrow Tooltip button with arrow"
  >
    <Button type="button">Tooltip button with arrow</Button>
  </Tooltip>
);

export const WithArrowRadius = () => (
  <Tooltip
    withArrow
    label="Tooltip button with arrow Tooltip button with arrow Tooltip button with arrow"
    arrowRadius={4}
  >
    <Button type="button">Tooltip button with arrow radius</Button>
  </Tooltip>
);

export function Inline() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam in quos aperiam magni
      quas neque{' '}
      <Tooltip label="Inline tooltip" inline>
        <span style={{ background: 'pink' }}>aliquid laboriosam dolorum</span>
      </Tooltip>
      , eum voluptate, perferendis placeat repudiandae nesciunt explicabo quibusdam deserunt, animi
      dicta.
    </div>
  );
}
