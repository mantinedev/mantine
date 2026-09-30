import { Box, Stack, Text, Tilt, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Tilt radius="lg" {...props}>
      <Box
        w={320}
        h={220}
        p="xl"
        c="white"
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage:
            'linear-gradient(135deg, var(--mantine-color-blue-6), var(--mantine-color-cyan-6))',
        }}
      >
        <Stack justify="center" h="100%" gap={4}>
          <Title order={3}>Tilt me</Title>
          <Text>Tweak the props to see how the effect changes.</Text>
        </Stack>
      </Box>
    </Tilt>
  );
}

const code = `
import { Box, Stack, Text, Tilt, Title } from '@mantine/core';

function Demo() {
  return (
    <Tilt radius="lg"{{props}}>
      <Box
        w={320}
        h={220}
        p="xl"
        c="white"
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage:
            'linear-gradient(135deg, var(--mantine-color-blue-6), var(--mantine-color-cyan-6))',
        }}
      >
        <Stack justify="center" h="100%" gap={4}>
          <Title order={3}>Tilt me</Title>
          <Text>Tweak the props to see how the effect changes.</Text>
        </Stack>
      </Box>
    </Tilt>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'maxRotate', type: 'number', initialValue: 15, min: 0, max: 40, libraryValue: 15 },
    {
      prop: 'perspective',
      type: 'number',
      initialValue: 1000,
      min: 200,
      max: 2000,
      step: 50,
      libraryValue: 1000,
    },
    { prop: 'withGlare', type: 'boolean', initialValue: true, libraryValue: false },
    { prop: 'resetOnLeave', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'trackWindow', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
