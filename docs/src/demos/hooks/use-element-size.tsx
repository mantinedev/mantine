import React from 'react';
import { useMantineTheme, Text, Group, Code } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { ref, ...resolution } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ pointerEvents: 'none', width: 400, height: 120 }} />
      <Text align="center">Rect: <Code>{JSON.stringify(resolution)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const { ref, ...resolution } = useElementSize();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group position="center">
        <textarea
          ref={ref}
          style={{
            pointerEvents: 'none',
            width: 400,
            height: 120,
            border: 'none',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(resolution, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useElementSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
