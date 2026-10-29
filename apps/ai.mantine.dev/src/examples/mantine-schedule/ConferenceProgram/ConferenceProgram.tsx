import '@mantine/dates/styles.css';
import '@mantine/schedule/styles.css';

import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Checkbox,
  Group,
  Stack,
  Surface,
  Text,
  UnstyledButton,
  useModal,
} from '@mantine/core';
import {
  ResourcesDayView,
  ResourcesDayViewProps,
  ScheduleEventData,
  ScheduleHeader,
} from '@mantine/schedule';
import {
  createBreaks,
  createTalks,
  formatDay,
  formatTimeRange,
  getProgramDays,
  PROGRAM_END,
  PROGRAM_START,
  STAGES,
  Talk,
  TRACK_IDS,
  TrackId,
  TRACKS,
} from './data';
import { MyAgenda } from './MyAgenda/MyAgenda';
import { TalkDetails } from './TalkDetails/TalkDetails';
import classes from './ConferenceProgram.module.css';

function toEvent(talk: Talk): ScheduleEventData<Talk> {
  return {
    id: talk.id,
    title: talk.title,
    start: talk.start,
    end: talk.end,
    color: TRACKS[talk.track].color,
    resourceId: talk.stageId,
    payload: talk,
  };
}

function TalkEventBody({ talk }: { talk: Talk }) {
  return (
    <div className={classes.talkBody}>
      <Text size="xs" lineClamp={2} className={classes.talkTitle}>
        {talk.title}
      </Text>
      <Group gap={6} wrap="nowrap">
        <Avatar.Group spacing={6}>
          {talk.speakers.map((speaker) => (
            <Avatar
              key={speaker.name}
              size={22}
              radius="xl"
              variant="default"
              className={classes.avatar}
            >
              {speaker.initials}
            </Avatar>
          ))}
        </Avatar.Group>
        <Text size="xs" truncate>
          {TRACKS[talk.track].label}
        </Text>
      </Group>
    </div>
  );
}

export function ConferenceProgram() {
  const days = useMemo(() => getProgramDays(dayjs()), []);
  const talks = useMemo(() => createTalks(days), [days]);
  const events = useMemo<ScheduleEventData[]>(
    () => [...talks.map(toEvent), ...createBreaks(days)],
    [talks, days]
  );
  const [date, setDate] = useState(days[0]);
  const [highlightedTracks, setHighlightedTracks] = useState<string[]>(TRACK_IDS);
  const modal = useModal();

  const openTalk = (talk: Talk) =>
    modal.open({ title: talk.title, children: <TalkDetails talk={talk} /> });

  const renderEventBody: ResourcesDayViewProps['renderEventBody'] = (event) =>
    event.payload ? <TalkEventBody talk={event.payload as Talk} /> : event.title;

  const renderEvent: ResourcesDayViewProps['renderEvent'] = (event, props) => {
    const talk = event.payload as Talk | undefined;

    if (!talk) {
      return <Box {...(props as React.ComponentPropsWithoutRef<typeof Box>)} />;
    }

    const dimmed = !highlightedTracks.includes(talk.track);

    return (
      <UnstyledButton
        {...props}
        className={`${props.className} ${classes.talk}`}
        aria-label={`${talk.title}, ${formatTimeRange(talk)}, ${TRACKS[talk.track].label} track`}
        data-dimmed={dimmed || undefined}
      />
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.program}>
        <ScheduleHeader>
          {days.map((day, index) => (
            <ScheduleHeader.Control
              key={day}
              active={day === date}
              aria-pressed={day === date}
              onClick={() => setDate(day)}
            >
              Day {index + 1} · {formatDay(day)}
            </ScheduleHeader.Control>
          ))}
        </ScheduleHeader>

        <ResourcesDayView
          date={date}
          onDateChange={setDate}
          withHeader={false}
          resources={STAGES}
          events={events}
          startTime={PROGRAM_START}
          endTime={PROGRAM_END}
          intervalMinutes={30}
          slotWidth={128}
          rowHeight={96}
          withCurrentTimeIndicator={false}
          renderEventBody={renderEventBody}
          renderEvent={renderEvent}
          onEventClick={(event) => event.payload && openTalk(event.payload as Talk)}
          styles={{ resourcesDayViewBackgroundEvent: { borderRadius: 0 } }}
        />
      </div>

      <Surface withBorder p="md" component="aside" className={classes.panel}>
        <Stack gap="lg">
          <Checkbox.Group
            label="Tracks"
            description="Talks of unchecked tracks are dimmed"
            value={highlightedTracks}
            onChange={setHighlightedTracks}
          >
            <Stack gap="xs" mt="xs">
              {TRACK_IDS.map((trackId: TrackId) => (
                <Checkbox
                  key={trackId}
                  value={trackId}
                  label={TRACKS[trackId].label}
                  color={TRACKS[trackId].color}
                />
              ))}
            </Stack>
          </Checkbox.Group>

          <MyAgenda talks={talks} days={days} onTalkClick={openTalk} />
        </Stack>
      </Surface>
    </div>
  );
}
