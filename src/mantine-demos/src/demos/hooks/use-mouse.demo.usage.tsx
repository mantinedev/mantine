import React from 'react';
import { Text, Code } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useMouse } from '@mantine/hooks';

const code = `
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
