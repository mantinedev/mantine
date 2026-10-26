'use client';

import { useRef } from 'react';
import { chapters, DURATION, formatTime, waveBars } from './data';
import classes from './Player.module.css';

const KEY_STEPS: Record<string, number> = {
  ArrowLeft: -15,
  ArrowRight: 30,
  Home: -DURATION,
  End: DURATION,
};

interface WaveformProps {
  time: number;
  onSeek: (time: number) => void;
}

export function Waveform({ time, onSeek }: WaveformProps) {
  const dragging = useRef(false);
  const fraction = time / DURATION;
  const played = Math.floor(fraction * waveBars.length);

  const seekFromPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    onSeek(((event.clientX - rect.left) / rect.width) * DURATION);
  };

  return (
    <div
      className={classes.wave}
      role="slider"
      tabIndex={0}
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={DURATION}
      aria-valuenow={Math.round(time)}
      aria-valuetext={`${formatTime(time)} of ${formatTime(DURATION)}`}
      onPointerDown={(event) => {
        dragging.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        seekFromPointer(event);
      }}
      onPointerMove={(event) => dragging.current && seekFromPointer(event)}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onKeyDown={(event) => {
        const step = KEY_STEPS[event.key];
        if (step !== undefined) {
          event.preventDefault();
          onSeek(time + step);
        }
      }}
    >
      {waveBars.map((height, index) => (
        <i
          key={index}
          className={classes.bar}
          style={{ height: `${height}%` }}
          data-played={index < played || undefined}
        />
      ))}
      <span className={classes.head} style={{ left: `calc(${fraction * 100}% - 1px)` }} />
      <span className={classes.ticks}>
        {chapters.slice(1).map((chapter) => (
          <b key={chapter.start} style={{ left: `${(chapter.start / DURATION) * 100}%` }} />
        ))}
      </span>
    </div>
  );
}
