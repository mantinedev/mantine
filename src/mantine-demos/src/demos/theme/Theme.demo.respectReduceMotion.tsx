import React from 'react';
import { Tooltip, Button, MantineProvider, Group } from '@mantine/core';

const code = `
import { Tooltip, Button, MantineProvider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="User settings are respected" transition="pop" transitionDuration={300}>
        <Button>Respect user settings</Button>
      </Tooltip>
      <MantineProvider inherit theme={{ respectReducedMotion: false }}>
        <Tooltip label="User settings are disregarded" transition="pop" transitionDuration={300}>
          <Button>Disregard user settings</Button>
        </Tooltip>
      </MantineProvider>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="User settings are respected" transition="pop" transitionDuration={300}>
        <Button>Respect user settings</Button>
      </Tooltip>
      <MantineProvider inherit theme={{ respectReducedMotion: false }}>
        <Tooltip label="User settings are disregarded" transition="pop" transitionDuration={300}>
          <Button>Disregard user settings</Button>
        </Tooltip>
      </MantineProvider>
    </Group>
  );
}

export const respectReduceMotion: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
