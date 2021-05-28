import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function Demo() {
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
      <Group position="center">
        <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
          Your system color scheme is {colorScheme}
        </Badge>
      </Group>
    </CodeDemo>
  );
}
