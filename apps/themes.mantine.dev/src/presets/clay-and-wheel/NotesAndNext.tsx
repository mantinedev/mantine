'use client';

import { useEffect, useRef, useState } from 'react';
import { IconCheck, IconChevronRight } from '@tabler/icons-react';
import { Button, Paper, Textarea, Title } from '@mantine/core';
import classes from './NotesAndNext.module.css';

interface NotesAndNextProps {
  complete: boolean;
  onCompleteToggle: () => void;
}

type SaveState = 'yesterday' | 'saving' | 'now';

function MyNotes() {
  const [notes, setNotes] = useState(
    'Brace elbow on thigh. Cone up 3 times before checking. Try 2 turns a second.'
  );
  const [saveState, setSaveState] = useState<SaveState>('yesterday');
  const timeout = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const change = (value: string) => {
    setNotes(value);
    setSaveState('saving');
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setSaveState('now'), 700);
  };

  return (
    <Paper component="section" className={classes.box} aria-labelledby="clay-notes-title">
      <Title order={2} id="clay-notes-title" className={classes.title}>
        My notes
      </Title>
      <Textarea
        aria-labelledby="clay-notes-title"
        placeholder="Only you can see these"
        minRows={3}
        classNames={{ input: classes.textarea }}
        value={notes}
        onChange={(event) => change(event.currentTarget.value)}
      />
      <div className={classes.rowEnd}>
        <span className={classes.saved}>
          {saveState === 'saving' ? (
            'Saving'
          ) : (
            <>
              <IconCheck size={14} stroke={2.5} className={classes.savedIcon} />
              {saveState === 'now' ? 'Saved just now' : 'Saved yesterday'}
            </>
          )}
        </span>
        <span>Only you can see these</span>
      </div>
    </Paper>
  );
}

function NextThumb() {
  return (
    <span className={classes.thumb}>
      <svg viewBox="0 0 120 90" aria-hidden>
        <rect width="120" height="90" fill="var(--cw-player)" />
        <circle cx="60" cy="45" r="36" fill="var(--cw-wheel)" />
        <circle cx="60" cy="45" r="20" fill="var(--cw-clay)" />
        <circle cx="60" cy="45" r="8" fill="var(--cw-clay-dark)" />
      </svg>
    </span>
  );
}

export function NotesAndNext({ complete, onCompleteToggle }: NotesAndNextProps) {
  return (
    <div className={classes.pair}>
      <MyNotes />

      <Paper component="section" className={classes.box} aria-labelledby="clay-next-title">
        <Title order={2} id="clay-next-title" className={classes.title}>
          Up next
        </Title>
        <a href="#" className={classes.nextCard} onClick={(event) => event.preventDefault()}>
          <NextThumb />
          <span className={classes.nextText}>
            <span className={classes.nextKicker}>Lesson 5, 18 min</span>
            <br />
            <span className={classes.nextName}>Opening the clay and setting the floor</span>
          </span>
        </a>
        <div className={classes.completeRow}>
          <Button
            color={complete ? 'green' : undefined}
            leftSection={<IconCheck size={17} stroke={1.75} />}
            onClick={onCompleteToggle}
          >
            {complete ? 'Lesson complete' : 'Mark lesson complete'}
          </Button>
          <Button
            component="a"
            href="#"
            variant="default"
            rightSection={<IconChevronRight size={17} stroke={1.75} />}
            onClick={(event: React.MouseEvent) => event.preventDefault()}
          >
            Next lesson
          </Button>
        </div>
      </Paper>
    </div>
  );
}
