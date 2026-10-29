import { Avatar, Button, ColorSwatch, Group, Stack, Text } from '@mantine/core';
import { formatDay, formatTimeRange, getStageLabel, Talk, TRACKS } from '../data';
import { useAgenda } from '../use-agenda';
import classes from './TalkDetails.module.css';

interface TalkDetailsProps {
  talk: Talk;
}

export function TalkDetails({ talk }: TalkDetailsProps) {
  const agenda = useAgenda();
  const inAgenda = agenda.has(talk.id);
  const track = TRACKS[talk.track];

  const facts = [
    { label: 'Time', value: `${formatDay(talk.start)}, ${formatTimeRange(talk)}` },
    { label: 'Stage', value: getStageLabel(talk.stageId) },
    {
      label: 'Track',
      value: (
        <Group gap={6} wrap="nowrap">
          <ColorSwatch
            color={`var(--mantine-color-${track.color}-filled)`}
            size={10}
            withShadow={false}
          />
          {track.label}
        </Group>
      ),
    },
    { label: 'Level', value: talk.level },
  ];

  return (
    <Stack gap="lg">
      <dl className={classes.facts}>
        {facts.map((fact) => (
          <div key={fact.label}>
            <Text component="dt" size="xs" className={classes.label}>
              {fact.label}
            </Text>
            <Text component="dd" size="sm" className={classes.value}>
              {fact.value}
            </Text>
          </div>
        ))}
      </dl>

      <Text size="sm">{talk.abstract}</Text>

      <Stack gap="sm">
        <Text size="xs" className={classes.label}>
          {talk.speakers.length === 1 ? 'Speaker' : 'Speakers'}
        </Text>
        {talk.speakers.map((speaker) => (
          <Group key={speaker.name} gap="sm" wrap="nowrap">
            <Avatar variant="default" radius="xl">
              {speaker.initials}
            </Avatar>
            <div>
              <Text size="sm">{speaker.name}</Text>
              <Text size="xs">{speaker.company}</Text>
            </div>
          </Group>
        ))}
      </Stack>

      <Group justify="flex-end">
        {inAgenda ? (
          <Button variant="default" onClick={() => agenda.remove(talk.id)}>
            Remove from my agenda
          </Button>
        ) : (
          <Button onClick={() => agenda.add(talk.id)}>Add to my agenda</Button>
        )}
      </Group>
    </Stack>
  );
}
