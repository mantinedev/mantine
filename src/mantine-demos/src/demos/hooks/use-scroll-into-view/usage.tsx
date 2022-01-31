import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text } from '@mantine/core';

function Demo() {
  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: navbarHeight });

  return (
    <>
      <Button onClick={() => scrollIntoView({ alignment: 'center' })}>
        Scroll to target
      </Button>

      <div style={{ height: '50vh'}} />

      <Text ref={targetRef}>Hello there</Text>
    </>
  );
}

`;

function Demo() {
  const theme = useMantineTheme();

  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: navbarHeight,
  });

  return (
    <Group position="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <div
        style={{
          width: '100%',
          height: '50vh',
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
