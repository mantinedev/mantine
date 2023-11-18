import React from 'react';
import { useMantineTheme, Text, Group, Code, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useResizeObserver } from '@mantine/hooks';

const code = `
import { Text, Code, rem } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <Text ta="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text ta="center" size="sm" mb="xs">
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group justify="center">
        <textarea
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            border: 'none',
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        />
      </Group>
      <Text ta="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
