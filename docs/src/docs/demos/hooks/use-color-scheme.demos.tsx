import React from 'react';
import { ElementsGroup, Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function UseColorSchemeDemo() {
  const colorScheme = useColorScheme();
  
  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

export function UseColorSchemeDemo() {
  const colorScheme = useColorScheme();

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
          Your system color scheme is {colorScheme}
        </Badge>
      </ElementsGroup>
    </CodeDemo>
  );
}
