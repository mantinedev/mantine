import React from 'react';
import { Group, Button, MantineProvider, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryColor: 'cyan' }}>
      <Button>Primary button</Button>
      <Button color="red">Red button</Button>
    </MantineProvider>
  );
}`;

export function PrimaryColorDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{ primaryColor: 'cyan', colorScheme: theme.colorScheme }}>
        <Group position="center">
          <Button>Primary button</Button>
          <Button color="red">Red button</Button>
        </Group>
      </MantineProvider>
    </CodeDemo>
  );
}
