import { Group, RingProgress, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const sections = [{ value: 40, color: 'cyan' }];

  return (
    <Group justify="center">
      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={0} />
        <Text size="sm">0° (right)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={90} />
        <Text size="sm">90° (bottom)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={180} />
        <Text size="sm">180° (left)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={270} />
        <Text size="sm">270° (top)</Text>
      </Stack>
    </Group>
  );
}
`;

function Demo() {
  const sections = [{ value: 40, color: 'cyan' }];

  return (
    <Group justify="center">
      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={0} />
        <Text size="sm">0° (right)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={90} />
        <Text size="sm">90° (bottom)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={180} />
        <Text size="sm">180° (left)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={270} />
        <Text size="sm">270° (top)</Text>
      </Stack>
    </Group>
  );
}

export const startAngle: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
