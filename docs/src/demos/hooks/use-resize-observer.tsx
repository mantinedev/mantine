import React from 'react';
import { useMantineTheme, Text, Group, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code, Group } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text align="center" size="sm">
        Resize current element by moving its left bottom corner
      </Text>
      <Group position="center">
        <textarea
          ref={ref}
          value=""
          style={{
            pointerEvents: 'none',
            width: 400,
            height: 120,
            border: \`1px solid \${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}\`,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center">
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize current element by moving its left bottom corner
      </Text>
      <Group position="center">
        <textarea
          ref={ref}
          value=""
          style={{
            pointerEvents: 'none',
            width: 400,
            height: 120,
            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
