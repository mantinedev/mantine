import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineThemeProvider, Button, Group } from '@mantine/core';

const code = `
import { MantineThemeProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineThemeProvider>
      <Group>
        <Button>Default button</Button>

        <MantineThemeProvider theme={{ primaryColor: 'red' }}>
          <Button>Inside MantineThemeProvider</Button>
        </MantineThemeProvider>
      </Group>
    </MantineThemeProvider>
  );
}
`;

function Demo() {
  return (
    <MantineThemeProvider>
      <Group>
        <Button>Default button</Button>

        <MantineThemeProvider theme={{ primaryColor: 'red' }}>
          <Button>Inside MantineThemeProvider</Button>
        </MantineThemeProvider>
      </Group>
    </MantineThemeProvider>
  );
}

export const themeProvider: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
