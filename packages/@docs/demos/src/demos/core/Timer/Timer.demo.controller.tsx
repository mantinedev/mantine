import { Button, Group, Stack, Text, Timer, useTimer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Stack, Text, Timer, useTimer } from '@mantine/core';

function Demo() {
  const timer = useTimer({ countdown: true, startMs: 60 * 1000, interval: 100 });

  return (
    <Stack align="center">
      <Timer controller={timer} format="mm:ss:SS" fz={40} fw={700} />

      <Text c="dimmed" size="sm">
        running: {String(timer.running)}, paused: {String(timer.paused)}
      </Text>

      <Group>
        <Button onClick={timer.start} disabled={timer.running}>Start</Button>
        <Button onClick={timer.pause} disabled={!timer.running} variant="default">Pause</Button>
        <Button onClick={timer.resume} disabled={timer.running} variant="default">Resume</Button>
        <Button onClick={timer.reset} variant="default">Reset</Button>
        <Button onClick={timer.restart} variant="default">Restart</Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const timer = useTimer({ countdown: true, startMs: 60 * 1000, interval: 100 });

  return (
    <Stack align="center">
      <Timer controller={timer} format="mm:ss:SS" fz={40} fw={700} />

      <Text c="dimmed" size="sm">
        running: {String(timer.running)}, paused: {String(timer.paused)}
      </Text>

      <Group>
        <Button onClick={timer.start} disabled={timer.running}>
          Start
        </Button>
        <Button onClick={timer.pause} disabled={!timer.running} variant="default">
          Pause
        </Button>
        <Button onClick={timer.resume} disabled={timer.running} variant="default">
          Resume
        </Button>
        <Button onClick={timer.reset} variant="default">
          Reset
        </Button>
        <Button onClick={timer.restart} variant="default">
          Restart
        </Button>
      </Group>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
