import React from 'react';
import { Group, Button, MantineProvider, useMantineTheme } from '@mantine/core';

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryColor: 'cyan' }}>
      <Button>Primary button</Button>
      <Button color="red">Red button</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

  return (
    <MantineProvider theme={{ primaryColor: 'cyan', colorScheme: theme.colorScheme }}>
      <Group position="center">
        <Button>Primary button</Button>
        <Button color="red">Red button</Button>
      </Group>
    </MantineProvider>
  );
}

export const primaryColor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
