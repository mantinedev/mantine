import React from 'react';
import { Group, Button } from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button themeOverride={{ fontFamily: 'Verdana, sans-serif' }}>
      Verdana button
    </Button>
  );
}`;

export function ThemeOverrideDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Button themeOverride={{ fontFamily: 'Verdana, sans-serif' }}>Verdana button</Button>
      </Group>
    </CodeDemo>
  );
}
