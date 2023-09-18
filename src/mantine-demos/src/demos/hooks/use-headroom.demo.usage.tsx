import React from 'react';
import { Box, Portal, rem, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';

const code = `
import { Box, Portal, rem, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: rem(60),
            zIndex: 1000000,
            transform: \`translate3d(0, \${pinned ? 0 : rem(-110)}, 0)\`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

`;

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: rem(60),
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

export const useHeadroomDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
