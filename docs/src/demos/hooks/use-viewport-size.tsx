import React from 'react';
import { useViewportSize } from '@mantine/hooks';
import { Text, Group } from '@mantine/core';

const code = `
import { useViewportSize } from '@mantine/hooks';
import { Text, Group } from '@mantine/core';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Group position="center">
      <Text>
        Viewport width: {width}
      </Text>
      <Text>
        Viewport height: {height}
      </Text>
    </Group>
  );
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Group position="center">
      <Text>
        Viewport width: {width}
      </Text>
      <Text>
        Viewport height: {height}
      </Text>
    </Group>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
