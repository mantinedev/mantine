import { ColorSwatch, Group, Paper, Stack, Text } from '@mantine/core';
import { useBroadcastChannel } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useBroadcastChannel } from '@mantine/hooks';
import { ColorSwatch, Group, Paper, Stack, Text } from '@mantine/core';

interface Settings {
  color: string;
  updatedAt: number;
}

const swatches = ['#fa5252', '#7950f2', '#4c6ef5', '#12b886', '#fab005'];

// post() accepts any structured-cloneable value, so there is no need to
// JSON.stringify the payload — objects are transferred as-is.
function Panel({ label }: { label: string }) {
  const { data, post } = useBroadcastChannel<Settings>('mantine-settings-channel');

  return (
    <Paper withBorder p="md" flex={1}>
      <Text fw={500} mb="md">{label}</Text>

      <Group mb="md">
        {swatches.map((color) => (
          <ColorSwatch
            key={color}
            color={color}
            style={{ cursor: 'pointer' }}
            onClick={() => post({ color, updatedAt: Date.now() })}
          />
        ))}
      </Group>

      <Stack gap={4}>
        <Text size="sm" c="dimmed">Received settings</Text>
        {data ? (
          <Group gap="xs">
            <ColorSwatch color={data.color} size={20} />
            <Text size="sm">{data.color}</Text>
          </Group>
        ) : (
          <Text size="sm">—</Text>
        )}
      </Stack>
    </Paper>
  );
}

function Demo() {
  return (
    <Group align="stretch" grow>
      <Panel label="Tab A" />
      <Panel label="Tab B" />
    </Group>
  );
}
`;

interface Settings {
  color: string;
  updatedAt: number;
}

const swatches = ['#fa5252', '#7950f2', '#4c6ef5', '#12b886', '#fab005'];

function Panel({ label }: { label: string }) {
  const { data, post } = useBroadcastChannel<Settings>('mantine-settings-channel');

  return (
    <Paper withBorder p="md" flex={1}>
      <Text fw={500} mb="md">
        {label}
      </Text>

      <Group mb="md">
        {swatches.map((color) => (
          <ColorSwatch
            key={color}
            color={color}
            style={{ cursor: 'pointer' }}
            onClick={() => post({ color, updatedAt: Date.now() })}
          />
        ))}
      </Group>

      <Stack gap={4}>
        <Text size="sm" c="dimmed">
          Received settings
        </Text>
        {data ? (
          <Group gap="xs">
            <ColorSwatch color={data.color} size={20} />
            <Text size="sm">{data.color}</Text>
          </Group>
        ) : (
          <Text size="sm">—</Text>
        )}
      </Stack>
    </Paper>
  );
}

function Demo() {
  return (
    <Group align="stretch" grow>
      <Panel label="Tab A" />
      <Panel label="Tab B" />
    </Group>
  );
}

export const structuredData: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
