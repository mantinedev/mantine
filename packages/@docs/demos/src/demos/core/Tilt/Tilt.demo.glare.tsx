import { Box, Stack, Text, Tilt, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Stack, Text, Tilt, Title } from '@mantine/core';

function Demo() {
  return (
    <Tilt withGlare radius="lg">
      <Box
        w={320}
        h={220}
        p="xl"
        c="white"
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage:
            'linear-gradient(135deg, var(--mantine-color-indigo-6), var(--mantine-color-grape-6))',
        }}
      >
        <Stack justify="center" h="100%" gap={4}>
          <Title order={3}>Glare</Title>
          <Text>A light reflection follows the pointer across the surface.</Text>
        </Stack>
      </Box>
    </Tilt>
  );
}
`;

function Demo() {
  return (
    <Tilt withGlare radius="lg">
      <Box
        w={320}
        h={220}
        p="xl"
        c="white"
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage:
            'linear-gradient(135deg, var(--mantine-color-indigo-6), var(--mantine-color-grape-6))',
        }}
      >
        <Stack justify="center" h="100%" gap={4}>
          <Title order={3}>Glare</Title>
          <Text>A light reflection follows the pointer across the surface.</Text>
        </Stack>
      </Box>
    </Tilt>
  );
}

export const glare: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
