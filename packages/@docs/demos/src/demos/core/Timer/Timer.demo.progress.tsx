import { Progress, Stack, Timer, useTimer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Progress, Stack, Timer, useTimer } from '@mantine/core';

function Demo() {
  const timer = useTimer({ countdown: true, startMs: 30 * 1000, autoStart: true, interval: 50 });

  return (
    <Stack>
      <Timer controller={timer} format="ss:SSS" fz={32} fw={700} style={{ alignSelf: 'center' }} />
      <Progress value={timer.progress * 100} transitionDuration={50} />
    </Stack>
  );
}
`;

function Demo() {
  const timer = useTimer({ countdown: true, startMs: 30 * 1000, autoStart: true, interval: 50 });

  return (
    <Stack>
      <Timer controller={timer} format="ss:SSS" fz={32} fw={700} style={{ alignSelf: 'center' }} />
      <Progress value={timer.progress * 100} transitionDuration={50} />
    </Stack>
  );
}

export const progress: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
