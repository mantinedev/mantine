'use client';

import { useRef, useState } from 'react';
import { IconCopy, IconFileText, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Paper } from '@mantine/core';
import type { Mode } from './data';
import classes from './Clerk.module.css';

interface AnswerProps {
  mode: Mode;
  time: string;
  children: React.ReactNode;
  withActions: boolean;
  onToast: (message: string) => void;
}

type Feedback = 'up' | 'down' | null;

export function Answer({ mode, time, children, withActions, onToast }: AnswerProps) {
  const ref = useRef<HTMLElement>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const copy = () => {
    const text = (ref.current?.innerText ?? '').replace(/\n{2,}/g, '\n');
    try {
      navigator.clipboard.writeText(text).then(
        () => onToast('Answer copied'),
        () => onToast('Select the text to copy it')
      );
    } catch {
      onToast('Select the text to copy it');
    }
  };

  const rate = (value: 'up' | 'down') => {
    const next = feedback === value ? null : value;
    setFeedback(next);
    if (next) {
      onToast(
        next === 'up'
          ? 'Thanks. Marked as helpful'
          : 'Thanks. Isla will see this in the review queue'
      );
    }
  };

  return (
    <Paper component="article" ref={ref} className={classes.answer}>
      <div className={classes.answerHead}>
        <span className={classes.who}>Clerk</span>
        <Badge>{mode}</Badge>
        <span>{time}</span>
      </div>
      {children}
      {withActions && (
        <div className={classes.answerActions}>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconCopy stroke={1.7} />}
            onClick={copy}
          >
            Copy
          </Button>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconFileText stroke={1.7} />}
            onClick={() => onToast('Added to “Letter to Hollis Property, Draft 1”')}
          >
            Insert into letter
          </Button>
          <span className={classes.spacer} />
          <span className={classes.thumbs}>
            <ActionIcon
              size={28}
              variant={feedback === 'up' ? 'filled' : 'subtle'}
              aria-pressed={feedback === 'up'}
              aria-label="Good answer"
              onClick={() => rate('up')}
            >
              <IconThumbUp size={15} stroke={1.7} />
            </ActionIcon>
            <ActionIcon
              size={28}
              variant={feedback === 'down' ? 'filled' : 'subtle'}
              aria-pressed={feedback === 'down'}
              aria-label="Poor answer"
              onClick={() => rate('down')}
            >
              <IconThumbDown size={15} stroke={1.7} />
            </ActionIcon>
          </span>
        </div>
      )}
    </Paper>
  );
}
