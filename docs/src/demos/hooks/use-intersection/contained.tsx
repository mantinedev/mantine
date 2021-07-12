import React, { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Center } from '@mantine/core';

const code = `
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Center } from '@mantine/core';

function Demo() {
  const containerRef = useRef();
  const [ref, ioEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper elementRef={containerRef} style={{ overflowY: 'scroll', height: '300px' }}>
      <Center style={{ height: '900px' }}>
        <Paper
          elementRef={ref}
          padding={18}
          style={{
            backgroundColor: ioEntry?.isIntersecting ? '#a0ea93' : '#f19090',
            minWidth: '50%',
          }}
        >
          <Text>{ioEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}</Text>
        </Paper>
      </Center>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef();
  const [ref, ioEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper elementRef={containerRef} style={{ overflowY: 'scroll', height: '300px' }}>
      <Center style={{ height: '900px' }}>
        <Paper
          elementRef={ref}
          padding={18}
          style={{
            backgroundColor: ioEntry?.isIntersecting ? '#a0ea93' : '#f19090',
            minWidth: '50%',
          }}
        >
          <Text>{ioEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}</Text>
        </Paper>
      </Center>
    </Paper>
  );
}

export const UseIntersectionContainedDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
