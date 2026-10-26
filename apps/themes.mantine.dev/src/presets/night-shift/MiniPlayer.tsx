import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import { ActionIcon, Progress } from '@mantine/core';
import { CoverArt } from './CoverArt';
import { DURATION, formatTime } from './data';
import classes from './NightShift.module.css';

interface MiniPlayerProps {
  time: number;
  playing: boolean;
  onTogglePlay: () => void;
}

export function MiniPlayer({ time, playing, onTogglePlay }: MiniPlayerProps) {
  return (
    <div className={classes.mini} role="region" aria-label="Mini player">
      <span className={classes.miniThumb}>
        <CoverArt />
      </span>
      <ActionIcon
        variant="filled"
        radius="50%"
        size={44}
        onClick={onTogglePlay}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? <IconPlayerPauseFilled size={18} /> : <IconPlayerPlayFilled size={18} />}
      </ActionIcon>
      <div className={classes.miniInfo}>
        <b>48. The bakers of Leith</b>
        <Progress
          value={(time / DURATION) * 100}
          size={4}
          transitionDuration={0}
          aria-label="Episode progress"
        />
      </div>
      <span className={classes.miniTime}>
        {formatTime(time)} / {formatTime(DURATION)}
      </span>
    </div>
  );
}
