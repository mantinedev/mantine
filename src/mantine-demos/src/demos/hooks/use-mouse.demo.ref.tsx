import React from 'react';
import { Group, Text, Code, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useMouse } from '@mantine/hooks';

const code = `
import { Text, Code, Group, Box } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <Box
          ref={ref}
          w={300}
          h={180}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          })}
        />
      </Group>
      <Text align="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <Box
          ref={ref}
          w={300}
          h={180}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          })}
        />
      </Group>
      <Text align="center" mt="sm">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

export const useMouseRef: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
