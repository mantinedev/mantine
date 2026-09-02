import { Surface, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Surface level={2} p="md" radius="md" withBorder>
      <Text size="sm">Explicit level 2</Text>
      <Surface level="-1" p="md" radius="md" mt="md" withBorder>
        <Text size="sm">Relative level "-1" – one level below the parent, resolves to 1</Text>
      </Surface>
      <Surface level={0} p="md" radius="md" mt="md" withBorder>
        <Text size="sm">Explicit level 0 – page background</Text>
      </Surface>
    </Surface>
  );
}

const code = `
import { Surface, Text } from '@mantine/core';

function Demo() {
  return (
    <Surface level={2} p="md" radius="md" withBorder>
      <Text size="sm">Explicit level 2</Text>
      <Surface level="-1" p="md" radius="md" mt="md" withBorder>
        <Text size="sm">Relative level "-1" – one level below the parent, resolves to 1</Text>
      </Surface>
      <Surface level={0} p="md" radius="md" mt="md" withBorder>
        <Text size="sm">Explicit level 0 – page background</Text>
      </Surface>
    </Surface>
  );
}
`;

export const level: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  dimmed: true,
};
