import React, { useRef } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollIntoView } = useScrollIntoView({
    target: targetRef.current,
  });

  return (
    <Group position="center">
      <Button onClick={scrollIntoView}>Scroll to target</Button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        }}
      />
      <Text elementRef={targetRef}>Hello there</Text>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollIntoView } = useScrollIntoView({
    target: targetRef.current,
  });

  return (
    <Group position="center">
      <Button onClick={scrollIntoView}>Scroll to target</Button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        }}
      />
      <Text elementRef={targetRef}>Hello there</Text>
    </Group>
  );
}

export const useScrollIntoViewUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
