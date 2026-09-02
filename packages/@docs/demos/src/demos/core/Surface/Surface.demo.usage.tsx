import { Box, Surface, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Box p="md">
      <Surface maw={400} mx="auto" p="xl" {...props}>
        <Text>Surface is the depth-aware background primitive</Text>
        <Text>
          Use it to create cards, panels and other containers that require background with optional
          shadow and border
        </Text>
      </Surface>
    </Box>
  );
}

const code = `
import { Surface, Text } from '@mantine/core';

function Demo() {
  return (
    <Surface{{props}} p="xl">
      <Text>Surface is the depth-aware background primitive</Text>
      <Text>
        Use it to create cards, panels and other containers that require background with optional
        shadow and border
      </Text>
    </Surface>
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  dimmed: true,
  controls: [
    { prop: 'shadow', type: 'size', initialValue: 'xs', libraryValue: 'none' },
    { prop: 'radius', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'withBorder', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
