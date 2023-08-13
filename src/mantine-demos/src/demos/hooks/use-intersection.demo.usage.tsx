import React, { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Text, Paper, Box } from '@mantine/core';

const code = `
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Box } from '@mantine/core';

function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} sx={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          sx={(theme) => ({
            backgroundColor: entry?.isIntersecting ? theme.colors.green[9] : theme.colors.red[9],
            minWidth: '50%',
          })}
        >
          <Text c="#fff" weight={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} sx={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          sx={(theme) => ({
            backgroundColor: entry?.isIntersecting ? theme.colors.green[9] : theme.colors.red[9],
            minWidth: '50%',
          })}
        >
          <Text c="#fff" weight={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}

export const useIntersectionDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
