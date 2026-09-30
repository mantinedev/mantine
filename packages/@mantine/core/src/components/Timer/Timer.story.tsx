import { useState } from 'react';
import { Button } from '../Button';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Timer } from './Timer';
import { useTimer } from './use-timer';

export default { title: 'Timer' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Timer countdown startMs={90_000} autoStart />
    </div>
  );
}

export function Stopwatch() {
  const timer = useTimer({ interval: 10 });

  return (
    <Stack p={40} align="flex-start">
      <Timer controller={timer} format="mm:ss:SS" />
      <Group>
        <Button onClick={timer.running ? timer.pause : timer.paused ? timer.resume : timer.start}>
          {timer.running ? 'Pause' : timer.paused ? 'Resume' : 'Start'}
        </Button>
        <Button variant="default" onClick={timer.reset}>
          Reset
        </Button>
      </Group>
    </Stack>
  );
}

export function Target() {
  const [done, setDone] = useState(false);
  const [ticks, setTicks] = useState(0);
  const timer = useTimer({
    targetMs: 5000,
    autoStart: true,
    onTick: () => setTicks((count) => count + 1),
    onComplete: () => setDone(true),
  });

  const replay = () => {
    setDone(false);
    setTicks(0);
    timer.restart();
  };

  return (
    <Stack p={40} align="flex-start">
      <Timer controller={timer} />
      <Text>{done ? 'Done' : 'Running…'}</Text>
      <Text>ticks: {ticks}</Text>
      <Button onClick={replay}>Restart</Button>
    </Stack>
  );
}

export function Formats() {
  return (
    <Stack p={40}>
      <Timer countdown startMs={3 * 3_600_000 + 25 * 60_000 + 12_000} format="HH:mm:ss" autoStart />
      <Timer countdown startMs={90_000} format="mm:ss" autoStart />
      <Timer countdown startMs={2 * 86_400_000 + 5 * 3_600_000} format="DD:HH:mm:ss" autoStart />
    </Stack>
  );
}

export function CustomLayout() {
  return (
    <div style={{ padding: 40 }}>
      <Timer countdown startMs={125_000} autoStart style={{ fontSize: 32 }}>
        <Group gap={4}>
          <Timer.Segment type="minutes" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Segment type="seconds" />
        </Group>
        <Group ml="md">
          <Timer.Control action="pause">
            <Button component="span" size="xs">
              Pause
            </Button>
          </Timer.Control>
          <Timer.Control action="restart">
            <Button component="span" size="xs" variant="default">
              Restart
            </Button>
          </Timer.Control>
        </Group>
      </Timer>
    </div>
  );
}

export function ExternalController() {
  const controller = useTimer({ countdown: true, startMs: 60_000, interval: 100 });

  return (
    <Stack p={40}>
      <Timer controller={controller} format="mm:ss:SSS" />
      <Text>progress: {controller.progress.toFixed(2)}</Text>
      <Text>
        running: {String(controller.running)}, paused: {String(controller.paused)}
      </Text>
      <Group>
        <Button onClick={controller.start}>Start</Button>
        <Button onClick={controller.pause}>Pause</Button>
        <Button onClick={controller.resume}>Resume</Button>
        <Button onClick={controller.reset}>Reset</Button>
        <Button onClick={controller.restart}>Restart</Button>
      </Group>
    </Stack>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Timer unstyled countdown startMs={90_000} autoStart />
    </div>
  );
}
