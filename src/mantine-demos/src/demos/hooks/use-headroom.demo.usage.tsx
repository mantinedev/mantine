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
          sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: theme.spacing.xs,
            height: rem(60),
            zIndex: 1000000,
            transform: \`translate3d(0, \${pinned ? 0 : rem(-110)}, 0)\`,
            transition: 'transform 400ms ease',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
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
          sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: theme.spacing.xs,
            height: rem(60),
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: 'transform 400ms ease',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

export const useHeadroomDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
