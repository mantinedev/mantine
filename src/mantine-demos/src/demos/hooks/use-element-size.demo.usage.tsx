import React from 'react';
import { useMantineTheme, Text, Group, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useElementSize } from '@mantine/hooks';

const code = `
import { useElementSize } from '@mantine/hooks';
import { rem } from '@mantine/core';

function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const { ref, width, height } = useElementSize();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group position="center">
        <textarea
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            border: 'none',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" mt="sm">
        Width: {width}, height: {height}
      </Text>
    </>
  );
}

export const useElementSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
