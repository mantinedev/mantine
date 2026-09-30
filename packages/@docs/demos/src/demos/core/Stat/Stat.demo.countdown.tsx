import { useState } from 'react';
import { Group, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, Stat } from '@mantine/core';

function Demo() {
  const [targets] = useState(() => ({
    sale: Date.now() + 1000 * 60 * 60 * 3,
    launch: Date.now() + 1000 * 60 * 60 * 26,
    round: Date.now() + 1000 * 60,
  }));

  return (
    <Group gap={50}>
      <Stat.Countdown label="Sale ends in" value={targets.sale} />
      <Stat.Countdown label="Launch in" value={targets.launch} format="D[d] HH:mm:ss" />
      <Stat.Countdown label="Round ends" value={targets.round} format="mm:ss.SSS" />
    </Group>
  );
}
`;

function Demo() {
  const [targets] = useState(() => ({
    sale: Date.now() + 1000 * 60 * 60 * 3,
    launch: Date.now() + 1000 * 60 * 60 * 26,
    round: Date.now() + 1000 * 60,
  }));

  return (
    <Group gap={50}>
      <Stat.Countdown label="Sale ends in" value={targets.sale} />
      <Stat.Countdown label="Launch in" value={targets.launch} format="D[d] HH:mm:ss" />
      <Stat.Countdown label="Round ends" value={targets.round} format="mm:ss.SSS" />
    </Group>
  );
}

export const countdown: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
