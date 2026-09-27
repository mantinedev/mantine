import { Box, useMatches } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, useMatches } from '@mantine/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    1200: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
`;

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    1200: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}

export const useMatchesHook: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
