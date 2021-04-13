import React from 'react';
import { Highlight } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Highlight } from '@mantine/core';

export function HighlightDemo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      variant="link"
      weight={500}
    >
      Mantine website
    </Highlight>
  );
}`;

export function HighlightComponentDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Highlight
        component="a"
        href="https://mantine.dev"
        target="_blank"
        highlight="mantine"
        variant="link"
        weight={500}
      >
        Mantine website
      </Highlight>
    </CodeDemo>
  );
}
