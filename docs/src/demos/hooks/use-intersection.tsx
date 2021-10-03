import React, { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, useMantineTheme } from '@mantine/core';

const code = `
import { useIntersection } from '@mantine/hooks';
import { Paper, Text, useMantineTheme } from '@mantine/core';

function Demo() {
  const containerRef = useRef();
  const theme = useMantineTheme();
  const [ref, observer] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          padding="xl"
          style={{
            backgroundColor: observer?.isIntersecting ? theme.colors.green[9] : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {observer?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef();
  const theme = useMantineTheme();
  const [ref, observer] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          padding="xl"
          style={{
            backgroundColor: observer?.isIntersecting ? theme.colors.green[9] : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {observer?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}

export const useIntersectionDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
