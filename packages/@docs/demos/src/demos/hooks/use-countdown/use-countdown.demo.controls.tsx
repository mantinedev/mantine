import { Button, Group, Stack, Text } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Stack, Text } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';

function Demo() {
  const { count, running, start, stop, reset } = useCountdown({
    countStart: 10_000,
    interval: 1000,
  });

  return (
    <Stack align="center">
      <Text fz={32} fw={700} ff="monospace">
        {Math.ceil(count / 1000)}s
      </Text>
      <Group>
        <Button onClick={start} disabled={running}>
          Start
        </Button>
        <Button onClick={stop} disabled={!running} variant="default">
          Stop
        </Button>
        <Button onClick={reset} variant="default">
          Reset
        </Button>
      </Group>
      <Text size="sm" c="dimmed">
        Running: {running ? 'yes' : 'no'}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const { count, running, start, stop, reset } = useCountdown({
    countStart: 10_000,
    interval: 1000,
  });

  return (
    <Stack align="center">
      <Text fz={32} fw={700} ff="monospace">
        {Math.ceil(count / 1000)}s
      </Text>
      <Group>
        <Button onClick={start} disabled={running}>
          Start
        </Button>
        <Button onClick={stop} disabled={!running} variant="default">
          Stop
        </Button>
        <Button onClick={reset} variant="default">
          Reset
        </Button>
      </Group>
      <Text size="sm" c="dimmed">
        Running: {running ? 'yes' : 'no'}
      </Text>
    </Stack>
  );
}

export const controls: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
