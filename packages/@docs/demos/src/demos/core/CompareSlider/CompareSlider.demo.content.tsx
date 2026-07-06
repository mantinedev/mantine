import { Box, Center, CompareSlider, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Center, CompareSlider, Stack, Text, Title } from '@mantine/core';

function Panel({ background, color, label, title }) {
  return (
    <Box h="100%" w="100%" bg={background} c={color}>
      <Center h="100%">
        <Stack gap={4} align="center">
          <Text tt="uppercase" fw={700} fz="xs" opacity={0.7}>{label}</Text>
          <Title order={3}>{title}</Title>
        </Stack>
      </Center>
    </Box>
  );
}

function Demo() {
  return (
    <CompareSlider
      aria-label="Compare designs"
      h={{ base: 156, sm: 260 }}
      w={{ base: 300, sm: 500 }}
      before={
        <Panel background="gray.1" color="dark.6" label="Before" title="Old design" />
      }
      after={
        <Panel background="dark.7" color="white" label="After" title="New design" />
      }
    />
  );
}
`;

function Panel({
  background,
  color,
  label,
  title,
}: {
  background: string;
  color: string;
  label: string;
  title: string;
}) {
  return (
    <Box h="100%" w="100%" bg={background} c={color}>
      <Center h="100%">
        <Stack gap={4} align="center">
          <Text tt="uppercase" fw={700} fz="xs" opacity={0.7}>
            {label}
          </Text>
          <Title order={3}>{title}</Title>
        </Stack>
      </Center>
    </Box>
  );
}

function Demo() {
  return (
    <CompareSlider
      aria-label="Compare designs"
      h={{ base: 156, sm: 260 }}
      w={{ base: 300, sm: 500 }}
      before={<Panel background="gray.1" color="dark.6" label="Before" title="Old design" />}
      after={<Panel background="dark.7" color="white" label="After" title="New design" />}
    />
  );
}

export const content: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
