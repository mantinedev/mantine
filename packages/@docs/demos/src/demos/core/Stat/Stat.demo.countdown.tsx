import { Group, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Stat } from '@mantine/core';

function Demo() {
  return (
    <Group gap={50}>
      <Stat.Countdown label="Sale ends in" value={Date.now() + 1000 * 60 * 60 * 3} />
      <Stat.Countdown
        label="Launch in"
        value={Date.now() + 1000 * 60 * 60 * 26}
        format="D[d] HH:mm:ss"
      />
      <Stat.Countdown
        label="Round ends"
        value={Date.now() + 1000 * 60}
        format="mm:ss.SSS"
      />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={50}>
      <Stat.Countdown label="Sale ends in" value={Date.now() + 1000 * 60 * 60 * 3} />
      <Stat.Countdown
        label="Launch in"
        value={Date.now() + 1000 * 60 * 60 * 26}
        format="D[d] HH:mm:ss"
      />
      <Stat.Countdown label="Round ends" value={Date.now() + 1000 * 60} format="mm:ss.SSS" />
    </Group>
  );
}

export const countdown: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
