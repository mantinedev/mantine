import { Button, Stack, Text } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Stack, Text } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';

function Demo() {
  const { formatted, reset, start } = useCountdown({
    countStart: 5000,
    interval: 30,
    autoStart: true,
  });

  const restart = () => {
    reset();
    start();
  };

  return (
    <Stack align="center">
      <Text fz={32} fw={700} style={{ fontVariantNumeric: 'tabular-nums' }}>
        {formatted.seconds}.{formatted.milliseconds.toString().padStart(3, '0')}
      </Text>
      <Button onClick={restart}>Restart</Button>
    </Stack>
  );
}
`;

function Demo() {
  const { formatted, reset, start } = useCountdown({
    countStart: 5000,
    interval: 30,
    autoStart: true,
  });

  const restart = () => {
    reset();
    start();
  };

  return (
    <Stack align="center">
      <Text fz={32} fw={700} style={{ fontVariantNumeric: 'tabular-nums' }}>
        {formatted.seconds}.{formatted.milliseconds.toString().padStart(3, '0')}
      </Text>
      <Button onClick={restart}>Restart</Button>
    </Stack>
  );
}

export const subSecond: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
