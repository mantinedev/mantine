import React, { useRef } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme, Paper } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme, Paper } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const { scrollIntoView } = useScrollIntoView({
    axis: 'x',
  });

  return (
    <Group position="center">
      <Paper elementRef={scrollableRef} style={{ overflowX: 'scroll', height: 150, width: 300 }}>
        <div style={{ paddingLeft: 260, paddingRight: 450 }}>
          <Paper
            elementRef={targetRef}
            padding="md"
            style={{
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: 'max-content',
            }}
          >
            <Text>Hello there</Text>
          </Paper>
        </div>
      </Paper>
      <Button
        onClick={() => scrollIntoView({
          parent: scrollableRef.current,
          target: targetRef.current,
        })}
      >
        Scroll to target
      </Button>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const { scrollIntoView } = useScrollIntoView({
    axis: 'x',
  });

  return (
    <Group position="center">
      <Paper elementRef={scrollableRef} style={{ overflowX: 'scroll', height: 150, width: 300 }}>
        <div style={{ paddingLeft: 260, paddingRight: 450 }}>
          <Paper
            elementRef={targetRef}
            padding="md"
            style={{
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: 'max-content',
            }}
          >
            <Text>Hello there</Text>
          </Paper>
        </div>
      </Paper>
      <Button
        onClick={() => scrollIntoView({
          parent: scrollableRef.current,
          target: targetRef.current,
        })}
      >
        Scroll to target
      </Button>
    </Group>
  );
}

export const useScrollIntoViewAxis: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
