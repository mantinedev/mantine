import { Title, UnstyledButton } from '@mantine/core';
import { chapters, DURATION, findIndexAt, formatTime } from './data';
import classes from './NightShift.module.css';

interface ChaptersProps {
  time: number;
  playing: boolean;
  onSelect: (start: number) => void;
}

export function Chapters({ time, playing, onSelect }: ChaptersProps) {
  const current = findIndexAt(chapters, time);

  return (
    <section aria-labelledby="ns-chapters">
      <Title order={2} id="ns-chapters" className={classes.sectionTitle}>
        Chapters
      </Title>
      <ol className={classes.chapters} data-playing={playing || undefined}>
        {chapters.map((chapter, index) => {
          const end = index + 1 < chapters.length ? chapters[index + 1].start : DURATION;
          return (
            <li key={chapter.start}>
              <UnstyledButton
                className={classes.chapter}
                aria-current={index === current}
                onClick={() => onSelect(chapter.start)}
              >
                <span className={classes.chapterTime}>{formatTime(chapter.start)}</span>
                <span className={classes.chapterTitle}>{chapter.title}</span>
                <span className={classes.chapterLength}>
                  <span className={classes.eq} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>{' '}
                  {Math.round((end - chapter.start) / 60)} min
                </span>
              </UnstyledButton>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
