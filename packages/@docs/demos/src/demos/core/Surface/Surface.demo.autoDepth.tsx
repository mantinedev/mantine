import { Surface, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Surface p="md" radius="md" withBorder>
      <Text size="sm">Level 0 – surface-page</Text>
      <Surface p="md" radius="md" mt="md" withBorder>
        <Text size="sm">Level 1 – surface-panel</Text>
        <Surface p="md" radius="md" mt="md" withBorder>
          <Text size="sm">Level 2 – surface-panel-2</Text>
        </Surface>
      </Surface>
    </Surface>
  );
}

const code = `
import { Surface, Text } from '@mantine/core';

function Demo() {
  return (
    <Surface p="md" radius="md" withBorder>
      <Text size="sm">Level 0 – surface-page</Text>
      <Surface p="md" radius="md" mt="md" withBorder>
        <Text size="sm">Level 1 – surface-panel</Text>
        <Surface p="md" radius="md" mt="md" withBorder>
          <Text size="sm">Level 2 – surface-panel-2</Text>
        </Surface>
      </Surface>
    </Surface>
  );
}
`;

export const autoDepth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  dimmed: true,
};
