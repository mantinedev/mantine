import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';

function ThemeOverrideDemo() {
  return (
    <Button themeOverride={{ fontFamily: 'Verdana, sans-serif' }}>
      Verdana button
    </Button>
  );
}`;

export function ThemeOverrideDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button themeOverride={{ fontFamily: 'Verdana, sans-serif' }}>Verdana button</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
