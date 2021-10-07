import React, { useRef } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const targetRef = useRef<HTMLDivElement>(null);

  const navbarHeight = 60;
  const { scrollIntoView } = useScrollIntoView({
    offset: navbarHeight,
  });

  return (
    <Group position="center">
      <Button
        onClick={() => scrollIntoView({
          target: targetRef.current,
        })}
      >
        Scroll to target
      </Button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const targetRef = useRef<HTMLDivElement>(null);

  const navbarHeight = 60;
  const { scrollIntoView } = useScrollIntoView({
    offset: navbarHeight,
  });

  return (
    <Group position="center">
      <Button
        onClick={() => scrollIntoView({
          target: targetRef.current,
          alignment: 'center',
        })}
      >
        Scroll to target
      </Button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}

export const useScrollIntoViewUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
