import { useState } from 'react';
import { Button, Text, Title, UnstyledButton } from '@mantine/core';
import { type Speaker, speakers, type Track, trackColor, tracks } from './data';
import { SpeakerArt } from './SpeakerArt';
import { TrackTag } from './TrackTag';
import fieldwork from './Fieldwork.module.css';
import classes from './Program.module.css';

interface SpeakersProps {
  onOpen: (speaker: Speaker) => void;
}

export function Speakers({ onOpen }: SpeakersProps) {
  const [track, setTrack] = useState<Track | 'all'>('all');
  const visible = speakers.filter((speaker) => track === 'all' || speaker.track === track);

  return (
    <section
      className={`${fieldwork.block} ${fieldwork.wrap}`}
      id="speakers"
      aria-labelledby="fw-speakers-title"
    >
      <div className={fieldwork.sectionHead}>
        <div>
          <Title order={2} id="fw-speakers-title" className={fieldwork.sectionTitle}>
            Speakers
          </Title>
          <Text className={fieldwork.sectionLead}>
            Twenty-four talks across three tracks. Here are the first eight; the rest are announced
            on 1 February.
          </Text>
        </div>
        <div className={classes.chips} role="group" aria-label="Filter by track">
          <Button
            size="xs"
            variant="default"
            aria-pressed={track === 'all'}
            onClick={() => setTrack('all')}
          >
            All tracks
          </Button>
          {tracks.map((item) => (
            <Button
              key={item}
              size="xs"
              variant="default"
              aria-pressed={track === item}
              onClick={() => setTrack(item)}
              leftSection={
                <i className={classes.chipSwatch} style={{ background: trackColor[item] }} />
              }
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className={classes.speakers}>
        {visible.map((speaker) => (
          <UnstyledButton
            key={speaker.id}
            className={classes.speaker}
            onClick={() => onOpen(speaker)}
          >
            <SpeakerArt speaker={speaker} />
            <span>
              <span className={classes.speakerName}>{speaker.name}</span>
              <span className={classes.speakerRole}>{speaker.role}</span>
            </span>
            <TrackTag track={speaker.track} />
            <span className={classes.speakerTalk}>{speaker.talk}</span>
          </UnstyledButton>
        ))}
      </div>
    </section>
  );
}
