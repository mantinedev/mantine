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
      <Timer countdown startMs={90_000} withControls autoStart />
    </div>
  );
}

export function Stopwatch() {
  return (
    <div style={{ padding: 40 }}>
      <Timer withControls format="mm:ss" interval={100} />
    </div>
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
        <Timer.Segment type="minutes" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Segment type="seconds" />
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
      <Timer unstyled countdown startMs={90_000} withControls autoStart />
    </div>
  );
}
