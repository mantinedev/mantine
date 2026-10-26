'use client';

import { useEffect, useRef } from 'react';
import { Paper, ScrollArea, Switch, Title } from '@mantine/core';
import { findIndexAt, formatTime, transcript } from './data';
import classes from './NightShift.module.css';

interface TranscriptProps {
  time: number;
  follow: boolean;
  onFollowChange: (follow: boolean) => void;
  onSeek: (time: number) => void;
}

export function Transcript({ time, follow, onFollowChange, onSeek }: TranscriptProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const current = findIndexAt(transcript, time);

  useEffect(() => {
    const viewport = viewportRef.current;
    const paragraph = viewport?.querySelector<HTMLElement>(`[data-index="${current}"]`);
    if (!follow || !viewport || !paragraph) {
      return;
    }
    const offset =
      paragraph.getBoundingClientRect().top -
      viewport.getBoundingClientRect().top +
      viewport.scrollTop;
    viewport.scrollTo({
      top: offset - 8,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, [current, follow]);

  return (
    <section aria-labelledby="ns-transcript">
      <div className={classes.transcriptHead}>
        <Title order={2} id="ns-transcript" className={classes.sectionTitle}>
          Transcript
        </Title>
        <Switch
          label="Follow along"
          checked={follow}
          onChange={(event) => onFollowChange(event.currentTarget.checked)}
        />
      </div>

      <Paper className={classes.transcript}>
        <ScrollArea.Autosize mah={440} viewportRef={viewportRef}>
          <div className={classes.transcriptInner}>
            {transcript.map((paragraph, index) => (
              <div
                key={paragraph.start}
                className={classes.para}
                data-index={index}
                role="button"
                tabIndex={0}
                aria-current={index === current}
                onClick={() => onSeek(paragraph.start)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSeek(paragraph.start);
                  }
                }}
              >
                <span className={classes.paraTime}>{formatTime(paragraph.start)}</span>
                <span className={classes.speaker}>{paragraph.speaker}</span>
                <p>{paragraph.text}</p>
              </div>
            ))}
          </div>
        </ScrollArea.Autosize>
      </Paper>
    </section>
  );
}
