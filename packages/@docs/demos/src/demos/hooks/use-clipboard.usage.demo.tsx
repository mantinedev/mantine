import React from 'react';
import { Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useClipboard } from '@mantine/hooks';

const code = `
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function Demo() {
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

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}

export const useClipboardDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
