import React from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Group } from '@mantine/core';

const code = `
import { useIntersection } from '@mantine/hooks';
import { Text, Group } from '@mantine/core';

function Demo() {
  const [ref, ioEntry] = useIntersection({
    rootMargin: '-300px',
  });

  return (
    <Group position="center">
      <Text elementRef={ref}>
        Am I scrolled at least 300px into the viewport? {ioEntry?.isIntersecting.toString()}
      </Text>
    </Group>
  );
}
`;

function Demo() {
  const [ref, ioEntry] = useIntersection({
    rootMargin: '-300px',
  });

  return (
    <Group position="center">
      <Text elementRef={ref}>
        Am I scrolled at least 300px into the viewport? {ioEntry?.isIntersecting.toString()}
      </Text>
    </Group>
  );
}

export const useIntersectionHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
