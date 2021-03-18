import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

export function UseReducedMotionDemo() {
  const reduceMotion = useReducedMotion();
  return (
    <Button color={reduceMotion ? 'red' : 'teal'}>
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Button>
  );
}`;

export function UseReducedMotionDemo() {
  const reduceMotion = useReducedMotion();
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button color={reduceMotion ? 'red' : 'teal'}>
          {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
