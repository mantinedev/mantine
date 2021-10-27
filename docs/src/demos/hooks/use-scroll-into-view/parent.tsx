import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, useMantineTheme, Paper } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Paper } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <Paper ref={targetRef}>Scroll me into view<</Paper>
      </Paper>

      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group position="center">
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <div style={{ paddingTop: 260, paddingBottom: 450 }}>
          <Paper
            ref={targetRef}
            padding="xl"
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: '100%',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </div>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}

export const useScrollIntoViewParent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
