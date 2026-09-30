import { Badge, Button, Group, Paper, Text } from '@mantine/core';
import { useBroadcastChannel } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useBroadcastChannel } from '@mantine/hooks';
import { Badge, Button, Group, Paper, Text } from '@mantine/core';

const reactions = ['👋', '🎉', '☕', '🚀'];

function Panel({ label }: { label: string }) {
  const { supported, data, post } = useBroadcastChannel<string>('mantine-demo-channel');

  return (
    <Paper withBorder p="md" flex={1}>
      <Group justify="space-between" mb="md">
        <Text fw={500}>{label}</Text>
        <Badge color={supported ? 'teal' : 'red'} variant="light">
          {supported ? 'supported' : 'unsupported'}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">Last received</Text>
      <Text fz={32}>{data ?? '—'}</Text>

      <Group mt="md" gap="xs">
        {reactions.map((reaction) => (
          <Button key={reaction} variant="default" onClick={() => post(reaction)}>
            {reaction}
          </Button>
        ))}
      </Group>
    </Paper>
  );
}

// Both panels create their own channel with the same name, so a message posted
// from one is delivered to the other (but never back to the sender). Open this
// page in a second browser tab to see the reactions sync across tabs as well.
function Demo() {
  return (
    <Group align="stretch" grow>
      <Panel label="Tab A" />
      <Panel label="Tab B" />
    </Group>
  );
}
`;

const reactions = ['👋', '🎉', '☕', '🚀'];

function Panel({ label }: { label: string }) {
  const { supported, data, post } = useBroadcastChannel<string>('mantine-demo-channel');

  return (
    <Paper withBorder p="md" flex={1}>
      <Group justify="space-between" mb="md">
        <Text fw={500}>{label}</Text>
        <Badge color={supported ? 'teal' : 'red'} variant="light">
          {supported ? 'supported' : 'unsupported'}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Last received
      </Text>
      <Text fz={32}>{data ?? '—'}</Text>

      <Group mt="md" gap="xs">
        {reactions.map((reaction) => (
          <Button key={reaction} variant="default" onClick={() => post(reaction)}>
            {reaction}
          </Button>
        ))}
      </Group>
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

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
