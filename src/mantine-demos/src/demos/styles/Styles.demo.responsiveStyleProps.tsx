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
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
`;

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}

export const responsiveStyleProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
