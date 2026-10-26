import { type Track, trackColor } from './data';
import classes from './Program.module.css';

interface TrackTagProps {
  track: Track;
  suffix?: string;
}

export function TrackTag({ track, suffix }: TrackTagProps) {
  return (
    <span className={classes.trackTag}>
      <i style={{ background: trackColor[track] }} />
      {track}
      {suffix}
    </span>
  );
}
