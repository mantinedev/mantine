import React from 'react';
import { Group, Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

export function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

export function UseClipboardDemo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Button
          color={clipboard.copied ? 'teal' : 'blue'}
          onClick={() => clipboard.copy('Hello, world!')}
        >
          {clipboard.copied ? 'Copied' : 'Copy'}
        </Button>
      </Group>
    </CodeDemo>
  );
}
