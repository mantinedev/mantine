import { useEffect, useState } from 'react';
import { VIDEO_DURATION } from './data';

export interface PlayerState {
  time: number;
  playing: boolean;
  speed: number;
  captions: boolean;
  setTime: (time: number) => void;
  setPlaying: (playing: boolean) => void;
  setSpeed: (speed: number) => void;
  setCaptions: (captions: boolean) => void;
}

export function usePlayer(): PlayerState {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [captions, setCaptions] = useState(false);

  useEffect(() => {
    if (!playing) {
      return undefined;
    }
    const interval = window.setInterval(() => {
      setTime((current) => {
        const next = Math.min(VIDEO_DURATION, current + 4 * speed);
        if (next >= VIDEO_DURATION) {
          setPlaying(false);
        }
        return next;
      });
    }, 250);
    return () => window.clearInterval(interval);
  }, [playing, speed]);

  return { time, playing, speed, captions, setTime, setPlaying, setSpeed, setCaptions };
}

export function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}
