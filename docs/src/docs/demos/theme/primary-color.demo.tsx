import React from 'react';
import { Group, Button, MantineProvider, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryColor: 'teal' }}>
      <Button>Primary button</Button>
      <Button color="red">Red button</Button>
    </MantineProvider>
  );
}`;

export function PrimaryColorDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{ primaryColor: 'teal', colorScheme: theme.colorScheme }}>
        <Group position="center">
          <Button>Primary button</Button>
          <Button color="red">Red button</Button>
        </Group>
      </MantineProvider>
    </CodeDemo>
  );
}
