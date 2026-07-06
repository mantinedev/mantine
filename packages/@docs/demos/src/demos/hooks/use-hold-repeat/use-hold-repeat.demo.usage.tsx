import { useState } from 'react';
import { Button, Stack, Text } from '@mantine/core';
import { useHoldRepeat } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Stack, Text } from '@mantine/core';
import { useHoldRepeat } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);

  const { start, stop } = useHoldRepeat(() => setCount((c) => c + 1), {
    delay: 400,
    interval: (step) => Math.max(40, 300 - step * 20),
  });

  return (
    <Stack align="center">
      <Text fw={500}>Count: {count}</Text>
      <Button onPointerDown={start} onPointerUp={stop} onPointerLeave={stop}>
        Hold to increment
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);

  const { start, stop } = useHoldRepeat(() => setCount((c) => c + 1), {
    delay: 400,
    interval: (step) => Math.max(40, 300 - step * 20),
  });

  return (
    <Stack align="center">
      <Text fw={500}>Count: {count}</Text>
      <Button onPointerDown={start} onPointerUp={stop} onPointerLeave={stop}>
        Hold to increment
      </Button>
    </Stack>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
