import dayjs from 'dayjs';
import { IconAlertTriangle, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, Stack, Text, UnstyledButton } from '@mantine/core';
import { formatDay, formatTimeRange, getStageLabel, Talk, talksOverlap } from '../data';
import { useAgenda } from '../use-agenda';
import classes from './MyAgenda.module.css';

interface MyAgendaProps {
  talks: Talk[];
  days: string[];
  onTalkClick: (talk: Talk) => void;
}

export function MyAgenda({ talks, days, onTalkClick }: MyAgendaProps) {
  const agenda = useAgenda();
  const selected = talks
    .filter((talk) => agenda.has(talk.id))
    .sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf());

  const groups = days
    .map((date) => ({
      date,
      talks: selected.filter((talk) => dayjs(talk.start).isSame(date, 'day')),
    }))
    .filter((group) => group.talks.length > 0);

  return (
    <section aria-labelledby="my-agenda-title">
      <Text id="my-agenda-title" size="sm" className={classes.title} mb="xs">
        My agenda
      </Text>

      {groups.length === 0 && <Text size="sm">Open a talk and add it to build your agenda.</Text>}

      <Stack gap="md">
        {groups.map((group) => (
          <section key={group.date} aria-label={formatDay(group.date)}>
            <Text size="xs" className={classes.day} mb={6}>
              {formatDay(group.date)}
            </Text>
            <Stack gap="xs" component="ul" className={classes.list}>
              {group.talks.map((talk) => {
                const conflicts = group.talks.filter((other) => talksOverlap(talk, other));
                return (
                  <li key={talk.id}>
                    <Group gap="xs" wrap="nowrap" align="flex-start">
                      <UnstyledButton className={classes.talk} onClick={() => onTalkClick(talk)}>
                        <Text size="sm" className={classes.talkTitle}>
                          {talk.title}
                        </Text>
                        <Text size="xs">
                          {formatTimeRange(talk)} · {getStageLabel(talk.stageId)}
                        </Text>
                      </UnstyledButton>
                      <ActionIcon
                        variant="default"
                        aria-label={`Remove ${talk.title} from my agenda`}
                        onClick={() => agenda.remove(talk.id)}
                      >
                        <IconTrash size={16} color="var(--mantine-color-red-text)" />
                      </ActionIcon>
                    </Group>
                    {conflicts.length > 0 && (
                      <Group
                        gap={6}
                        wrap="nowrap"
                        align="flex-start"
                        mt={4}
                        className={classes.conflict}
                      >
                        <IconAlertTriangle size={14} className={classes.conflictIcon} />
                        <Text size="xs">
                          Overlaps with {conflicts.map((other) => other.title).join(', ')}
                        </Text>
                      </Group>
                    )}
                  </li>
                );
              })}
            </Stack>
          </section>
        ))}
      </Stack>
    </section>
  );
}
