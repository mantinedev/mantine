import { useState } from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';

function Segment({ value, label }: { value: number; label: string }) {
  return (
    <Paper withBorder p="md" radius="md" w={70}>
      <Stack align="center" gap={2}>
        <Text fw={700} fz={28} ff="monospace">
          {value.toString().padStart(2, '0')}
        </Text>
        <Text c="dimmed" size="xs" tt="uppercase">
          {label}
        </Text>
      </Stack>
    </Paper>
  );
}

function Demo() {
  const [targetDate] = useState(() => new Date(Date.now() + 2 * 24 * 3600 * 1000 + 8_130_000));
  const { formatted } = useCountdown({ targetDate });

  return (
    <Group justify="center">
      <Segment value={formatted.days} label="Days" />
      <Segment value={formatted.hours} label="Hours" />
      <Segment value={formatted.minutes} label="Minutes" />
      <Segment value={formatted.seconds} label="Seconds" />
    </Group>
  );
}
`;

function Segment({ value, label }: { value: number; label: string }) {
  return (
    <Paper withBorder p="md" radius="md" w={70}>
      <Stack align="center" gap={2}>
        <Text fw={700} fz={28} ff="monospace">
          {value.toString().padStart(2, '0')}
        </Text>
        <Text c="dimmed" size="xs" tt="uppercase">
          {label}
        </Text>
      </Stack>
    </Paper>
  );
}

function Demo() {
  const [targetDate] = useState(() => new Date(Date.now() + 2 * 24 * 3600 * 1000 + 8_130_000));
  const { formatted } = useCountdown({ targetDate });

  return (
    <Group justify="center">
      <Segment value={formatted.days} label="Days" />
      <Segment value={formatted.hours} label="Hours" />
      <Segment value={formatted.minutes} label="Minutes" />
      <Segment value={formatted.seconds} label="Seconds" />
    </Group>
  );
}

export const targetDate: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
