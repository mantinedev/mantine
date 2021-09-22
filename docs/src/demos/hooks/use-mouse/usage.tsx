import React from 'react';
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const { x, y } = useMouse();

  return (
    <Text align="center" style={{ marginTop: theme.spacing.sm }}>
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
