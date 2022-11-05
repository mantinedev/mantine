import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Box } from '@mantine/core';

const code = `
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg="blue.7"
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg="blue.7"
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}

export const systemProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
