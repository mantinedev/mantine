import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

export function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

export function UseReducedMotionDemo() {
  const reduceMotion = useReducedMotion();
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Badge
          color={reduceMotion ? 'red' : 'teal'}
          style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
          variant="filled"
        >
          {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
        </Badge>
      </Group>
    </CodeDemo>
  );
}
