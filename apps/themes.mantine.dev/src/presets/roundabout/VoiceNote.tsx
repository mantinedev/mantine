'use client';

import { useEffect, useState } from 'react';
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { Bubble } from './Message';
import classes from './Chat.module.css';

const BARS = Array.from(
  { length: 38 },
  (_, index) => 6 + Math.round(Math.abs(Math.sin(index * 1.7) * 14 + Math.sin(index * 0.6) * 6))
);
const LENGTH = 42;

export function VoiceNote() {
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);

  const active = playing && elapsed < LENGTH;

  useEffect(() => {
    if (!active) {
      return undefined;
    }
    const timer = window.setInterval(
      () => setElapsed((current) => Math.min(current + 1, LENGTH)),
      250
    );
    return () => window.clearInterval(timer);
  }, [active]);

  const toggle = () => {
    if (active) {
      setPlaying(false);
      return;
    }
    if (elapsed >= LENGTH) {
      setElapsed(0);
    }
    setPlaying(true);
  };

  const done = Math.round((elapsed / LENGTH) * BARS.length);
  const seconds = active ? LENGTH - elapsed : LENGTH;

  return (
    <Bubble className={classes.voice}>
      <ActionIcon
        variant="filled"
        radius="xl"
        size={34}
        aria-label={active ? 'Pause voice note' : 'Play voice note'}
        onClick={toggle}
      >
        {active ? <IconPlayerPauseFilled size={16} /> : <IconPlayerPlayFilled size={16} />}
      </ActionIcon>
      <span className={classes.wave} aria-hidden="true">
        {BARS.map((height, index) => (
          <i key={index} style={{ height }} data-done={index < done || undefined} />
        ))}
      </span>
      <time className={classes.voiceTime}>0:{String(seconds).padStart(2, '0')}</time>
    </Bubble>
  );
}
