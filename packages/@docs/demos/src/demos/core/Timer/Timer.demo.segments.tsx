import { ActionIcon, Group, Timer } from '@mantine/core';
import { ArrowCounterClockwiseIcon, PauseIcon, PlayIcon } from '@phosphor-icons/react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, Group, Timer } from '@mantine/core';
import { ArrowCounterClockwiseIcon, PauseIcon, PlayIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timer countdown startMs={5 * 60 * 1000} autoStart>
      <Group gap={4} fz={36} fw={700}>
        <Timer.Segment type="minutes" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Segment type="seconds" />
      </Group>

      <Group gap="xs">
        <Timer.Control action="start" aria-label="Start">
          <ActionIcon component="span" variant="light">
            <PlayIcon size={18} weight="fill" />
          </ActionIcon>
        </Timer.Control>
        <Timer.Control action="pause" aria-label="Pause">
          <ActionIcon component="span" variant="light">
            <PauseIcon size={18} weight="fill" />
          </ActionIcon>
        </Timer.Control>
        <Timer.Control action="restart" aria-label="Restart">
          <ActionIcon component="span" variant="light">
            <ArrowCounterClockwiseIcon size={18} />
          </ActionIcon>
        </Timer.Control>
      </Group>
    </Timer>
  );
}
`;

function Demo() {
  return (
    <Timer countdown startMs={5 * 60 * 1000} autoStart>
      <Group gap={4} fz={36} fw={700}>
        <Timer.Segment type="minutes" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Segment type="seconds" />
      </Group>

      <Group gap="xs">
        <Timer.Control action="start" aria-label="Start">
          <ActionIcon component="span" variant="light">
            <PlayIcon size={18} weight="fill" />
          </ActionIcon>
        </Timer.Control>
        <Timer.Control action="pause" aria-label="Pause">
          <ActionIcon component="span" variant="light">
            <PauseIcon size={18} weight="fill" />
          </ActionIcon>
        </Timer.Control>
        <Timer.Control action="restart" aria-label="Restart">
          <ActionIcon component="span" variant="light">
            <ArrowCounterClockwiseIcon size={18} />
          </ActionIcon>
        </Timer.Control>
      </Group>
    </Timer>
  );
}

export const segments: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
