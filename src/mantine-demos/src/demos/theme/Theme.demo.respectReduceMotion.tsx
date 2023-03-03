import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Button, MantineProvider, Group } from '@mantine/core';

const code = `
import { Tooltip, Button, MantineProvider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="User settings are respected" transitionProps={{ transition: 'pop', duration: 300 }}>
        <Button>Respect user settings</Button>
      </Tooltip>
      <MantineProvider inherit theme={{ respectReducedMotion: false }}>
        <Tooltip label="User settings are disregarded" transitionProps={{ transition: 'pop', duration: 300 }}>
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
      <Tooltip
        label="User settings are respected"
        transitionProps={{ transition: 'pop', duration: 300 }}
      >
        <Button>Respect user settings</Button>
      </Tooltip>
      <MantineProvider inherit theme={{ respectReducedMotion: false }}>
        <Tooltip
          label="User settings are disregarded"
          transitionProps={{ transition: 'pop', duration: 300 }}
        >
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
