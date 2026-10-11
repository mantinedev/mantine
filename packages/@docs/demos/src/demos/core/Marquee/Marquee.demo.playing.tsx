import { useState } from 'react';
import { Button, Marquee, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MantineLogo } from '@mantinex/mantine-logo';

const code = `
import { useState } from 'react';
import { Button, Marquee, Stack } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  const [playing, setPlaying] = useState(true);

  return (
    <Stack align="center">
      <Marquee playing={playing}>
        <MantineLogo width={80} type="full" color="blue" />
        <MantineLogo width={80} type="full" color="cyan" />
        <MantineLogo width={80} type="full" color="teal" />
        <MantineLogo width={80} type="full" color="green" />
        <MantineLogo width={80} type="full" color="lime" />
        <MantineLogo width={80} type="full" color="yellow" />
        <MantineLogo width={80} type="full" color="orange" />
        <MantineLogo width={80} type="full" color="red" />
      </Marquee>

      <Button variant="default" onClick={() => setPlaying((p) => !p)}>
        {playing ? 'Pause' : 'Play'}
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [playing, setPlaying] = useState(true);

  return (
    <Stack align="center">
      <Marquee playing={playing}>
        <MantineLogo width={80} type="full" color="blue" />
        <MantineLogo width={80} type="full" color="cyan" />
        <MantineLogo width={80} type="full" color="teal" />
        <MantineLogo width={80} type="full" color="green" />
        <MantineLogo width={80} type="full" color="lime" />
        <MantineLogo width={80} type="full" color="yellow" />
        <MantineLogo width={80} type="full" color="orange" />
        <MantineLogo width={80} type="full" color="red" />
      </Marquee>

      <Button variant="default" onClick={() => setPlaying((p) => !p)}>
        {playing ? 'Pause' : 'Play'}
      </Button>
    </Stack>
  );
}

export const playing: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: '100%',
};
