import React from 'react';
import { Button, Group } from '@mantine/core';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Button onClick={() => console.log('Hello')}>Regular button</Button>

      <Button
        component="a"
        href="https://mantine.dev"
        target="_blank"
        variant="outline"
        leftIcon={<ExternalLinkIcon />}
      >
        Mantine docs
      </Button>
    </Group>
  );
}`;

export function ButtonComponentsDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Button>Regular button</Button>
        <Button
          component="a"
          href="https://mantine.dev"
          target="_blank"
          variant="outline"
          leftIcon={<ExternalLinkIcon />}
        >
          Mantine docs
        </Button>
      </Group>
    </CodeDemo>
  );
}
