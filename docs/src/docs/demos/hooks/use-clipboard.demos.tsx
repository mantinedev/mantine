import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

export function UseClipboardDemo() {
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
      <ElementsGroup position="center">
        <Button
          color={clipboard.copied ? 'teal' : 'blue'}
          onClick={() => clipboard.copy('Hello, world!')}
        >
          {clipboard.copied ? 'Copied' : 'Copy'}
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
