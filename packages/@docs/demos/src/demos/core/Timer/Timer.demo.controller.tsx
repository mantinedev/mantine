import { Button, Group, Stack, Text, Timer, useTimer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Stack, Text, Timer, useTimer } from '@mantine/core';

function Demo() {
  const controller = useTimer({ countdown: true, startMs: 60 * 1000, interval: 100 });

  return (
    <Stack align="center">
      <Timer controller={controller} format="mm:ss:SS" fz={40} fw={700} />

      <Text c="dimmed" size="sm">
        running: {String(controller.isRunning())}, paused: {String(controller.isPaused())}
      </Text>

      <Group>
        <Button onClick={controller.start} disabled={controller.isRunning()}>Start</Button>
        <Button onClick={controller.pause} disabled={!controller.isRunning()} variant="default">Pause</Button>
        <Button onClick={controller.resume} disabled={controller.isRunning()} variant="default">Resume</Button>
        <Button onClick={controller.reset} variant="default">Reset</Button>
        <Button onClick={controller.restart} variant="default">Restart</Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const controller = useTimer({ countdown: true, startMs: 60 * 1000, interval: 100 });

  return (
    <Stack align="center">
      <Timer controller={controller} format="mm:ss:SS" fz={40} fw={700} />

      <Text c="dimmed" size="sm">
        running: {String(controller.isRunning())}, paused: {String(controller.isPaused())}
      </Text>

      <Group>
        <Button onClick={controller.start} disabled={controller.isRunning()}>
          Start
        </Button>
        <Button onClick={controller.pause} disabled={!controller.isRunning()} variant="default">
          Pause
        </Button>
        <Button onClick={controller.resume} disabled={controller.isRunning()} variant="default">
          Resume
        </Button>
        <Button onClick={controller.reset} variant="default">
          Reset
        </Button>
        <Button onClick={controller.restart} variant="default">
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
