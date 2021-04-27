import React from 'react';
import { ElementsGroup, Button, MantineProvider } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, MantineProvider } from '@mantine/core';

function PrimaryColorDemo() {
  return (
    <MantineProvider theme={{ primaryColor: 'teal' }}>
      <Button>Primary button</Button>
      <Button color="red">Red button</Button>
    </MantineProvider>
  );
}`;

export function PrimaryColorDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{ primaryColor: 'teal' }}>
        <ElementsGroup position="center">
          <Button>Primary button</Button>
          <Button color="red">Red button</Button>
        </ElementsGroup>
      </MantineProvider>
    </CodeDemo>
  );
}
