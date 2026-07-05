import { ColorWheel, Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorWheel, Group, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Stack align="center" gap="xs">
        <ColorWheel aria-label="Vivid" saturation={100} lightness={50} defaultValue={210} />
        <Text size="sm">saturation=100 lightness=50</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <ColorWheel aria-label="Pastel" saturation={60} lightness={70} defaultValue={210} />
        <Text size="sm">saturation=60 lightness=70</Text>
      </Stack>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Stack align="center" gap="xs">
        <ColorWheel aria-label="Vivid" saturation={100} lightness={50} defaultValue={210} />
        <Text size="sm">saturation=100 lightness=50</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <ColorWheel aria-label="Pastel" saturation={60} lightness={70} defaultValue={210} />
        <Text size="sm">saturation=60 lightness=70</Text>
      </Stack>
    </Group>
  );
}

export const ringColors: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
