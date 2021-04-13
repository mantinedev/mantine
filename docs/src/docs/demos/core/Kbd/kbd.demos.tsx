import React from 'react';
import { Kbd } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Kbd } from '@mantine/core';

export function KbdDemo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}`;

export function KbdBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </CodeDemo>
  );
}
