import { type Speaker, trackColor } from './data';
import classes from './Program.module.css';

interface SpeakerArtProps {
  speaker: Speaker;
  className?: string;
}

export function SpeakerArt({ speaker, className }: SpeakerArtProps) {
  return (
    <span className={`${classes.art} ${className ?? ''}`}>
      <span
        className={classes.shape}
        data-shape={speaker.shape}
        style={{ background: trackColor[speaker.track] }}
      />
      <span className={classes.initials} data-on-dark={speaker.track !== 'Design' || undefined}>
        {speaker.initials}
      </span>
    </span>
  );
}
